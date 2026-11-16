import { ArrowUpRight, Calendar, CheckCircle2, FileText, Award } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { COLLEGE_INFO, COURSES } from '../data/collegeData';

interface AdmissionsPageProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function AdmissionsPage({ onNavigate }: AdmissionsPageProps) {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#14402B] via-[#1F5F3F] to-[#14402B] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
              Admissions Cycle 2026–27
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2 text-balance">
              Admissions &amp; Eligibility Guide
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90 leading-relaxed">
              Transparent merit-based admissions under Osmania University autonomous norms and
              Telangana State DOST / TS ICET frameworks.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('apply')}
            className="inline-flex items-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-6 py-3 transition-colors cursor-pointer self-start lg:self-auto whitespace-nowrap"
          >
            <span>Open Online Application</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Step-by-Step Process */}
        <div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1E2A24] mb-8">
            Four-Step Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01. Online Registration',
                desc: 'Submit your academic profile and program preference through the Apply Now portal to receive a SJDPG-2026 reference ID.',
              },
              {
                step: '02. Merit Screening / DOST / ICET',
                desc: 'UG applicants participate via Telangana DOST & institutional merit; MBA/MCA applicants submit valid TS ICET / CAT ranks.',
              },
              {
                step: '03. Document Verification & Interaction',
                desc: 'Visit the King Koti Admissions Office with original certificates for faculty interaction and seat allotment confirmation.',
              },
              {
                step: '04. Fee Remittance & Enrollment',
                desc: 'Complete annual tuition payment digitally or at the campus bank counter to lock your roll number and orientation slot.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6">
                <h3 className="font-display font-bold text-base text-[#1F5F3F]">{item.step}</h3>
                <p className="mt-2.5 text-sm text-[#5E6E66] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Eligibility & Fee Table */}
        <div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1E2A24] mb-6">
            Program Intake, Eligibility &amp; Fee Overview
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#1E2A24]/12 bg-[#FFFFFF]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#14402B] text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-5 font-semibold">Program</th>
                  <th className="py-3.5 px-5 font-semibold">Duration</th>
                  <th className="py-3.5 px-5 font-semibold">Intake</th>
                  <th className="py-3.5 px-5 font-semibold">Annual Tuition</th>
                  <th className="py-3.5 px-5 font-semibold">Minimum Eligibility</th>
                  <th className="py-3.5 px-5 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2A24]/10 text-sm">
                {COURSES.map((course) => (
                  <tr key={course.slug} className="hover:bg-[#FAF8F2]">
                    <td className="py-4 px-5 font-display font-bold text-[#1E2A24] whitespace-nowrap">
                      {course.shortTitle}
                    </td>
                    <td className="py-4 px-5 text-[#5E6E66] whitespace-nowrap">{course.duration}</td>
                    <td className="py-4 px-5 font-mono tabular-nums text-[#1E2A24]">
                      {course.intakeSeats}
                    </td>
                    <td className="py-4 px-5 font-mono tabular-nums font-semibold text-[#1F5F3F] whitespace-nowrap">
                      {course.annualFee}
                    </td>
                    <td className="py-4 px-5 text-[#5E6E66] min-w-[260px]">{course.eligibility}</td>
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => onNavigate('apply', course.slug)}
                        className="text-xs font-semibold bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] px-3.5 py-1.5 rounded-full cursor-pointer"
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents & Scholarships Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-7 space-y-4">
            <div className="flex items-center gap-2.5 text-[#1F5F3F]">
              <FileText className="w-5 h-5" aria-hidden="true" />
              <h3 className="font-display font-bold text-xl text-[#1E2A24]">
                Required Documents Checklist
              </h3>
            </div>
            <ul className="space-y-2.5 text-sm text-[#1E2A24]">
              {[
                'SSC / 10th Class Memorandum of Marks (Original + 2 Copies)',
                '10+2 / Intermediate Marks Memo (for UG) or Consolidated Degree Marks Memo (for PG)',
                'Transfer Certificate (TC) & Bonafide / Conduct Certificate',
                'TS ICET / CAT Rank Card & Hall Ticket (for MBA & MCA applicants)',
                'Aadhaar Card Copy & 4 Recent Passport-Size Color Photographs',
                'Caste / Income / Minority Certificate (where applicable for scholarships)',
              ].map((doc) => (
                <li key={doc} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5F3F] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#1F5F3F] text-white p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#D4A533]">
                <Award className="w-5 h-5" aria-hidden="true" />
                <h3 className="font-display font-bold text-xl">
                  Merit Scholarships &amp; Key Dates
                </h3>
              </div>
              <p className="text-sm text-[#DDF1E4] leading-relaxed">
                Students securing 90%+ in Intermediate (UG) or 8.5+ CGPA in Degree (PG) qualify
                for St. Joseph&apos;s Merit Fee Concession (up to 50% tuition waiver), alongside
                Telangana ePASS scholarships.
              </p>
              <div className="space-y-3 text-sm border-t border-[#DDF1E4]/20 pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-4">
                  <span className="inline-flex items-center gap-2 text-[#DDF1E4]">
                    <Calendar className="w-4 h-4 text-[#D4A533] shrink-0" aria-hidden="true" />
                    Early Merit Application Deadline
                  </span>
                  <span className="font-mono font-semibold tabular-nums pl-6 sm:pl-0">
                    June 15, 2026
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-4">
                  <span className="inline-flex items-center gap-2 text-[#DDF1E4]">
                    <Calendar className="w-4 h-4 text-[#D4A533] shrink-0" aria-hidden="true" />
                    Commencement of Academic Classes
                  </span>
                  <span className="font-mono font-semibold tabular-nums pl-6 sm:pl-0">
                    July 06, 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#DDF1E4]/20">
              <span className="text-xs text-[#DDF1E4]">
                Helpline: {COLLEGE_INFO.admissionsHelpline}
              </span>
              <button
                type="button"
                onClick={() => onNavigate('apply')}
                className="inline-flex items-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-5 py-2.5 transition-colors cursor-pointer"
              >
                <span>Proceed to Application Form</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
