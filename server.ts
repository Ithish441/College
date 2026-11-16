import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ApplicationRecord {
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

interface EnquiryRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  programInterest: string;
  message: string;
  createdAt: string;
}

interface NoticeRecord {
  id: string;
  title: string;
  category: 'Admissions' | 'Examinations' | 'Results' | 'Scholarships' | 'Events';
  publishedDate: string;
  referenceNo: string;
  summary: string;
  actionLabel?: string;
  actionTarget?: string;
  isPinned?: boolean;
}

interface SubjectGrade {
  code: string;
  subject: string;
  credits: number;
  grade: string;
  points: number;
}

interface ResultRecord {
  rollNo: string;
  studentName: string;
  program: string;
  semester: string;
  examSession: string;
  sgpa: string;
  cgpa: string;
  status: 'PASS' | 'DISTINCTION';
  subjects: SubjectGrade[];
}

interface StoreData {
  applications: ApplicationRecord[];
  enquiries: EnquiryRecord[];
  notices: NoticeRecord[];
  results: ResultRecord[];
}

const DATA_DIR = path.resolve(__dirname, 'data');
const STORE_PATH = path.join(DATA_DIR, 'college-store.json');

const SEED_NOTICES: NoticeRecord[] = [
  {
    id: 'n-2026-01',
    title: 'UG & PG Admissions Open for Academic Year 2026–27',
    category: 'Admissions',
    publishedDate: '2026-11-12',
    referenceNo: 'SJC/ADM/2026/014',
    summary:
      'Online applications are invited for B.Com (General, Honors, IFA, Fintech), B.Sc Data Science, B.A. (MCJ, JPE), BBA, MBA, and MCA programs under Osmania University Autonomous regulations.',
    actionLabel: 'Apply Online',
    actionTarget: 'apply',
    isPinned: true,
  },
  {
    id: 'n-2026-02',
    title: 'MBA & MCA TS ICET-2026 Spot & Management Counselling Schedule',
    category: 'Admissions',
    publishedDate: '2026-11-09',
    referenceNo: 'SJC/PG/2026/042',
    summary:
      'Document verification and personal interview slots for MBA and MCA Management Quota candidates will be held at the King Koti Main Block between 10:00 AM and 4:00 PM.',
    actionLabel: 'View Admission Steps',
    actionTarget: 'admissions',
    isPinned: true,
  },
  {
    id: 'n-2026-03',
    title: 'Semester III & V End-Semester Examination Results Published',
    category: 'Results',
    publishedDate: '2026-11-05',
    referenceNo: 'SJC/COE/2026/118',
    summary:
      'Autonomous End-Semester examination results for B.Com, BBA, B.Sc Data Science, B.A., MBA, and MCA are now live. Enter your Hall Ticket number below to verify marks and SGPA.',
  },
  {
    id: 'n-2026-04',
    title: 'Merit-cum-Means & Archdiocese Fee Concession Applications',
    category: 'Scholarships',
    publishedDate: '2026-11-02',
    referenceNo: 'SJC/SCH/2026/009',
    summary:
      'First-year UG and PG entrants securing above 90% in Intermediate / 8.5 CGPA in Degree are eligible for up to 50% tuition waiver under the St. Joseph Merit Scholarship.',
    actionLabel: 'Check Eligibility',
    actionTarget: 'admissions',
  },
  {
    id: 'n-2026-05',
    title: 'Winter Practical & Viva-Voce Timetable — B.Sc Data Science & MCA',
    category: 'Examinations',
    publishedDate: '2026-10-28',
    referenceNo: 'SJC/COE/2026/104',
    summary:
      'Lab examinations for Python Programming, Applied Machine Learning, and Cloud Computing batches will be conducted in Data Science Lab 1 and Lab 2 at King Koti Campus.',
  },
  {
    id: 'n-2026-06',
    title: 'Josephine Annual Commerce & Analytics Conclave 2026',
    category: 'Events',
    publishedDate: '2026-10-21',
    referenceNo: 'SJC/EVT/2026/031',
    summary:
      'Industry leaders from Deloitte, Goldman Sachs, and TCS will host keynote sessions and live fintech case competitions at Joseph’s Auditorium.',
  },
];

