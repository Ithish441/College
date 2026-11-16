import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building2,
  GraduationCap,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import {
  COLLEGE_IMAGES,
  COLLEGE_INFO,
  COURSES,
  RECRUITERS,
  TESTIMONIALS,
} from '../data/collegeData';
import { SafeImage } from '../components/SafeImage';
import { ManagementSection } from '../components/ManagementSection';

interface HomePageProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeArcIndex, setActiveArcIndex] = useState<number>(3);

  return (
    <div className="bg-[#FAF8F2]">
      {/* 1. Forest Emerald Atmospheric Hero Banner */}
      <section className="px-3 sm:px-6 lg:px-8 pt-4 pb-6">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#14402B] via-[#1F5F3F] to-[#2B7852] text-white shadow-xl">
          {/* Fast GPU-friendly campus backdrop without heavy mix-blend filters */}
          <div className="absolute inset-0 pointer-events-none">
            <SafeImage
              src={COLLEGE_IMAGES.heroCampus}
              alt=""
              priority
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#14402B]/85 via-[#1F5F3F]/75 to-[#1F5F3F]/90" />
          </div>

          <div className="relative z-10 px-5 sm:px-10 pt-10 sm:pt-14 pb-10 sm:pb-12 text-center">
            {/* Primary Display Headline */}
            <h1 className="font-display font-bold tracking-tight text-white text-balance max-w-3xl mx-auto text-[clamp(2.25rem,4.5vw,3.85rem)] leading-[1.08]">
              Shaping future leaders in Commerce, Tech and Management
            </h1>

            <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-[#DDF1E4]/90 leading-relaxed">
              Industry-integrated UG &amp; PG degrees in the heart of King Koti, Hyderabad —
              combining autonomous academic rigor with dedicated corporate placement mentorship.
            </p>

            {/* Hero Actions: Secondary Glass + Primary Gold CTA */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.14 }}
                onClick={() => onNavigate('courses')}
                className="inline-flex items-center justify-center rounded-full bg-[#14402B]/70 hover:bg-[#14402B]/90 border border-[#DDF1E4]/30 text-white text-sm font-semibold px-6 py-3 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Explore Courses
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.14 }}
                onClick={() => onNavigate('apply')}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] text-sm font-semibold pl-6 pr-2.5 py-2 transition-colors duration-150 whitespace-nowrap shrink-0 shadow-md cursor-pointer"
              >
                <span>Apply Now</span>
                <span className="w-8 h-8 rounded-full bg-[#14402B] text-[#D4A533] inline-flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </motion.button>
            </div>

            {/* Interactive Curved / Fanned Showcase Card Arc */}
            <div className="mt-10 sm:mt-12">
              <div className="flex md:grid md:grid-cols-7 gap-3 overflow-x-auto md:overflow-visible pb-3 md:pb-0 snap-x snap-mandatory items-stretch">
                {/* Card 1: B.Com Honors */}
                <motion.button
                  type="button"
                  onMouseEnter={() => setActiveArcIndex(0)}
                  onFocus={() => setActiveArcIndex(0)}
                  onClick={() => onNavigate('course-detail', 'bcom')}
                  whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className={`snap-center shrink-0 w-44 md:w-auto text-left rounded-2xl bg-[#FFFFFF] text-[#1E2A24] p-3.5 shadow-lg md:translate-y-4 md:-rotate-3 cursor-pointer flex flex-col justify-between will-change-transform ${
                    activeArcIndex === 0 ? 'ring-2 ring-[#D4A533]' : ''
                  }`}
                >
                  <div>
                    <p className="text-[11px] font-semibold text-[#1F5F3F]">UG Commerce</p>
                    <p className="font-display font-bold text-sm mt-1">B.Com Honors</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-[#1E2A24]/10">
                    <p className="font-mono text-xs font-semibold text-[#1E2A24] tabular-nums">
                      360 Seats
                    </p>
                    <p className="text-[11px] text-[#5E6E66]">ACCA &amp; Fintech</p>
                  </div>
                </motion.button>

                {/* Card 2: Central Library */}
                <motion.button
                  type="button"
                  onMouseEnter={() => setActiveArcIndex(1)}
                  onFocus={() => setActiveArcIndex(1)}
                  onClick={() => onNavigate('facilities')}
                  whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className={`snap-center shrink-0 w-44 md:w-auto text-left rounded-2xl bg-[#FFFFFF] text-[#1E2A24] p-3 shadow-lg md:translate-y-2 md:-rotate-2 cursor-pointer flex flex-col justify-between will-change-transform ${
                    activeArcIndex === 1 ? 'ring-2 ring-[#D4A533]' : ''
                  }`}
                >
                  <div className="h-20 rounded-xl overflow-hidden mb-2.5">
                    <SafeImage
                      src={COLLEGE_IMAGES.library}
                      alt="Central Library"
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-[#1E2A24]">Central Library</p>
                    <p className="text-[11px] text-[#5E6E66] tabular-nums">48,500+ Volumes</p>
                  </div>
                </motion.button>

                {/* Card 3: Student Campus Portrait */}
                <motion.button
                  type="button"
                  onMouseEnter={() => setActiveArcIndex(2)}
                  onFocus={() => setActiveArcIndex(2)}
                  onClick={() => onNavigate('gallery')}
                  whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className={`snap-center shrink-0 w-44 md:w-auto text-left rounded-2xl overflow-hidden relative bg-[#14402B] text-white shadow-lg md:translate-y-1 md:-rotate-1 cursor-pointer min-h-[152px] will-change-transform ${
                    activeArcIndex === 2 ? 'ring-2 ring-[#D4A533]' : ''
                  }`}
                >
                  <SafeImage
                    src={COLLEGE_IMAGES.studentPortrait}
                    alt="Josephite Students on Campus"
                    priority
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14402B]/90 via-[#14402B]/25 to-transparent" />
                  <div className="relative z-10 p-3 h-full flex flex-col justify-end">
                    <p className="text-[11px] text-[#D4A533] font-medium">King Koti Campus</p>
                    <p className="font-display font-bold text-xs">4,200+ Active Scholars</p>
                  </div>
                </motion.button>

                {/* Card 4: B.Sc Data Science Centerpiece */}
                <motion.button
                  type="button"
                  onMouseEnter={() => setActiveArcIndex(3)}
                  onFocus={() => setActiveArcIndex(3)}
                  onClick={() => onNavigate('course-detail', 'bsc-data-science')}
                  whileHover={{ y: -8, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className={`snap-center shrink-0 w-44 md:w-auto text-left rounded-2xl bg-[#FFFFFF] text-[#1E2A24] p-3 shadow-xl cursor-pointer flex flex-col justify-between will-change-transform ${
                    activeArcIndex === 3 ? 'ring-2 ring-[#D4A533]' : ''
                  }`}
                >
                  <div className="h-20 rounded-xl overflow-hidden mb-2.5">
                    <SafeImage
                      src={COLLEGE_IMAGES.dataScienceLab}
                      alt="Data Science Lab"
                      priority
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#1F5F3F]">Python &amp; ML Lab</p>
                    <p className="font-display font-bold text-xs">B.Sc Data Science</p>
                  </div>
                </motion.button>

                {/* Card 5: Deep Forest Dark Contrast Card */}
                <motion.button
                  type="button"
                  onMouseEnter={() => setActiveArcIndex(4)}
                  onFocus={() => setActiveArcIndex(4)}
                  onClick={() => onNavigate('placements')}
                  whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className={`snap-center shrink-0 w-44 md:w-auto text-left rounded-2xl bg-[#14402B] text-white p-3.5 shadow-xl md:translate-y-1 md:rotate-1 cursor-pointer flex flex-col justify-between border border-[#4CAF7A]/25 will-change-transform ${
                    activeArcIndex === 4 ? 'ring-2 ring-[#D4A533]' : ''
                  }`}
                >
                  <p className="font-display font-semibold text-xs leading-snug">
                    Curriculum built for{' '}
                    <span className="text-[#D4A533]">Commerce, Analytics &amp; Leadership</span>
                  </p>
                  <div className="mt-4 pt-2 border-t border-[#4CAF7A]/20">
                    <p className="font-mono text-sm font-bold text-[#4CAF7A] tabular-nums">
                      94% Placed
                    </p>
                    <p className="text-[11px] text-[#DDF1E4]/80">Placement Cell</p>
                  </div>
                </motion.button>

                {/* Card 6: MBA & MCA PG Track */}
                <motion.button
                  type="button"
                  onMouseEnter={() => setActiveArcIndex(5)}
                  onFocus={() => setActiveArcIndex(5)}
                  onClick={() => onNavigate('course-detail', 'mba')}
                  whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className={`snap-center shrink-0 w-44 md:w-auto text-left rounded-2xl bg-[#1F5F3F] text-white p-3.5 shadow-lg md:translate-y-2 md:rotate-2 cursor-pointer flex flex-col justify-between border border-[#DDF1E4]/25 will-change-transform ${
                    activeArcIndex === 5 ? 'ring-2 ring-[#D4A533]' : ''
                  }`}
                >
                  <div className="w-7 h-7 rounded-full bg-[#D4A533] text-[#14402B] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="mt-4">
                    <p className="font-display font-bold text-xs">MBA &amp; MCA</p>
                    <p className="text-[11px] text-[#DDF1E4] mt-0.5">
                      TS ICET &amp; Management Seats
                    </p>
                  </div>
                </motion.button>

                {/* Card 7: Highest CTC / Recruiters */}
                <motion.button
                  type="button"
                  onMouseEnter={() => setActiveArcIndex(6)}
                  onFocus={() => setActiveArcIndex(6)}
                  onClick={() => onNavigate('placements')}
                  whileHover={{ y: -8, scale: 1.03, rotate: 0 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                  className={`snap-center shrink-0 w-44 md:w-auto text-left rounded-2xl bg-[#FFFFFF] text-[#1E2A24] p-3.5 shadow-lg md:translate-y-4 md:rotate-3 cursor-pointer flex flex-col justify-between will-change-transform ${
                    activeArcIndex === 6 ? 'ring-2 ring-[#D4A533]' : ''
                  }`}
                >
                  <div>
                    <p className="text-[11px] font-medium text-[#5E6E66]">Top Package</p>
                    <p className="font-display font-bold text-lg text-[#14402B] tabular-nums mt-1">
                      ₹14.5 LPA
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#1E2A24]/10">
                    <p className="text-[11px] font-semibold text-[#1F5F3F] tabular-nums">
                      120+ Recruiters
                    </p>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Institutional Trust & Star Proof Line */}
            <div className="mt-6 flex flex-col items-center gap-1.5">
              <p className="text-xs sm:text-sm font-medium text-[#DDF1E4]">
                Rated <span className="tabular-nums font-semibold text-white">4.8/5</span> by{' '}
                <span className="tabular-nums font-semibold text-white">4,500+</span> students &amp;
                alumni · Est. 1997
              </p>
              <div className="flex items-center gap-1 text-[#D4A533]" aria-label="4.8 out of 5 stars">
                {[0, 1, 2, 3, 4].map((idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-[#D4A533]" aria-hidden="true" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Smooth GPU-Composited Recruiter Logo Strip */}
      <section
        aria-label="Campus Recruiters"
        className="border-y border-[#1E2A24]/10 bg-[#FFFFFF] py-7 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-center text-xs font-medium text-[#5E6E66]">
            Trusted by leading global employers recruiting from St. Joseph&apos;s Degree &amp; PG
            College
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="animate-marquee items-center gap-12 px-6">
            {[...RECRUITERS, ...RECRUITERS].map((company, idx) => (
              <span
                key={`${company}-${idx}`}
                className="font-display font-bold text-sm sm:text-base tracking-tight text-[#5E6E66]/80 hover:text-[#1F5F3F] transition-colors whitespace-nowrap select-none"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Editorial About & Quick Stats Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-[#1F5F3F] uppercase mb-3">
            About St. Joseph&apos;s
          </p>
          <h2 className="font-display font-bold text-[#1E2A24] tracking-tight text-balance text-2xl sm:text-4xl leading-tight">
            An autonomous Hyderabad college dedicated to{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1F5F3F] text-white align-middle mx-1">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
            </span>{' '}
            sharper scholars{' '}
            <span className="text-[#5E6E66] font-semibold">and</span>{' '}
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#4CAF7A] text-[#14402B] align-middle mx-1">
              <TrendingUp className="w-4 h-4" aria-hidden="true" />
            </span>{' '}
            career-ready graduates
          </h2>
        </div>

        {/* 3-Column Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Bento Card 1: Tall Portrait with Bottom Metric Overlay */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl overflow-hidden min-h-[340px] bg-[#1F5F3F] border border-[#1E2A24]/10 flex flex-col justify-end p-4"
          >
            <SafeImage
              src={COLLEGE_IMAGES.studentPortrait}
              alt="Students at St. Joseph's King Koti Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14402B]/70 via-transparent to-[#14402B]/35" />
            <div className="relative z-10 flex items-center justify-between mb-auto pt-1 px-1">
              <span className="font-display font-bold text-sm text-white drop-shadow">
                King Koti, Hyderabad
              </span>
              <span className="w-8 h-8 rounded-xl bg-[#FFFFFF]/95 text-[#1F5F3F] flex items-center justify-center shadow-xs">
                <Building2 className="w-4 h-4" aria-hidden="true" />
              </span>
            </div>

            <div className="relative z-10 bg-[#FFFFFF] rounded-2xl p-5 shadow-md">
              <p className="font-display font-bold text-3xl sm:text-4xl text-[#14402B] tabular-nums">
                28+
              </p>
              <p className="mt-1.5 text-sm text-[#5E6E66] leading-relaxed">
                Years of autonomous academic excellence under Osmania University affiliation.
              </p>
            </div>
          </motion.div>

          {/* Bento Card 2: Surface Card with 94% Placement Rate + Graduate Quote */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-[#FFFFFF] border border-[#1E2A24]/10 p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-medium text-[#5E6E66]">
                Placement &amp; Career Assistance
              </p>
              <p className="font-display font-bold text-4xl sm:text-5xl text-[#1E2A24] tabular-nums mt-2">
                94%
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center -space-x-2">
                {['RD', 'AK', 'SC', 'MF'].map((initials, index) => (
                  <span
                    key={initials}
                    className={`w-9 h-9 rounded-full border-2 border-[#FFFFFF] flex items-center justify-center text-xs font-bold ${
                      index % 2 === 0
                        ? 'bg-[#1F5F3F] text-white'
                        : 'bg-[#D4A533] text-[#14402B]'
                    }`}
                  >
                    {initials}
                  </span>
                ))}
                <span className="pl-4 text-xs font-medium text-[#5E6E66]">
                  2025–26 Batch Offers
                </span>
              </div>
              <p className="text-sm text-[#1E2A24] leading-relaxed">
                &ldquo;Through IFRS labs and structured mock interview panels, I cleared Deloitte
                USI campus placements in Semester V.&rdquo;
              </p>
              <p className="text-xs font-medium text-[#5E6E66]">
                Riya Deshmukh · B.Com Honors &apos;25
              </p>
            </div>
          </motion.div>

          {/* Bento Column 3: Mint Accent Card + Deep Forest Dark Metric Card */}
          <div className="flex flex-col gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 rounded-3xl bg-[#DDF1E4] border border-[#4CAF7A]/35 text-[#14402B] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-semibold text-[#1F5F3F]">
                  Annual Corporate Recruiters
                </p>
                <p className="font-display font-bold text-4xl sm:text-5xl tabular-nums mt-2">
                  120+
                </p>
              </div>
              <p className="mt-6 text-sm text-[#1E2A24] leading-relaxed font-medium">
                Global audit, analytics, consulting, and technology employers visiting King Koti
                each placement cycle.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-[#14402B] text-white px-6 py-6 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-xs text-[#DDF1E4]/75">Global Alumni Network</p>
                <p className="text-sm font-medium text-[#DDF1E4] mt-0.5">Across 18+ Countries</p>
              </div>
              <p className="font-display font-bold text-3xl text-[#D4A533] tabular-nums">
                18,000+
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. College Management & Leadership (3 Photo Cards) */}
      <ManagementSection onNavigate={onNavigate} />

      {/* 5. Featured Courses Hub Preview */}
      <section className="bg-[#FFFFFF] border-y border-[#1E2A24]/10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#1E2A24] tracking-tight text-balance">
                Six career-focused UG &amp; PG degrees
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('courses')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5F3F] hover:text-[#14402B] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Compare all programs</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COURSES.slice(0, 4).map((course) => (
              <motion.div
                key={course.slug}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl bg-[#FAF8F2] border border-[#1E2A24]/12 overflow-hidden flex flex-col justify-between hover:shadow-md will-change-transform"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-[#DDF1E4]/40">
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
                    </div>

                    <h3 className="font-display font-bold text-xl text-[#1E2A24] mt-2">
                      {course.shortTitle}
                    </h3>
                    <p className="text-sm text-[#5E6E66] mt-2 leading-relaxed">{course.tagline}</p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-[#1E2A24]/10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('course-detail', course.slug)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F5F3F] hover:text-[#14402B] cursor-pointer"
                  >
                    <span>Syllabus &amp; Details</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('apply', course.slug)}
                    className="text-xs font-semibold text-[#14402B] bg-[#D4A533] hover:bg-[#c59628] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Attributable Student & Alumni Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#1E2A24] tracking-tight text-balance">
              Verified graduate stories
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('placements')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F5F3F] hover:text-[#14402B] cursor-pointer self-start md:self-auto"
          >
            <span>View Placement Report</span>
            <Briefcase className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <motion.article
              key={item.name}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#5E6E66] mb-4">
                  <span>{item.program}</span>
                  <span className="font-mono font-semibold text-[#1F5F3F] tabular-nums">
                    {item.metric}
                  </span>
                </div>
                <p className="text-sm text-[#1E2A24] leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1E2A24]/10">
                <p className="font-display font-bold text-sm text-[#1E2A24]">{item.name}</p>
                <p className="text-xs text-[#5E6E66] mt-0.5">{item.outcome}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Conversion Strip */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#14402B] to-[#1F5F3F] text-white p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
              Ready to join the 2026–27 cohort at King Koti?
            </h3>
            <p className="text-sm sm:text-base text-[#DDF1E4]/90">
              Complete your online admission application in minutes or speak directly with our
              counsellors on {COLLEGE_INFO.admissionsHelpline}.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('apply')}
              className="inline-flex items-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-6 py-3 transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Start Application</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-[#DDF1E4]/35 hover:bg-[#FFFFFF]/10 text-white font-medium text-sm px-5 py-3 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>Book Campus Tour</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
