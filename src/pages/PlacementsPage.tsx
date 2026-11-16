import { ArrowUpRight } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { PLACEMENT_STATS_BY_YEAR, RECRUITERS, TESTIMONIALS } from '../data/collegeData';

interface PlacementsPageProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function PlacementsPage({ onNavigate }: PlacementsPageProps) {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      <section className="bg-gradient-to-br from-[#14402B] to-[#1F5F3F] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
              Training &amp; Placement Cell
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2 text-balance">
              Placements &amp; Corporate Outcomes
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90 leading-relaxed">
              Dedicated Campus Recruitment Training (CRT), corporate internships, and 120+ hiring
              partnerships delivering consistent offers across UG and PG cohorts.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('apply')}
            className="inline-flex items-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-6 py-3 cursor-pointer self-start lg:self-auto whitespace-nowrap"
          >
            <span>Apply for 2026–27</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Top Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {[
            { label: 'Placement Assistance Rate', value: '94%', tone: 'bg-[#DDF1E4] border-[#4CAF7A]/40 text-[#14402B]' },
            { label: 'Highest Package (2025–26)', value: '₹14.5 LPA', tone: 'bg-[#D4A533]/20 border-[#D4A533]/50 text-[#14402B]' },
            { label: 'Average CTC Package', value: '₹5.8 LPA', tone: 'bg-[#FFFFFF] border-[#1E2A24]/12 text-[#1E2A24]' },
            { label: 'Visiting Recruiters', value: '124+', tone: 'bg-[#14402B] text-white border-[#1F5F3F]' },
          ].map((stat) => (
            <div key={stat.label} className={`rounded-2xl border p-4 sm:p-6 ${stat.tone}`}>
              <p className="text-[11px] sm:text-xs opacity-80">{stat.label}</p>
              <p className="font-display font-bold text-2xl sm:text-4xl tabular-nums mt-1.5 sm:mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Year-Wise Table */}
        <div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1E2A24] mb-5">
            Four-Year Placement Record
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#1E2A24]/12 bg-[#FFFFFF]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#14402B] text-white text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-5 font-semibold">Academic Year</th>
                  <th className="py-3.5 px-5 font-semibold">Recruiters</th>
                  <th className="py-3.5 px-5 font-semibold">Total Offers</th>
                  <th className="py-3.5 px-5 font-semibold">Highest CTC</th>
                  <th className="py-3.5 px-5 font-semibold">Average CTC</th>
                  <th className="py-3.5 px-5 font-semibold">Placement Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2A24]/10 text-sm">
                {PLACEMENT_STATS_BY_YEAR.map((row) => (
                  <tr key={row.year} className="hover:bg-[#FAF8F2]">
                    <td className="py-4 px-5 font-semibold text-[#1E2A24]">{row.year}</td>
                    <td className="py-4 px-5 font-mono tabular-nums text-[#5E6E66]">
                      {row.recruiters}
                    </td>
                    <td className="py-4 px-5 font-mono tabular-nums text-[#5E6E66]">{row.offers}</td>
                    <td className="py-4 px-5 font-mono tabular-nums font-semibold text-[#1F5F3F]">
                      {row.highestCtc}
                    </td>
                    <td className="py-4 px-5 font-mono tabular-nums text-[#5E6E66]">
                      {row.averageCtc}
                    </td>
                    <td className="py-4 px-5 font-mono tabular-nums font-semibold text-[#1F5F3F]">
                      {row.placementRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CRT Pipeline */}
        <div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1E2A24] mb-6">
            Campus Recruitment Training (CRT) Pipeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                phase: '01. Aptitude & Reasoning',
                detail: 'Quantitative aptitude, logical reasoning, and speed arithmetic drills starting Year 2.',
              },
              {
                phase: '02. Technical & Domain Labs',
                detail: 'SQL, Python, Financial Modeling, Tally Prime, and case-study sprints tailored per major.',
              },
              {
                phase: '03. Mock GD & Alumni Panels',
                detail: 'Simulated group discussions and technical interviews led by corporate alumni mentors.',
              },
              {
                phase: '04. Campus Drives & Internships',
                detail: 'On-campus hiring drives with Big-4 firms, IT majors, and financial services leaders.',
              },
            ].map((item) => (
              <div key={item.phase} className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6">
                <h3 className="font-display font-bold text-base text-[#1F5F3F]">{item.phase}</h3>
                <p className="mt-2 text-sm text-[#5E6E66] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter Directory */}
        <div className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-5 sm:p-8">
          <h2 className="font-display font-bold text-2xl text-[#1E2A24] mb-4">
            Key Corporate Hiring Partners
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {RECRUITERS.map((company) => (
              <div
                key={company}
                className="rounded-xl bg-[#FAF8F2] border border-[#1E2A24]/10 py-4 px-3 text-center font-display font-bold text-sm text-[#1E2A24]"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Stories */}
        <div>
          <h2 className="font-display font-bold text-2xl text-[#1E2A24] mb-6">
            Recent Graduate Placements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <article key={item.name} className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6">
                <div className="flex items-center justify-between text-xs text-[#5E6E66] mb-3">
                  <span>{item.program}</span>
                  <span className="font-mono font-semibold text-[#1F5F3F]">{item.metric}</span>
                </div>
                <p className="text-sm text-[#1E2A24] leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-5 pt-3 border-t border-[#1E2A24]/10">
                  <p className="font-display font-bold text-sm text-[#1E2A24]">{item.name}</p>
                  <p className="text-xs text-[#5E6E66]">{item.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
