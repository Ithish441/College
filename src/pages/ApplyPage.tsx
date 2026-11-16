import { useState, type FormEvent } from 'react';
import { CheckCircle2, Search, AlertCircle, ArrowRight } from 'lucide-react';
import type { ApplicationSubmission, CourseSlug } from '../types';
import { COURSES, COLLEGE_INFO } from '../data/collegeData';

interface ApplyPageProps {
  initialCourseSlug?: CourseSlug;
}

export function ApplyPage({ initialCourseSlug }: ApplyPageProps) {
  const defaultCourse =
    COURSES.find((c) => c.slug === initialCourseSlug) ?? COURSES[0];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [courseSlug, setCourseSlug] = useState<CourseSlug>(defaultCourse.slug);
  const [specialization, setSpecialization] = useState(defaultCourse.specializations[0]);
  const [previousQualification, setPreviousQualification] = useState(
    defaultCourse.level === 'UG' ? 'Intermediate (10+2)' : 'Bachelor’s Degree'
  );
  const [boardOrUniversity, setBoardOrUniversity] = useState('TSBIE / CBSE');
  const [percentage, setPercentage] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [agreed, setAgreed] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRecord, setSubmittedRecord] = useState<ApplicationSubmission | null>(null);

  // Application Tracker state
  const [lookupCode, setLookupCode] = useState('SJDPG-2026-1042');
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState('');
  const [trackedApp, setTrackedApp] = useState<ApplicationSubmission | null>(null);

  const selectedCourse = COURSES.find((c) => c.slug === courseSlug) ?? COURSES[0];

  const handleCourseChange = (slug: CourseSlug) => {
    setCourseSlug(slug);
    const found = COURSES.find((c) => c.slug === slug);
    if (found) {
      setSpecialization(found.specializations[0]);
      setPreviousQualification(
        found.level === 'UG' ? 'Intermediate (10+2)' : 'Bachelor’s Degree'
      );
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!agreed) {
      setErrorMsg('Please confirm the applicant declaration before submitting.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          dateOfBirth,
          level: selectedCourse.level,
          courseSlug: selectedCourse.slug,
          courseName: selectedCourse.shortTitle,
          specialization,
          previousQualification,
          boardOrUniversity,
          percentage,
          guardianName,
          city,
        }),
      });
      const payload = (await response.json()) as {
        application?: ApplicationSubmission;
        error?: string;
      };
      if (!response.ok || !payload.application) {
        setErrorMsg(payload.error || 'Unable to submit application. Please review your fields.');
      } else {
        setSubmittedRecord(payload.application);
        setLookupCode(payload.application.referenceCode);
      }
    } catch {
      setErrorMsg('Network error while connecting to Admissions server. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleTrack = async (e: FormEvent) => {
    e.preventDefault();
    setLookupError('');
    setTrackedApp(null);
    if (!lookupCode.trim()) return;

    setLookupLoading(true);
    try {
      const res = await fetch(`/api/applications/${encodeURIComponent(lookupCode.trim())}`);
      const data = (await res.json()) as { application?: ApplicationSubmission; error?: string };
      if (!res.ok || !data.application) {
        setLookupError(data.error || 'Reference ID not found.');
      } else {
        setTrackedApp(data.application);
      }
    } catch {
      setLookupError('Unable to reach server. Please retry.');
    } finally {
      setLookupLoading(false);
    }
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      <section className="bg-gradient-to-br from-[#14402B] to-[#1F5F3F] text-white py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
            Online Admissions Portal 2026–27
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2">
            Apply to St. Joseph&apos;s College
          </h1>
          <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90">
            Submit your UG or PG application directly to our King Koti Admissions Office and receive
            an instant application tracking code.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Columns: Application Form or Receipt */}
        <div className="lg:col-span-8">
          {submittedRecord ? (
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-8 space-y-6 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DDF1E4] text-[#14402B] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1F5F3F] uppercase tracking-wider">
                    Application Submitted
                  </p>
                  <h2 className="font-display font-bold text-2xl text-[#1E2A24] mt-1">
                    Thank you, {submittedRecord.fullName}
                  </h2>
                  <p className="text-sm text-[#5E6E66] mt-1">
                    Your application for <strong>{submittedRecord.courseName}</strong> has been
                    recorded. Please save your reference ID below for counselling &amp; tracking.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#DDF1E4]/65 border border-[#4CAF7A]/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-[#1F5F3F] font-medium">Application Reference ID</p>
                  <p className="font-mono font-bold text-2xl text-[#14402B] tabular-nums mt-0.5">
                    {submittedRecord.referenceCode}
                  </p>
                </div>
                <div className="text-sm text-[#1E2A24]">
                  <p>
                    <span className="text-[#5E6E66]">Status:</span>{' '}
                    <span className="font-semibold text-[#14402B]">{submittedRecord.status}</span>
                  </p>
                  <p className="mt-0.5">
                    <span className="text-[#5E6E66]">Specialization:</span>{' '}
                    {submittedRecord.specialization}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRecord(null);
                    setFullName('');
                    setEmail('');
                    setPhone('');
                    setPercentage('');
                    setAgreed(false);
                  }}
                  className="rounded-full bg-[#1F5F3F] hover:bg-[#14402B] text-white text-sm font-semibold px-6 py-2.5 cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 sm:p-8 space-y-6 shadow-xs"
            >
              <div>
                <h2 className="font-display font-bold text-xl text-[#1E2A24]">
                  01. Program Selection
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="courseSlug"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Degree Program *
                    </label>
                    <select
                      id="courseSlug"
                      value={courseSlug}
                      onChange={(e) => handleCourseChange(e.target.value as CourseSlug)}
                      className="w-full rounded-xl border border-[#1E2A24]/20 bg-[#FFFFFF] px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    >
                      {COURSES.map((c) => (
                        <option key={c.slug} value={c.slug}>
                          {c.shortTitle} ({c.level} · {c.annualFee})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="specialization"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Preferred Specialization
                    </label>
                    <select
                      id="specialization"
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      className="w-full rounded-xl border border-[#1E2A24]/20 bg-[#FFFFFF] px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    >
                      {selectedCourse.specializations.map((spec) => (
                        <option key={spec} value={spec}>
                          {spec}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E2A24]/10">
                <h2 className="font-display font-bold text-xl text-[#1E2A24]">
                  02. Applicant Details
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Full Name (as per 10th Memo) *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Siddharth Verma"
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Date of Birth
                    </label>
                    <input
                      id="dateOfBirth"
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@example.com"
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98490 XXXXX"
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guardianName"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Parent / Guardian Name
                    </label>
                    <input
                      id="guardianName"
                      type="text"
                      value={guardianName}
                      onChange={(e) => setGuardianName(e.target.value)}
                      placeholder="Parent full name"
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      City / District
                    </label>
                    <input
                      id="city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E2A24]/10">
                <h2 className="font-display font-bold text-xl text-[#1E2A24]">
                  03. Academic Qualification
                </h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="prevQual"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Qualifying Exam
                    </label>
                    <input
                      id="prevQual"
                      type="text"
                      value={previousQualification}
                      onChange={(e) => setPreviousQualification(e.target.value)}
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="board"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Board / University
                    </label>
                    <input
                      id="board"
                      type="text"
                      value={boardOrUniversity}
                      onChange={(e) => setBoardOrUniversity(e.target.value)}
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="percentage"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Aggregate % (35–100) *
                    </label>
                    <input
                      id="percentage"
                      type="number"
                      step="0.1"
                      min="35"
                      max="100"
                      required
                      value={percentage}
                      onChange={(e) => setPercentage(e.target.value)}
                      placeholder="e.g., 88.5"
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] tabular-nums focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>
                </div>
              </div>

              <label className="flex items-start gap-3 text-sm text-[#5E6E66] pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 rounded border-[#1E2A24]/30 text-[#1F5F3F] focus:ring-[#1F5F3F]"
                />
                <span>
                  I declare that the academic information provided is accurate and understand that
                  final admission is subject to original certificate verification by St. Joseph&apos;s
                  Degree &amp; PG College.
                </span>
              </label>

              {errorMsg && (
                <div
                  role="alert"
                  className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 flex items-center gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] disabled:opacity-60 text-[#14402B] font-semibold text-sm px-8 py-3.5 transition-colors cursor-pointer"
              >
                <span>{submitting ? 'Submitting Application...' : 'Submit Application'}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>

        {/* Right 4 Columns: Application Tracker + Admissions Support */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 space-y-4">
            <h3 className="font-display font-bold text-lg text-[#1E2A24]">
              Track Application Status
            </h3>
            <p className="text-xs text-[#5E6E66]">
              Already applied? Enter your Reference ID (try sample{' '}
              <span className="font-mono font-semibold text-[#1F5F3F]">SJDPG-2026-1042</span>).
            </p>
            <form onSubmit={handleTrack} className="flex gap-2">
              <input
                type="text"
                value={lookupCode}
                onChange={(e) => setLookupCode(e.target.value)}
                aria-label="Application Reference ID"
                placeholder="SJDPG-2026-XXXX"
                className="flex-1 rounded-xl border border-[#1E2A24]/20 px-3 py-2 text-sm font-mono uppercase focus:outline-none focus:border-[#1F5F3F]"
              />
              <button
                type="submit"
                disabled={lookupLoading}
                className="rounded-xl bg-[#1F5F3F] hover:bg-[#14402B] text-white px-4 py-2 text-sm font-medium inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <span>Check</span>
              </button>
            </form>

            {lookupError && (
              <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-2.5">
                {lookupError}
              </p>
            )}

            {trackedApp && (
              <div className="rounded-xl bg-[#DDF1E4]/65 border border-[#4CAF7A]/35 p-4 space-y-1.5 text-sm">
                <p className="font-mono font-bold text-[#14402B]">{trackedApp.referenceCode}</p>
                <p className="font-semibold text-[#1E2A24]">{trackedApp.fullName}</p>
                <p className="text-xs text-[#5E6E66]">
                  {trackedApp.courseName} · {trackedApp.specialization}
                </p>
                <p className="text-xs font-semibold text-[#1F5F3F] pt-1">{trackedApp.status}</p>
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-[#14402B] text-white p-6 space-y-3">
            <h3 className="font-display font-bold text-base">Need Counselling Help?</h3>
            <p className="text-xs text-[#DDF1E4]/85 leading-relaxed">
              Speak with our King Koti admissions team Monday to Saturday, 9:00 AM – 4:30 PM.
            </p>
            <p className="font-mono text-sm font-semibold text-[#D4A533] tabular-nums">
              {COLLEGE_INFO.admissionsHelpline}
            </p>
            <p className="text-xs text-[#DDF1E4]/75">{COLLEGE_INFO.email}</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
