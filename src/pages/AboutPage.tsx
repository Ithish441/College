import { ArrowUpRight, Award, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { COLLEGE_IMAGES, COLLEGE_INFO } from '../data/collegeData';
import { SafeImage } from '../components/SafeImage';

interface AboutPageProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-br from-[#14402B] to-[#1F5F3F] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-[#D4A533] uppercase tracking-wider">
            Est. {COLLEGE_INFO.established} · {COLLEGE_INFO.society}
          </p>
          <h1 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-2 text-balance">
            About St. Joseph&apos;s Degree &amp; PG College
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#DDF1E4]/90 leading-relaxed">
            An autonomous co-educational institution in King Koti, Hyderabad, affiliated to Osmania
            University and recognized under UGC Sections 2(f) and 12(B).
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Heritage & Campus Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 space-y-5 flex flex-col justify-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1E2A24] tracking-tight">
              Nearly three decades of academic rigor and holistic student formation
            </h2>
            <p className="text-sm sm:text-base text-[#5E6E66] leading-relaxed">
              Founded in 1997 by the Hyderabad Archdiocese Educational Society, St. Joseph&apos;s
              Degree &amp; PG College has grown into one of Telangana&apos;s most respected centers
              for Commerce, Management, Computer Science, and Mass Communication education.
            </p>
            <p className="text-sm sm:text-base text-[#5E6E66] leading-relaxed">
              Conferred Autonomous status by UGC and Osmania University, the college updates its
              syllabi every academic cycle in consultation with industry leaders from Deloitte,
              TCS, Goldman Sachs, and academic peers—ensuring graduates master tools employers
              value today.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-4">
                <p className="font-display font-bold text-2xl text-[#1F5F3F] tabular-nums">1997</p>
                <p className="text-xs text-[#5E6E66] mt-0.5">Year Established</p>
              </div>
              <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-4">
                <p className="font-display font-bold text-2xl text-[#1F5F3F]">Autonomous</p>
                <p className="text-xs text-[#5E6E66] mt-0.5">UGC &amp; Osmania University</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-72 lg:h-full min-h-[300px] rounded-3xl overflow-hidden border border-[#1E2A24]/12">
              <SafeImage
                src={COLLEGE_IMAGES.heroCampus}
                alt="St. Joseph's Degree & PG College King Koti Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision, Mission & Quality Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 space-y-3">
            <Compass className="w-6 h-6 text-[#1F5F3F]" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg text-[#1E2A24]">Our Vision</h3>
            <p className="text-sm text-[#5E6E66] leading-relaxed">
              To create an intellectually stimulating and ethically grounded learning community that
              transforms young graduates into competent global citizens and compassionate leaders.
            </p>
          </div>

          <div className="rounded-2xl bg-[#FFFFFF] border border-[#1E2A24]/12 p-6 space-y-3">
            <BookOpen className="w-6 h-6 text-[#1F5F3F]" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg text-[#1E2A24]">Our Mission</h3>
            <p className="text-sm text-[#5E6E66] leading-relaxed">
              To impart outcome-based autonomous education integrating quantitative analytics,
              practical industry exposure, and holistic co-curricular growth in central Hyderabad.
            </p>
          </div>

          <div className="rounded-2xl bg-[#DDF1E4] border border-[#4CAF7A]/35 text-[#14402B] p-6 space-y-3">
            <Award className="w-6 h-6 text-[#1F5F3F]" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg">Accreditation &amp; Standing</h3>
            <p className="text-sm text-[#1E2A24] leading-relaxed">
              Re-accredited by NAAC (3rd Cycle), recognized by UGC under 2(f) &amp; 12(B), and
              AICTE-approved for MBA and MCA postgraduate programs.
            </p>
          </div>
        </div>

        {/* Principal's Message */}
        <div className="rounded-3xl bg-[#14402B] text-white p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 h-72 rounded-2xl overflow-hidden">
            <SafeImage
              src={COLLEGE_IMAGES.studentPortrait}
              alt="Campus Mentorship at St. Joseph's"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#D4A533] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span>Leadership Message</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
              &ldquo;Education at St. Joseph&apos;s is measured by clarity of character and career
              readiness.&rdquo;
            </h3>
            <p className="text-sm sm:text-base text-[#DDF1E4]/85 leading-relaxed">
              Every student entering our King Koti campus receives personalized faculty mentorship,
              modern laboratory access, and structured placement preparation from Semester I. We
              invite ambitious learners and their families to explore our academic community.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-display font-bold text-white">Rev. Fr. Principal &amp; Management</p>
                <p className="text-xs text-[#DDF1E4]/70">{COLLEGE_INFO.name}, Hyderabad</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('apply')}
                className="inline-flex items-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-sm px-5 py-2.5 cursor-pointer"
              >
                <span>Apply for 2026–27</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
