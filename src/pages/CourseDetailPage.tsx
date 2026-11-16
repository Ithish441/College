import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, GraduationCap, Users } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { COURSES } from '../data/collegeData';
import { SafeImage } from '../components/SafeImage';

interface CourseDetailPageProps {
  courseSlug: CourseSlug;
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function CourseDetailPage({ courseSlug, onNavigate }: CourseDetailPageProps) {
  const course = COURSES.find((c) => c.slug === courseSlug) ?? COURSES[0];
  const [activeSemIdx, setActiveSemIdx] = useState(0);

  useEffect(() => {
    setActiveSemIdx(0);
  }, [courseSlug]);

  const activeBlock = course.curriculum[activeSemIdx] ?? course.curriculum[0];

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Top Program Banner */}
      <section className="bg-gradient-to-br from-[#14402B] via-[#1F5F3F] to-[#14402B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => onNavigate('courses')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#DDF1E4] hover:text-white mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All Courses</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#D4A533] font-medium">
                <span>{course.level === 'UG' ? 'Undergraduate Degree' : 'Postgraduate Degree'}</span>
                <span aria-hidden="true">·</span>
                <span>{course.department}</span>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-3 text-balance">
                {course.shortTitle}
              </h1>
              <p className="text-base sm:text-lg text-[#DDF1E4] font-medium mt-1">
                {course.fullTitle}
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#DDF1E4]/90 leading-relaxed max-w-2xl">
                {course.overview}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('apply', course.slug)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-6 py-3 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Apply for {course.shortTitle}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>
                <button
                  type="button"
                  onClick={() => onNavigate('admissions')}
                  className="inline-flex items-center rounded-full border border-[#DDF1E4]/35 hover:bg-[#FFFFFF]/10 text-white text-sm font-medium px-5 py-3 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Admission Guidelines
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-64 lg:h-full min-h-[260px] rounded-2xl overflow-hidden border border-[#DDF1E4]/20 shadow-lg">
                <SafeImage
                  src={course.image}
                  alt={course.fullTitle}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4-Column Key Specs Strip Below Hero Split */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="rounded-2xl bg-[#FFFFFF]/10 border border-[#DDF1E4]/20 p-3.5 sm:p-4">
              <p className="text-[11px] sm:text-xs text-[#DDF1E4]/80">Program Duration</p>
              <p className="font-display font-bold text-base sm:text-lg text-white mt-1">
                {course.duration}
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFFFFF]/10 border border-[#DDF1E4]/20 p-3.5 sm:p-4">
              <p className="text-[11px] sm:text-xs text-[#DDF1E4]/80">Approved Intake</p>
              <p className="font-display font-bold text-base sm:text-lg text-white mt-1 tabular-nums">
                {course.intakeSeats} Seats
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFFFFF]/10 border border-[#DDF1E4]/20 p-3.5 sm:p-4">
              <p className="text-[11px] sm:text-xs text-[#DDF1E4]/80">Annual Tuition</p>
              <p className="font-display font-bold text-base sm:text-lg text-[#D4A533] mt-1 tabular-nums">
                {course.annualFee}
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFFFFF]/10 border border-[#DDF1E4]/20 p-3.5 sm:p-4">
              <p className="text-[11px] sm:text-xs text-[#DDF1E4]/80">Admission Pathway</p>
              <p className="font-display font-semibold text-xs sm:text-sm text-white mt-1 leading-snug">
                {course.admissionMode}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 8 Columns: Highlights & Interactive Curriculum Tabs */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="font-display font-bold text-2xl text-[#1E2A24]">
                Program Highlights &amp; Specializations
              </h2>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#1F5F3F] font-medium">
                {course.specializations.map((spec, idx) => (
                  <span key={spec} className="inline-flex items-center gap-2">
                    {idx > 0 && (
                      <span className="text-[#5E6E66]/40" aria-hidden="true">
                        /
                      </span>
                    )}
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {course.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#1E2A24]">
                    <CheckCircle2
                      className="w-5 h-5 text-[#1F5F3F] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Semester-wise Curriculum Tabs */}
            <div>
              <h2 className="font-display font-bold text-2xl text-[#1E2A24] mb-4">
                Autonomous Curriculum Structure
              </h2>

              <div className="flex overflow-x-auto no-scrollbar sm:inline-flex gap-1 p-1 rounded-xl bg-[#DDF1E4]/75 mb-4 max-w-full">
                {course.curriculum.map((block, idx) => (
                  <button
                    key={block.semester}
                    type="button"
                    onClick={() => setActiveSemIdx(idx)}
                    className={`relative px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      activeSemIdx === idx
                        ? 'text-[#14402B] font-semibold'
                        : 'text-[#5E6E66] hover:text-[#1E2A24]'
                    }`}
                  >
                    {activeSemIdx === idx && (
                      <motion.span
                        layoutId={`sem-tab-${course.slug}`}
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                        className="absolute inset-0 bg-[#FFFFFF] rounded-lg shadow-xs"
                      />
                    )}
                    <span className="relative z-10">{block.semester}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${course.slug}-${activeBlock.semester}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6"
                >
                  <h3 className="font-display font-bold text-base text-[#1F5F3F]">
                    {activeBlock.semester} Core Subjects
                  </h3>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeBlock.subjects.map((subj, i) => (
                      <div
                        key={subj}
                        className="text-sm text-[#1E2A24] bg-[#FAF8F2] border border-[#1E2A24]/10 rounded-xl px-4 py-3 flex items-center gap-3"
                      >
                        <span className="font-mono text-xs font-semibold text-[#1F5F3F] tabular-nums">
                          0{i + 1}
                        </span>
                        <span>{subj}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right 4 Columns: Eligibility, Careers, Faculty Lead */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 space-y-4">
              <h3 className="font-display font-bold text-lg text-[#1E2A24]">
                Eligibility Criteria
              </h3>
              <p className="text-sm text-[#5E6E66] leading-relaxed">{course.eligibility}</p>
              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('apply', course.slug)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-5 py-3 transition-colors cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </motion.button>
            </div>

            <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#1F5F3F]">
                <GraduationCap className="w-5 h-5" aria-hidden="true" />
                <h3 className="font-display font-bold text-base text-[#1E2A24]">
                  Career Pathways
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-[#1E2A24]">
                {course.careerRoles.map((role) => (
                  <li key={role} className="pb-2 border-b border-[#1E2A24]/10 last:border-b-0 last:pb-0">
                    {role}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <p className="text-xs font-semibold text-[#5E6E66] uppercase tracking-wider">
                  Key Hiring Partners
                </p>
                <p className="text-sm font-medium text-[#1E2A24] mt-1">
                  {course.topRecruiters.join(' · ')}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#14402B] text-white p-6 space-y-2">
              <div className="flex items-center gap-2 text-[#D4A533] text-xs font-semibold uppercase tracking-wider">
                <Users className="w-4 h-4" aria-hidden="true" />
                <span>Department Chair</span>
              </div>
              <p className="font-display font-bold text-lg">{course.facultyLead.name}</p>
              <p className="text-sm text-[#DDF1E4]">{course.facultyLead.designation}</p>
              <p className="text-xs font-mono text-[#DDF1E4]/75">{course.facultyLead.qualification}</p>
            </div>
          </aside>
        </div>

        {/* Switch to Other Courses */}
        <div className="pt-8 border-t border-[#1E2A24]/12">
          <h3 className="font-display font-bold text-lg text-[#1E2A24] mb-4">
            Explore Other Programs
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {COURSES.map((other) => (
              <button
                key={other.slug}
                type="button"
                onClick={() => onNavigate('course-detail', other.slug)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-150 hover:-translate-y-0.5 cursor-pointer ${
                  other.slug === course.slug
                    ? 'bg-[#1F5F3F] text-white border-[#1F5F3F]'
                    : 'bg-[#FFFFFF] text-[#1E2A24] border-[#1E2A24]/12 hover:border-[#4CAF7A]'
                }`}
              >
                <p className="font-display font-bold text-sm">{other.shortTitle}</p>
                <p
                  className={`text-xs mt-0.5 ${
                    other.slug === course.slug ? 'text-[#DDF1E4]' : 'text-[#5E6E66]'
                  }`}
                >
                  {other.level} · {other.duration.split(' ')[0]} Yrs
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