const SEED_RESULTS: ResultRecord[] = [
  {
    rollNo: '121424867001',
    studentName: 'Ananya Reddy',
    program: 'B.Sc Data Science',
    semester: 'Semester IV',
    examSession: 'October 2026',
    sgpa: '9.42',
    cgpa: '9.28',
    status: 'DISTINCTION',
    subjects: [
      { code: 'DS401', subject: 'Statistical Inference & Modeling', credits: 4, grade: 'O', points: 10 },
      { code: 'DS402', subject: 'Machine Learning Foundations', credits: 4, grade: 'A+', points: 9 },
      { code: 'DS403', subject: 'Database Management & SQL Systems', credits: 4, grade: 'O', points: 10 },
      { code: 'DS404', subject: 'Data Visualization Lab (Power BI & Python)', credits: 2, grade: 'O', points: 10 },
      { code: 'AECC4', subject: 'Ethics & Professional Communication', credits: 2, grade: 'A+', points: 9 },
    ],
  },
  {
    rollNo: '121424402018',
    studentName: 'Mohammed Faizan',
    program: 'B.Com (Honors)',
    semester: 'Semester IV',
    examSession: 'October 2026',
    sgpa: '8.95',
    cgpa: '8.84',
    status: 'DISTINCTION',
    subjects: [
      { code: 'CM401', subject: 'Corporate Accounting II', credits: 5, grade: 'A+', points: 9 },
      { code: 'CM402', subject: 'Income Tax Law & Practice', credits: 5, grade: 'O', points: 10 },
      { code: 'CM403', subject: 'Financial Markets & Institutions', credits: 4, grade: 'A', points: 8 },
      { code: 'CM404', subject: 'Business Analytics with Excel Lab', credits: 2, grade: 'O', points: 10 },
    ],
  },
  {
    rollNo: '121425672009',
    studentName: 'Priya Sharma',
    program: 'MBA (Finance & Analytics)',
    semester: 'Semester II',
    examSession: 'October 2026',
    sgpa: '9.18',
    cgpa: '9.10',
    status: 'DISTINCTION',
    subjects: [
      { code: 'MB201', subject: 'Corporate Financial Management', credits: 4, grade: 'O', points: 10 },
      { code: 'MB202', subject: 'Business Research & Econometrics', credits: 4, grade: 'A+', points: 9 },
      { code: 'MB203', subject: 'Operations & Supply Chain Strategy', credits: 4, grade: 'A+', points: 9 },
      { code: 'MB204', subject: 'Predictive Analytics for Managers', credits: 3, grade: 'O', points: 10 },
    ],
  },
];

const SEED_APPLICATIONS: ApplicationRecord[] = [
  {
    id: 'app-seed-1',
    referenceCode: 'SJDPG-2026-1042',
    fullName: 'Karthikeya Rao',
    email: 'karthikeya.rao@example.com',
    phone: '+91 98490 11223',
    dateOfBirth: '2008-05-14',
    level: 'UG',
    courseSlug: 'bsc-data-science',
    courseName: 'B.Sc Data Science',
    specialization: 'Data Science, Statistics & Computer Science',
    previousQualification: 'Intermediate (MPC)',
    boardOrUniversity: 'TSBIE',
    percentage: '93.4',
    guardianName: 'Srinivas Rao',
    city: 'Hyderabad',
    status: 'Shortlisted for Counselling',
    submittedAt: '2026-11-10T09:30:00.000Z',
  },
];

function ensureStore(): StoreData {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STORE_PATH)) {
    const initial: StoreData = {
      applications: SEED_APPLICATIONS,
      enquiries: [],
      notices: SEED_NOTICES,
      results: SEED_RESULTS,
    };
    fs.writeFileSync(STORE_PATH, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }
  try {
    const raw = fs.readFileSync(STORE_PATH, 'utf8');
    const parsed = JSON.parse(raw) as Partial<StoreData>;
    return {
      applications: Array.isArray(parsed.applications) ? parsed.applications : SEED_APPLICATIONS,
      enquiries: Array.isArray(parsed.enquiries) ? parsed.enquiries : [],
      notices: Array.isArray(parsed.notices) ? parsed.notices : SEED_NOTICES,
      results: Array.isArray(parsed.results) ? parsed.results : SEED_RESULTS,
    };
  } catch {
    const fallback: StoreData = {
      applications: SEED_APPLICATIONS,
      enquiries: [],
      notices: SEED_NOTICES,
      results: SEED_RESULTS,
    };
    fs.writeFileSync(STORE_PATH, JSON.stringify(fallback, null, 2), 'utf8');
    return fallback;
  }
}

