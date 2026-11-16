import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { COLLEGE_INFO, COURSES } from '../data/collegeData';

interface FooterProps {
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#14402B] text-[#DDF1E4] border-t border-[#1F5F3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Column 1: Institution Address */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-[#1F5F3F] text-[#D4A533] font-display font-bold text-sm flex items-center justify-center border border-[#4CAF7A]/30">
                SJ
              </span>
              <span className="font-display font-bold text-base text-white">
                {COLLEGE_INFO.name}
              </span>
            </div>
            <p className="text-sm text-[#DDF1E4]/80 leading-relaxed">
              {COLLEGE_INFO.affiliation} · Managed by the {COLLEGE_INFO.society}. Shaping ethical,
              industry-ready graduates in Hyderabad since {COLLEGE_INFO.established}.
            </p>
            <div className="space-y-2.5 text-sm text-[#DDF1E4]/90 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A533] shrink-0 mt-1" aria-hidden="true" />
                <span>{COLLEGE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A533] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${COLLEGE_INFO.admissionsHelpline.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors tabular-nums"
                >
                  {COLLEGE_INFO.admissionsHelpline} (Admissions)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A533] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${COLLEGE_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COLLEGE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4A533] shrink-0" aria-hidden="true" />
                <span className="text-[#DDF1E4]/75">{COLLEGE_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4">
              Explore College
            </h3>
            <ul className="space-y-2.5 text-sm">
              {(
                [
                  ['home', 'Home'],
                  ['about', 'About Us & Heritage'],
                  ['admissions', 'Admissions 2026–27'],
                  ['facilities', 'Campus Facilities'],
                  ['placements', 'Placements & Recruiters'],
                  ['notices', 'Results & Notices'],
                  ['gallery', 'Campus Gallery'],
                  ['contact', 'Contact & Campus Map'],
                ] as [PageId, string][]
              ).map(([pageId, label]) => (
                <li key={pageId}>
                  <button
                    type="button"
                    onClick={() => onNavigate(pageId)}
                    className="text-[#DDF1E4]/75 hover:text-[#D4A533] transition-colors cursor-pointer text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4">
              Degree &amp; PG Courses
            </h3>
            <ul className="space-y-2.5 text-sm">
              {COURSES.map((course) => (
                <li key={course.slug}>
                  <button
                    type="button"
                    onClick={() => onNavigate('course-detail', course.slug)}
                    className="text-[#DDF1E4]/75 hover:text-[#D4A533] transition-colors cursor-pointer text-left flex items-center gap-2"
                  >
                    <span>{course.shortTitle}</span>
                    <span className="text-xs text-[#4CAF7A] font-mono">({course.level})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#1F5F3F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#DDF1E4]/65">
          <p>
            © {new Date().getFullYear()} {COLLEGE_INFO.name}, King Koti, Hyderabad. All rights
            reserved.
          </p>
          <p>{COLLEGE_INFO.accreditation}</p>
        </div>
      </div>
    </footer>
  );
}
