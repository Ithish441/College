import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Search } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { COURSES } from '../data/collegeData';
import { SafeImage } from '../components/SafeImage';

interface CoursesHubPageProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function CoursesHubPage({ onNavigate }: CoursesHubPageProps) {
  const [levelFilter, setLevelFilter] = useState<'ALL' | 'UG' | 'PG'>('ALL');
  const [query, setQuery] = useState('');

  const filtered = COURSES.filter((course) => {
    const matchesLevel = levelFilter === 'ALL' || course.level === levelFilter;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      course.shortTitle.toLowerCase().includes(q) ||
      course.fullTitle.toLowerCase().includes(q) ||
      course.department.toLowerCase().includes(q) ||
      course.specializations.some((s) => s.toLowerCase().includes(q));
    return matchesLevel && matchesQuery;
  });

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#14402B] to-[#1F5F3F] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
            Autonomous Curriculum · Osmania University
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2 text-balance">
            Degree &amp; Postgraduate Programs
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90 leading-relaxed">
            Explore our six flagship undergraduate and postgraduate degree tracks. Select any
            program to inspect its semester-wise syllabus, intake capacity, fee structure, and
            recruiter pipeline.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex overflow-x-auto no-scrollbar sm:inline-flex items-center gap-1 p-1 bg-[#DDF1E4]/70 rounded-xl max-w-full self-start">
            {(
              [
                ['ALL', 'All Programs (6)'],
                ['UG', 'Undergraduate (4)'],
                ['PG', 'Postgraduate (2)'],
              ] as const
            ).map(([val, label]) => (
              <button
                key={val}
                type="button"
                onClick={() => setLevelFilter(val)}
                className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  levelFilter === val
                    ? 'text-[#14402B] font-semibold'
                    : 'text-[#5E6E66] hover:text-[#1E2A24]'
                }`}
              >
                {levelFilter === val && (
                  <motion.span
                    layoutId="courses-hub-tab"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    className="absolute inset-0 bg-[#FFFFFF] rounded-lg shadow-xs"
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-80">
            <Search
              className="w-4 h-4 text-[#5E6E66] absolute left-3.5 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search B.Com, Data Science, MBA..."
              aria-label="Search degree programs"
              className="w-full rounded-xl bg-[#FFFFFF] border border-[#1E2A24]/15 pl-10 pr-4 py-2.5 text-sm text-[#1E2A24] placeholder:text-[#5E6E66] focus:outline-none focus:border-[#1F5F3F]"
            />
          </div>
        </div>

        {/* Courses Grid */}
        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-10 text-center">
            <p className="font-display font-semibold text-[#1E2A24]">
              No programs matched &ldquo;{query}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => {
                setLevelFilter('ALL');
                setQuery('');
              }}
              className="mt-3 text-sm font-semibold text-[#1F5F3F] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <motion.article
                key={course.slug}
                layout
                initial={{ opacity: 0.7, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 overflow-hidden flex flex-col justify-between hover:shadow-md will-change-transform"
              >
                <div>
                  <div className="h-48 overflow-hidden">
                    <SafeImage
                      src={course.image}
                      alt={course.fullTitle}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#5E6E66]">
                      <span className="font-semibold text-[#1F5F3F]">{course.level}</span>
                      <span aria-hidden="true">·</span>
                      <span>{course.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums font-mono">{course.annualFee}</span>
                    </div>
                    <h2 className="font-display font-bold text-2xl text-[#1E2A24] mt-2">
                      {course.shortTitle}
                    </h2>
                    <p className="text-xs font-medium text-[#5E6E66] mt-0.5">{course.fullTitle}</p>
                    <p className="text-sm text-[#5E6E66] mt-3 leading-relaxed">{course.overview}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#1E2A24]/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('course-detail', course.slug)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5F3F] hover:text-[#14402B] cursor-pointer"
                  >
                    <span>Full Curriculum</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('apply', course.slug)}
                    className="rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-xs px-4 py-2 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