function saveStore(data: StoreData): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  const tmpPath = `${STORE_PATH}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tmpPath, STORE_PATH);
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '1mb' }));

  // Ensure initial seeded data store exists on startup
  ensureStore();

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, institution: "St. Joseph's Degree & PG College" });
  });

  app.get('/api/notices', (req, res) => {
    const store = ensureStore();
    const category = typeof req.query.category === 'string' ? req.query.category.trim() : '';
    const q = typeof req.query.q === 'string' ? req.query.q.trim().toLowerCase() : '';

    let items = store.notices;
    if (category && category !== 'All') {
      items = items.filter((n) => n.category === category);
    }
    if (q) {
      items = items.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.summary.toLowerCase().includes(q) ||
          n.referenceNo.toLowerCase().includes(q)
      );
    }
    res.json({ notices: items });
  });

  app.get('/api/results/:rollNo', (req, res) => {
    const rollNo = req.params.rollNo.trim();
    const store = ensureStore();
    const found = store.results.find((r) => r.rollNo.toLowerCase() === rollNo.toLowerCase());
    if (!found) {
      res.status(404).json({
        error:
          'No examination record found for that Hall Ticket number. Try sample Hall Ticket 121424867001, 121424402018, or 121425672009.',
      });
      return;
    }
    res.json({ result: found });
  });

  app.get('/api/applications/:referenceCode', (req, res) => {
    const ref = req.params.referenceCode.trim().toUpperCase();
    const store = ensureStore();
    const found = store.applications.find((a) => a.referenceCode.toUpperCase() === ref);
    if (!found) {
      res.status(404).json({
        error: 'Application reference not found. Please verify your SJDPG-2026-XXXX code.',
      });
      return;
    }
    res.json({ application: found });
  });

  app.post('/api/applications', (req, res) => {
    const body = req.body as Partial<ApplicationRecord>;
    const fullName = String(body.fullName ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const courseSlug = String(body.courseSlug ?? '').trim();
    const courseName = String(body.courseName ?? '').trim();
    const percentage = String(body.percentage ?? '').trim();

    if (fullName.length < 2) {
      res.status(400).json({ error: 'Please enter the applicant full name.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: 'Please enter a valid email address.' });
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      res.status(400).json({ error: 'Please enter a valid 10-digit mobile number.' });
      return;
    }
    if (!courseSlug || !courseName) {
      res.status(400).json({ error: 'Please select a degree program.' });
      return;
    }
    const pctNum = Number(percentage);
    if (!percentage || Number.isNaN(pctNum) || pctNum < 35 || pctNum > 100) {
      res.status(400).json({ error: 'Please enter a valid qualifying percentage or CGPA equivalent (35–100).' });
      return;
    }

    const store = ensureStore();
    const codeNumber = 1043 + store.applications.length;
    const referenceCode = `SJDPG-2026-${codeNumber}`;
    const record: ApplicationRecord = {
      id: `app-${Date.now()}`,
      referenceCode,
      fullName,
      email,
      phone,
      dateOfBirth: String(body.dateOfBirth ?? '').trim(),
      level: body.level === 'PG' ? 'PG' : 'UG',
      courseSlug,
      courseName,
      specialization: String(body.specialization ?? 'Core Track').trim(),
      previousQualification: String(body.previousQualification ?? '10+2 / Intermediate').trim(),
      boardOrUniversity: String(body.boardOrUniversity ?? 'TSBIE').trim(),
      percentage,
      guardianName: String(body.guardianName ?? '').trim(),
      city: String(body.city ?? 'Hyderabad').trim(),
      status: 'Application Received — Under Admissions Review',
      submittedAt: new Date().toISOString(),
    };

    store.applications.unshift(record);
    saveStore(store);
    res.status(201).json({ application: record });
  });

  app.post('/api/enquiries', (req, res) => {
    const body = req.body as Partial<EnquiryRecord>;
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const phone = String(body.phone ?? '').trim();
    const message = String(body.message ?? '').trim();

    if (name.length < 2) {
      res.status(400).json({ error: 'Please enter your name.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: 'Please enter a valid email address.' });
      return;
    }
    if (phone.replace(/\D/g, '').length < 10) {
      res.status(400).json({ error: 'Please enter a valid 10-digit phone number.' });
      return;
    }
    if (message.length < 8) {
      res.status(400).json({ error: 'Please include a short message about your enquiry.' });
      return;
    }

    const store = ensureStore();
    const enquiry: EnquiryRecord = {
      id: `enq-${Date.now()}`,
      name,
      email,
      phone,
      programInterest: String(body.programInterest ?? 'General Admissions').trim(),
      message,
      createdAt: new Date().toISOString(),
    };
    store.enquiries.unshift(enquiry);
    saveStore(store);
    res.status(201).json({ enquiry });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`St. Joseph's Degree & PG College server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
