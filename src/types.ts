export type PageId =
  | 'home'
  | 'about'
  | 'admissions'
  | 'apply'
  | 'courses'
  | 'course-detail'
  | 'facilities'
  | 'placements'
  | 'notices'
  | 'gallery'
  | 'contact';

export type CourseSlug =
  | 'bcom'
  | 'bsc-data-science'
  | 'ba'
  | 'bba'
  | 'mba'
  | 'mca';

export interface SemesterBlock {
  semester: string;
  subjects: string[];
}

export interface CourseProgram {
  slug: CourseSlug;
  shortTitle: string;
  fullTitle: string;
  level: 'UG' | 'PG';
  department: string;
  duration: string;
  intakeSeats: number;
  annualFee: string;
  eligibility: string;
  admissionMode: string;
  tagline: string;
  overview: string;
  specializations: string[];
  highlights: string[];
  curriculum: SemesterBlock[];
  careerRoles: string[];
  topRecruiters: string[];
  facultyLead: {
    name: string;
    designation: string;
    qualification: string;
  };
  image: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  category: string;
  capacityOrScale: string;
  summary: string;
  features: string[];
  image: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  category: 'Admissions' | 'Examinations' | 'Results' | 'Scholarships' | 'Events';
  publishedDate: string;
  referenceNo: string;
  summary: string;
  actionLabel?: string;
  actionTarget?: PageId;
  isPinned?: boolean;
}

export interface ExamResult {
  rollNo: string;
  studentName: string;
  program: string;
  semester: string;
  examSession: string;
  sgpa: string;
  cgpa: string;
  status: 'PASS' | 'DISTINCTION';
  subjects: {
    code: string;
    subject: string;
    credits: number;
    grade: string;
    points: number;
  }[];
}

export interface ApplicationSubmission {
  id: string;
  referenceCode: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  level: 'UG' | 'PG';
  courseSlug: string;
  courseName: string;
  specialization: string;
  previousQualification: string;
  boardOrUniversity: string;
  percentage: string;
  guardianName: string;
  city: string;
  status: string;
  submittedAt: string;
}
