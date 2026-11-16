import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import type { CourseSlug, PageId } from '../types';
import { COURSES } from '../data/collegeData';

interface NavbarProps {
  currentPage: PageId;
  currentCourseSlug?: CourseSlug;
  onNavigate: (page: PageId, courseSlug?: CourseSlug) => void;
}

export function Navbar({ currentPage, currentCourseSlug, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'courses' | 'campus' | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const go = (page: PageId, courseSlug?: CourseSlug) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    onNavigate(page, courseSlug);
  };

  const isCampusActive = ['about', 'facilities', 'placements', 'notices', 'gallery'].includes(
    currentPage
  );
  const isCoursesActive = currentPage === 'courses' || currentPage === 'course-detail';

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 w-full bg-[#FFFFFF]/98 border-b border-[#1E2A24]/10 shadow-2xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => go('home')}
          className="flex items-center gap-2.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5F3F] rounded-md whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1F5F3F] to-[#14402B] flex items-center justify-center text-[#D4A533] font-display font-bold text-sm shadow-sm shrink-0"
          >
            SJ
          </span>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#1E2A24] whitespace-nowrap shrink-0">
            St. Joseph&apos;s College
          </span>
        </button>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#5E6E66]"
        >
          <button
            type="button"
            onClick={() => go('home')}
            className={`py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer hover:text-[#1F5F3F] ${
              currentPage === 'home'
                ? 'text-[#1F5F3F] font-semibold underline underline-offset-8 decoration-2 decoration-[#D4A533]'
                : ''
            }`}
          >
            Home
          </button>

          {/* Courses Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'courses' ? null : 'courses')}
              aria-expanded={openDropdown === 'courses'}
              className={`inline-flex items-center gap-1 py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer hover:text-[#1F5F3F] ${
                isCoursesActive
                  ? 'text-[#1F5F3F] font-semibold underline underline-offset-8 decoration-2 decoration-[#D4A533]'
                  : ''
              }`}
            >
              <span>Courses</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'courses' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'courses' && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-[#FFFFFF] border border-[#1E2A24]/12 shadow-lg p-2 z-50"
                >
                  <button
                    type="button"
                    onClick={() => go('courses')}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-[#1F5F3F] hover:bg-[#DDF1E4]/60 transition-colors cursor-pointer"
                  >
                    All UG &amp; PG Programs
                  </button>
                  <div className="my-1 border-t border-[#1E2A24]/10" />
                  {COURSES.map((course) => (
                    <button
                      key={course.slug}
                      type="button"
                      onClick={() => go('course-detail', course.slug)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between cursor-pointer ${
                        currentPage === 'course-detail' && currentCourseSlug === course.slug
                          ? 'bg-[#DDF1E4] text-[#14402B] font-semibold'
                          : 'text-[#1E2A24] hover:bg-[#FAF8F2]'
                      }`}
                    >
                      <span>{course.shortTitle}</span>
                      <span className="text-xs text-[#5E6E66] font-mono">{course.level}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => go('admissions')}
            className={`py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer hover:text-[#1F5F3F] ${
              currentPage === 'admissions'
                ? 'text-[#1F5F3F] font-semibold underline underline-offset-8 decoration-2 decoration-[#D4A533]'
                : ''
            }`}
          >
            Admissions
          </button>

          {/* Campus & Life Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === 'campus' ? null : 'campus')}
              aria-expanded={openDropdown === 'campus'}
              className={`inline-flex items-center gap-1 py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer hover:text-[#1F5F3F] ${
                isCampusActive
                  ? 'text-[#1F5F3F] font-semibold underline underline-offset-8 decoration-2 decoration-[#D4A533]'
                  : ''
              }`}
            >
              <span>Campus</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  openDropdown === 'campus' ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {openDropdown === 'campus' && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full mt-2 w-60 rounded-xl bg-[#FFFFFF] border border-[#1E2A24]/12 shadow-lg p-2 z-50"
                >
                  {(
                    [
                      ['about', 'About Us'],
                      ['facilities', 'Facilities'],
                      ['placements', 'Placements'],
                      ['notices', 'Results & Notices'],
                      ['gallery', 'Campus Gallery'],
                    ] as [PageId, string][]
                  ).map(([pageId, label]) => (
                    <button
                      key={pageId}
                      type="button"
                      onClick={() => go(pageId)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                        currentPage === pageId
                          ? 'bg-[#DDF1E4] text-[#14402B] font-semibold'
                          : 'text-[#1E2A24] hover:bg-[#FAF8F2]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => go('contact')}
            className={`py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer hover:text-[#1F5F3F] ${
              currentPage === 'contact'
                ? 'text-[#1F5F3F] font-semibold underline underline-offset-8 decoration-2 decoration-[#D4A533]'
                : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 Primary CTA Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={() => go('apply')}
            className="inline-flex items-center gap-2 rounded-full bg-[#D4A533] hover:bg-[#c59628] text-[#14402B] font-semibold text-xs sm:text-sm px-4 py-2 transition-colors duration-150 whitespace-nowrap shrink-0 shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5F3F]"
          >
            <span>Apply Now</span>
            <span className="w-5 h-5 rounded-full bg-[#14402B] text-[#D4A533] hidden sm:inline-flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </motion.button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#1E2A24]/15 text-[#1E2A24] hover:bg-[#FAF8F2] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-[#1E2A24]/10 bg-[#FFFFFF] max-h-[80vh] overflow-y-auto px-4 py-4 space-y-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  ['home', 'Home'],
                  ['about', 'About Us'],
                  ['admissions', 'Admissions'],
                  ['courses', 'All Courses'],
                  ['facilities', 'Facilities'],
                  ['placements', 'Placements'],
                  ['notices', 'Results & Notices'],
                  ['gallery', 'Gallery'],
                  ['contact', 'Contact'],
                  ['apply', 'Apply Now'],
                ] as [PageId, string][]
              ).map(([pageId, label]) => (
                <button
                  key={pageId}
                  type="button"
                  onClick={() => go(pageId)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] cursor-pointer ${
                    currentPage === pageId
                      ? 'bg-[#DDF1E4] text-[#14402B] font-semibold border border-[#4CAF7A]/40'
                      : 'text-[#1E2A24] hover:bg-[#FAF8F2] border border-[#1E2A24]/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-[#1E2A24]/10">
              <p className="text-xs font-medium text-[#5E6E66] px-1 mb-2">
                Programs Offered
              </p>
              <div className="flex flex-wrap gap-2">
                {COURSES.map((course) => (
                  <button
                    key={course.slug}
                    type="button"
                    onClick={() => go('course-detail', course.slug)}
                    className="px-3 py-2 rounded-lg bg-[#FAF8F2] hover:bg-[#DDF1E4] border border-[#1E2A24]/12 text-xs font-medium text-[#1E2A24] min-h-[40px] cursor-pointer"
                  >
                    {course.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
