import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { FACILITIES } from '../data/collegeData';
import { SafeImage } from '../components/SafeImage';

interface FacilitiesPageProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function FacilitiesPage({ onNavigate }: FacilitiesPageProps) {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      <section className="bg-gradient-to-br from-[#14402B] to-[#1F5F3F] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
            King Koti Infrastructure
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2 text-balance">
            Campus Facilities &amp; Learning Spaces
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90 leading-relaxed">
            Purpose-built academic libraries, high-spec data science laboratories, acoustic seminar
            halls, and indoor athletics facilities designed for hands-on learning.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {FACILITIES.map((facility, idx) => (
          <article
            key={facility.id}
            className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div
              className={`lg:col-span-5 min-h-[260px] ${
                idx % 2 === 1 ? 'lg:order-2' : ''
              }`}
            >
              <SafeImage
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between ${
                idx % 2 === 1 ? 'lg:order-1' : ''
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#5E6E66]">
                  <span className="font-semibold text-[#1F5F3F]">{facility.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{facility.capacityOrScale}</span>
                </div>
                <h2 className="font-display font-bold text-2xl text-[#1E2A24] mt-2">
                  {facility.name}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#5E6E66] leading-relaxed">
                  {facility.summary}
                </p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {facility.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-[#1E2A24]">
                      <CheckCircle2
                        className="w-4 h-4 text-[#1F5F3F] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        {/* Visit CTA */}
        <div className="rounded-3xl bg-[#14402B] text-white p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-2xl">Experience our King Koti campus in person</h3>
            <p className="text-sm text-[#DDF1E4]/85 mt-1">
              Guided parent &amp; student tours of our labs and library run Monday through Saturday.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-6 py-3 transition-colors cursor-pointer shrink-0"
          >
            <span>Schedule Campus Tour</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
