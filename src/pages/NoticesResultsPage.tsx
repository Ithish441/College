import { useEffect, useState, useMemo, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Search, FileCheck2, AlertCircle } from 'lucide-react';
import type { CourseSlug, ExamResult, NoticeItem, PageId } from '../types';

interface NoticesResultsPageProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

const CATEGORIES = ['All', 'Admissions', 'Results', 'Examinations', 'Scholarships', 'Events'] as const;

export function NoticesResultsPage({ onNavigate }: NoticesResultsPageProps) {
  const [category, setCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [allNotices, setAllNotices] = useState<NoticeItem[]>([]);
  const [loadingNotices, setLoadingNotices] = useState(true);
  const [noticesError, setNoticesError] = useState('');

  // Exam Result Lookup
  const [rollNo, setRollNo] = useState('121424867001');
  const [resultLoading, setResultLoading] = useState(false);
  const [resultError, setResultError] = useState('');
  const [resultData, setResultData] = useState<ExamResult | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoadingNotices(true);
      setNoticesError('');
      try {
        const res = await fetch('/api/notices');
        const data = (await res.json()) as { notices?: NoticeItem[] };
        if (active) {
          setAllNotices(data.notices ?? []);
        }
      } catch {
        if (active) setNoticesError('Unable to load circulars from the examination server.');
      } finally {
        if (active) setLoadingNotices(false);
      }
    };
    void load();
    return () => {
      active = false;
    };
  }, []);

  // Zero-lag 0ms client filtering on fetched notices
  const notices = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allNotices.filter((n) => {
      const catMatch = category === 'All' || n.category === category;
      const qMatch =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.referenceNo.toLowerCase().includes(q);
      return catMatch && qMatch;
    });
  }, [allNotices, category, searchQuery]);

  const fetchResult = async (ticket: string) => {
    setResultError('');
    setResultData(null);
    if (!ticket.trim()) return;
    setResultLoading(true);
    try {
      const res = await fetch(`/api/results/${encodeURIComponent(ticket.trim())}`);
      const payload = (await res.json()) as { result?: ExamResult; error?: string };
      if (!res.ok || !payload.result) {
        setResultError(payload.error || 'No result record found.');
      } else {
        setResultData(payload.result);
      }
    } catch {
      setResultError('Unable to reach Examination Cell server.');
    } finally {
      setResultLoading(false);
    }
  };

  const handleResultSubmit = (e: FormEvent) => {
    e.preventDefault();
    void fetchResult(rollNo);
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      <section className="bg-gradient-to-br from-[#14402B] to-[#1F5F3F] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
            Controller of Examinations &amp; Circulars
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2">
            Results &amp; Official Notices
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90">
            Access autonomous end-semester examination results, admission circulars, scholarship
            deadlines, and examination timetables.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Interactive Autonomous Exam Result Lookup */}
        <div className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#1F5F3F] text-xs font-semibold uppercase tracking-wider">
                <FileCheck2 className="w-4 h-4" aria-hidden="true" />
                <span>Autonomous Result Portal</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-[#1E2A24] mt-1">
                Verify Semester Examination Marks
              </h2>
              <p className="text-xs sm:text-sm text-[#5E6E66] mt-1">
                Sample Hall Tickets:{' '}
                {['121424867001', '121424402018', '121425672009'].map((sample, i) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => {
                      setRollNo(sample);
                      void fetchResult(sample);
                    }}
                    className="font-mono font-semibold text-[#1F5F3F] hover:underline mr-2 cursor-pointer"
                  >
                    {sample}
                    {i < 2 ? ',' : ''}
                  </button>
                ))}
              </p>
            </div>

            <form onSubmit={handleResultSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto">
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                aria-label="Hall Ticket Number"
                placeholder="Enter Hall Ticket No."
                className="w-full sm:w-56 rounded-xl border border-[#1E2A24]/20 px-4 py-2.5 text-sm font-mono uppercase text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
              />
              <button
                type="submit"
                disabled={resultLoading}
                className="rounded-xl bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-6 py-2.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                {resultLoading ? 'Checking...' : 'View Result'}
              </button>
            </form>
          </div>

          {resultError && (
            <div
              role="alert"
              className="mt-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800 flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{resultError}</span>
            </div>
          )}

          {resultData && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 pt-6 border-t border-[#1E2A24]/12 space-y-5"
            >
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 bg-[#FAF8F2] rounded-2xl p-4 border border-[#1E2A24]/10 text-sm">
                <div>
                  <p className="text-xs text-[#5E6E66]">Student Name</p>
                  <p className="font-display font-bold text-[#1E2A24]">{resultData.studentName}</p>
                </div>
                <div>
                  <p className="text-xs text-[#5E6E66]">Hall Ticket</p>
                  <p className="font-mono font-semibold text-[#1E2A24] tabular-nums">
                    {resultData.rollNo}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#5E6E66]">Program &amp; Term</p>
                  <p className="font-medium text-[#1E2A24]">
                    {resultData.program} · {resultData.semester}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#5E6E66]">SGPA / CGPA</p>
                  <p className="font-mono font-bold text-[#1F5F3F] tabular-nums">
                    {resultData.sgpa} / {resultData.cgpa}
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-xs text-[#5E6E66]">Result Status</p>
                  <p className="font-semibold text-[#1F5F3F]">{resultData.status}</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[#1E2A24]/12">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#14402B] text-white text-xs uppercase tracking-wider">
                      <th className="py-3 px-4">Code</th>
                      <th className="py-3 px-4">Course Title</th>
                      <th className="py-3 px-4">Credits</th>
                      <th className="py-3 px-4">Grade</th>
                      <th className="py-3 px-4">Grade Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E2A24]/10">
                    {resultData.subjects.map((sub) => (
                      <tr key={sub.code} className="hover:bg-[#FAF8F2]">
                        <td className="py-3 px-4 font-mono text-[#5E6E66]">{sub.code}</td>
                        <td className="py-3 px-4 font-medium text-[#1E2A24]">{sub.subject}</td>
                        <td className="py-3 px-4 font-mono tabular-nums text-[#5E6E66]">
                          {sub.credits}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-[#1F5F3F]">{sub.grade}</td>
                        <td className="py-3 px-4 font-mono tabular-nums text-[#5E6E66]">
                          {sub.points}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>

        {/* Notices & Circulars Board */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center gap-1 p-1 bg-[#DDF1E4]/70 rounded-xl max-w-full">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    category === cat
                      ? 'text-[#14402B] font-semibold'
                      : 'text-[#5E6E66] hover:text-[#1E2A24]'
                  }`}
                >
                  {category === cat && (
                    <motion.span
                      layoutId="notices-cat-tab"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 bg-[#FFFFFF] rounded-lg shadow-xs"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search
                className="w-4 h-4 text-[#5E6E66] absolute left-3.5 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search circulars..."
                aria-label="Search official notices"
                className="w-full rounded-xl bg-[#FFFFFF] border border-[#1E2A24]/15 pl-10 pr-4 py-2 text-sm text-[#1E2A24] focus:outline-none focus:border-[#1F5F3F]"
              />
            </div>
          </div>

          {loadingNotices ? (
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-8 text-center text-sm text-[#5E6E66]">
              Loading official notices...
            </div>
          ) : noticesError ? (
            <div className="rounded-2xl bg-red-50 border border-red-200 p-6 text-sm text-red-800">
              {noticesError}
            </div>
          ) : notices.length === 0 ? (
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-8 text-center text-sm text-[#5E6E66]">
              No circulars matched your filter.
            </div>
          ) : (
            <div className="space-y-4">
              {notices.map((notice) => (
                <motion.article
                  key={notice.id}
                  layout
                  initial={{ opacity: 0.7, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#5E6E66]">
                      <span className="font-semibold text-[#1F5F3F]">{notice.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{notice.publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{notice.referenceNo}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#1E2A24]">
                      {notice.title}
                    </h3>
                    <p className="text-sm text-[#5E6E66] leading-relaxed max-w-3xl">
                      {notice.summary}
                    </p>
                  </div>

                  {notice.actionTarget && notice.actionLabel && (
                    <button
                      type="button"
                      onClick={() => onNavigate(notice.actionTarget!)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-xs px-4 py-2.5 shrink-0 self-start sm:self-center cursor-pointer whitespace-nowrap"
                    >
                      <span>{notice.actionLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  )}
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
