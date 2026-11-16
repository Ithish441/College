import { useEffect, useState, useCallback } from 'react';
import { MotionConfig, AnimatePresence, motion } from 'motion/react';
import type { CourseSlug, PageId } from './types';
import { COURSES } from './data/collegeData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactDock } from './components/FloatingContactDock';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { ApplyPage } from './pages/ApplyPage';
import { CoursesHubPage } from './pages/CoursesHubPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { NoticesResultsPage } from './pages/NoticesResultsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

const PAGE_TITLES: Record<PageId, string> = {
  home: "St. Joseph's Degree & PG College – Admissions 2026–27 | Hyderabad",
  about: "About Us – St. Joseph's Degree & PG College | Hyderabad",
  admissions: "Admissions & Eligibility 2026–27 – St. Joseph's College",
  apply: "Apply Online – St. Joseph's Degree & PG College",
  courses: "UG & PG Courses – B.Com, B.Sc Data Science, BBA, MBA, MCA",
  'course-detail': "Course Details – St. Joseph's Degree & PG College",
  facilities: "Campus Facilities – Library, Labs & Sports | St. Joseph's",
  placements: "Placements & Recruiters – St. Joseph's Degree & PG College",
  notices: "Results & Notices – St. Joseph's Degree & PG College",
  gallery: "Campus Gallery – St. Joseph's Degree & PG College",
  contact: "Contact & Campus Map – St. Joseph's Degree & PG College",
};

function parseHashRoute(): { page: PageId; courseSlug?: CourseSlug } {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { page: 'home' };
  const parts = hash.split('/');
  const route = parts[0] as PageId;
  const slug = parts[1] as CourseSlug | undefined;

  if (route === 'course-detail' && slug && COURSES.some((c) => c.slug === slug)) {
    return { page: 'course-detail', courseSlug: slug };
  }
  if (route === 'apply' && slug && COURSES.some((c) => c.slug === slug)) {
    return { page: 'apply', courseSlug: slug };
  }
  if (route in PAGE_TITLES) {
    return { page: route };
  }
  return { page: 'home' };
}

export default function App() {
  const initial = parseHashRoute();
  const [currentPage, setCurrentPage] = useState<PageId>(initial.page);
  const [courseSlug, setCourseSlug] = useState<CourseSlug | undefined>(initial.courseSlug);

  const navigate = useCallback((page: PageId, nextCourseSlug?: CourseSlug) => {
    setCurrentPage(page);
    setCourseSlug(nextCourseSlug);
    const nextHash =
      page === 'home'
        ? '#/'
        : nextCourseSlug
          ? `#/${page}/${nextCourseSlug}`
          : `#/${page}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const onHashOrPop = () => {
      const parsed = parseHashRoute();
      setCurrentPage(parsed.page);
      setCourseSlug(parsed.courseSlug);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashOrPop);
    window.addEventListener('popstate', onHashOrPop);
    return () => {
      window.removeEventListener('hashchange', onHashOrPop);
      window.removeEventListener('popstate', onHashOrPop);
    };
  }, []);

  useEffect(() => {
    if (currentPage === 'course-detail' && courseSlug) {
      const found = COURSES.find((c) => c.slug === courseSlug);
      document.title = found
        ? `${found.shortTitle} Syllabus & Admissions – St. Joseph's College`
        : PAGE_TITLES['course-detail'];
    } else {
      document.title = PAGE_TITLES[currentPage];
    }
  }, [currentPage, courseSlug]);

  const routeKey = courseSlug ? `${currentPage}-${courseSlug}` : currentPage;

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#1E2A24]">
        <Navbar
          currentPage={currentPage}
          currentCourseSlug={courseSlug}
          onNavigate={navigate}
        />

        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={routeKey}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentPage === 'home' && <HomePage onNavigate={navigate} />}
              {currentPage === 'about' && <AboutPage onNavigate={navigate} />}
              {currentPage === 'admissions' && <AdmissionsPage onNavigate={navigate} />}
              {currentPage === 'apply' && <ApplyPage initialCourseSlug={courseSlug} />}
              {currentPage === 'courses' && <CoursesHubPage onNavigate={navigate} />}
              {currentPage === 'course-detail' && (
                <CourseDetailPage
                  courseSlug={courseSlug ?? 'bcom'}
                  onNavigate={navigate}
                />
              )}
              {currentPage === 'facilities' && <FacilitiesPage onNavigate={navigate} />}
              {currentPage === 'placements' && <PlacementsPage onNavigate={navigate} />}
              {currentPage === 'notices' && <NoticesResultsPage onNavigate={navigate} />}
              {currentPage === 'gallery' && <GalleryPage />}
              {currentPage === 'contact' && <ContactPage />}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={navigate} />
        <FloatingContactDock />
      </div>
    </MotionConfig>
  );
}
