import { useState, type FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Send,
} from 'lucide-react';
import { COLLEGE_INFO, COURSES } from '../data/collegeData';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programInterest, setProgramInterest] = useState('B.Com');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          programInterest,
          message,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setErrorMsg(data.error || 'Please check your enquiry details.');
      } else {
        setSent(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
    } catch {
      setErrorMsg('Unable to send enquiry. Please call our admissions desk directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      <section className="bg-gradient-to-br from-[#14402B] to-[#1F5F3F] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
            King Koti, Hyderabad
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2">
            Contact &amp; Campus Map
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90">
            Visit our central Hyderabad campus near Basheerbagh &amp; Abids, or send an admissions
            enquiry to receive a callback within one working day.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 6 Columns: Interactive Map + Campus Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/12 overflow-hidden shadow-xs">
            <div className="h-80 w-full bg-[#DDF1E4]/40 relative">
              <iframe
                title="St. Joseph's Degree & PG College Campus Map - King Koti, Hyderabad"
                src={COLLEGE_INFO.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#1E2A24]/10">
              <div>
                <h2 className="font-display font-bold text-base text-[#1E2A24]">
                  Main Campus · King Koti Road
                </h2>
                <p className="text-xs text-[#5E6E66] mt-0.5">
                  5 mins from Sultan Bazaar &amp; Narayanaguda Metro Stations
                </p>
              </div>
              <a
                href={COLLEGE_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1F5F3F] hover:bg-[#14402B] text-white text-xs font-semibold px-4 py-2.5 transition-colors whitespace-nowrap self-start sm:self-auto"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 space-y-4 text-sm">
            <h3 className="font-display font-bold text-lg text-[#1E2A24]">
              Admissions &amp; General Office
            </h3>
            <div className="space-y-3 text-[#1E2A24]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1F5F3F] shrink-0 mt-1" aria-hidden="true" />
                <span>{COLLEGE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1F5F3F] shrink-0" aria-hidden="true" />
                <span className="tabular-nums">
                  {COLLEGE_INFO.admissionsHelpline} (Admissions) · {COLLEGE_INFO.phoneDisplay}{' '}
                  (Office)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1F5F3F] shrink-0" aria-hidden="true" />
                <span>{COLLEGE_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#1F5F3F] shrink-0" aria-hidden="true" />
                <span>{COLLEGE_INFO.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 6 Columns: Enquiry Form */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 sm:p-8 shadow-xs">
            <h2 className="font-display font-bold text-2xl text-[#1E2A24]">
              Send an Admissions Enquiry
            </h2>
            <p className="text-sm text-[#5E6E66] mt-1">
              Have questions about eligibility, fee concessions, or DOST / TS ICET counselling? Write
              to our counselling desk.
            </p>

            {sent ? (
              <div className="mt-6 rounded-2xl bg-[#DDF1E4] border border-[#4CAF7A]/50 p-6 space-y-3">
                <div className="flex items-center gap-2.5 text-[#14402B] font-display font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                  <span>Enquiry Received</span>
                </div>
                <p className="text-sm text-[#1E2A24]">
                  Thank you for contacting St. Joseph&apos;s Degree &amp; PG College. An admissions
                  counsellor will reach out to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-xs font-semibold text-[#14402B] underline cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="enq-name"
                    className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                  >
                    Your Full Name *
                  </label>
                  <input
                    id="enq-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Student or parent name"
                    className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="enq-email"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="enq-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enq-phone"
                      className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="enq-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98490 XXXXX"
                      className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enq-program"
                    className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                  >
                    Program of Interest
                  </label>
                  <select
                    id="enq-program"
                    value={programInterest}
                    onChange={(e) => setProgramInterest(e.target.value)}
                    className="w-full rounded-xl border border-[#1E2A24]/20 bg-[#FFFFFF] px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                  >
                    {COURSES.map((c) => (
                      <option key={c.slug} value={c.shortTitle}>
                        {c.shortTitle} ({c.level})
                      </option>
                    ))}
                    <option value="Campus Tour / General">Campus Tour / General Query</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enq-message"
                    className="block text-xs font-semibold text-[#1E2A24] mb-1.5"
                  >
                    Message / Question *
                  </label>
                  <textarea
                    id="enq-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about admission dates, fee structure, or campus visits..."
                    className="w-full rounded-xl border border-[#1E2A24]/20 px-3.5 py-2.5 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
                  />
                </div>

                {errorMsg && (
                  <div
                    role="alert"
                    className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] disabled:opacity-60 text-[#14402B] font-semibold text-sm px-7 py-3 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{submitting ? 'Sending...' : 'Submit Enquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
