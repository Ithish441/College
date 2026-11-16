import type { CourseProgram, FacilityItem } from '../types';

export const COLLEGE_IMAGES = {
  heroCampus: '/src/assets/images/campus_hero_sky_clean_1794841816125.jpg',
  library: '/src/assets/images/facility_library_1794841799055.jpg',
  dataScienceLab: '/src/assets/images/facility_datascience_lab_1794841799985.jpg',
  seminarHall: '/src/assets/images/facility_seminar_hall_1794841799842.jpg',
  sportsComplex: '/src/assets/images/facility_sports_complex_1794841816549.jpg',
  studentPortrait: '/src/assets/images/campus_student_portrait_1794841800792.jpg',
};

export const COLLEGE_INFO = {
  name: "St. Joseph's Degree & PG College",
  shortName: "St. Joseph's College",
  established: '1997',
  affiliation: 'Autonomous · Affiliated to Osmania University',
  society: 'Hyderabad Archdiocese Educational Society',
  accreditation: 'NAAC Accredited · UGC 2(f) & 12(B) Recognized',
  address: '5-9-1106, King Koti Road, Gun Foundry, Basheerbagh, Hyderabad, Telangana 500001',
  phoneDisplay: '+91 40 2323 4860',
  admissionsHelpline: '+91 91009 42860',
  whatsappNumber: '919100942860',
  email: 'admissions@stjosephshyd.edu.in',
  officeHours: 'Mon – Sat, 9:00 AM – 4:30 PM IST',
  directionsUrl:
    'https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=%3B17.3895%2C78.4810',
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=78.4745%2C17.3845%2C78.4875%2C17.3945&layer=mapnik&marker=17.3895%2C78.4810',
};

export const RECRUITERS = [
  'Deloitte',
  'Tata Consultancy Services',
  'Goldman Sachs',
  'Cognizant',
  'Infosys',
  'Accenture',
  'EY Global',
  'Wipro',
  'Amazon',
  'KPMG',
  'ICICI Bank',
  'Wells Fargo',
];

export const COURSES: CourseProgram[] = [
  {
    slug: 'bcom',
    shortTitle: 'B.Com',
    fullTitle: 'Bachelor of Commerce (Honors, IFA, Fintech & Analytics)',
    level: 'UG',
    department: 'Department of Commerce',
    duration: '3 Years (6 Semesters)',
    intakeSeats: 360,
    annualFee: '₹58,000 / year',
    eligibility: '10+2 (Intermediate / CBSE / ISC) with minimum 50% aggregate in Commerce or Mathematics.',
    admissionMode: 'DOST Counselling & Institutional Merit Interview',
    tagline: 'Industry-integrated commerce education aligned with ACCA, GST, and Financial Analytics.',
    overview:
      'One of Hyderabad’s flagship undergraduate commerce programs, designed under autonomous Osmania University guidelines to combine statutory accounting rigor with IFRS, Financial Technology, Power BI reporting, and corporate tax practice.',
    specializations: ['B.Com (Honors)', 'B.Com (International Finance & Accounting - ACCA)', 'B.Com (Computer Applications)', 'B.Com (Fintech & Business Analytics)'],
    highlights: [
      'ACCA-embedded curriculum exemptions for International Finance & Accounting track',
      'Mandatory Tally Prime, GST filing, and Financial Modeling lab hours',
      'Dedicated campus recruitment training from Semester IV onwards',
      'Live corporate internships with Big-4 audit and tax practices in Hyderabad',
    ],
    curriculum: [
      { semester: 'Semesters 1 & 2', subjects: ['Financial Accounting I & II', 'Business Economics', 'Principles of Management', 'Business Statistics & Excel', 'Indian Heritage & Ethics'] },
      { semester: 'Semesters 3 & 4', subjects: ['Corporate Accounting', 'Income Tax Law & Practice', 'Cost & Management Accounting', 'Banking & Financial Services', 'Python & Power BI for Finance'] },
      { semester: 'Semesters 5 & 6', subjects: ['Auditing & Assurance', 'GST & Customs Law', 'International Financial Reporting (IFRS)', 'Portfolio Management', 'Capstone Industry Internship'] },
    ],
    careerRoles: ['Audit Associate', 'Tax Consultant', 'Financial Analyst', 'FP&A Executive', 'Banking Operations Analyst'],
    topRecruiters: ['Deloitte', 'EY Global', 'KPMG', 'Goldman Sachs', 'ICICI Bank'],
    facultyLead: {
      name: 'Dr. R. Srinivasulu',
      designation: 'Professor & Head, Department of Commerce',
      qualification: 'Ph.D., M.Com, UGC-NET',
    },
    image: COLLEGE_IMAGES.library,
  },
  {
    slug: 'bsc-data-science',
    shortTitle: 'B.Sc Data Science',
    fullTitle: 'Bachelor of Science in Data Science, Statistics & Computer Science',
    level: 'UG',
    department: 'Department of Computer Science & Analytics',
    duration: '3 Years (6 Semesters)',
    intakeSeats: 120,
    annualFee: '₹64,000 / year',
    eligibility: '10+2 with Mathematics / Statistics / Computer Science and minimum 55% aggregate.',
    admissionMode: 'DOST Counselling & Mathematics Merit Screening',
    tagline: 'Build statistical reasoning, Python engineering, and applied machine learning from Semester 1.',
    overview:
      'Engineered for students aiming at data engineering, analytics, and software careers. Every core theory course pairs directly with hands-on lab sessions in our King Koti Data Science Innovation Lab using Python, R, SQL, Tableau, and TensorFlow.',
    specializations: ['Applied Machine Learning', 'Statistical Computing & Econometrics', 'Cloud Data Engineering'],
    highlights: [
      '60-workstation dual-monitor Data Science & AI Innovation Lab',
      'End-to-end capstone projects using real public and enterprise datasets',
      'Annual Hyderabad Data Hackathon hosted with technology partner mentors',
      'Strong pathway into M.Sc, MCA, and direct Data Analyst placements',
    ],
    curriculum: [
      { semester: 'Semesters 1 & 2', subjects: ['Python Programming & Data Structures', 'Descriptive Statistics & Probability', 'Linear Algebra & Calculus', 'Relational Databases & SQL', 'Discrete Mathematics'] },
      { semester: 'Semesters 3 & 4', subjects: ['Statistical Inference & Hypothesis Testing', 'Data Wrangling & Visualization (Tableau / Power BI)', 'Object-Oriented Design in Java', 'Supervised & Unsupervised Machine Learning', 'Operating Systems & Linux'] },
      { semester: 'Semesters 5 & 6', subjects: ['Big Data Architectures (Spark)', 'Deep Learning & NLP Foundations', 'Time-Series Forecasting', 'Cloud Computing (AWS / GCP)', 'Industry Capstone Project'] },
    ],
    careerRoles: ['Junior Data Scientist', 'Data Analyst', 'BI Developer', 'ML Operations Associate', 'Software Engineer'],
    topRecruiters: ['TCS', 'Cognizant', 'Infosys', 'Accenture', 'Wells Fargo'],
    facultyLead: {
      name: 'Prof. M. Kiran Kumar',
      designation: 'Head, Computer Science & Data Science',
      qualification: 'M.Tech (CSE), Ph.D. Scholar',
    },
    image: COLLEGE_IMAGES.dataScienceLab,
  },
  {
    slug: 'bba',
    shortTitle: 'BBA',
    fullTitle: 'Bachelor of Business Administration (General, Business Analytics & IT)',
    level: 'UG',
    department: 'Department of Business Management',
    duration: '3 Years (6 Semesters)',
    intakeSeats: 180,
    annualFee: '₹66,000 / year',
    eligibility: '10+2 from any recognized board (CBSE / ISC / TSBIE) with minimum 50% aggregate.',
    admissionMode: 'Institutional Entrance Assessment & Personal Interview',
    tagline: 'Case-study driven management education building analytical and entrepreneurial leaders.',
    overview:
      'Designed as a pre-MBA leadership launchpad, the BBA program pairs Harvard-style business case discussions with live market research, digital marketing simulations, and summer internships across Hyderabad’s corporate corridor.',
    specializations: ['BBA (General Management)', 'BBA (Business Analytics)', 'BBA (Information Technology)', 'BBA (Financial Markets)'],
    highlights: [
      'Weekly executive speaker series featuring CXOs and startup founders',
      'Mandatory 8-week summer corporate internship after Semester IV',
      'Active Entrepreneurship Development Cell (EDC) with seed pitch mentoring',
      'Soft-skills, aptitude, and group discussion labs embedded each semester',
    ],
    curriculum: [
      { semester: 'Semesters 1 & 2', subjects: ['Management Theory & Organizational Behavior', 'Micro & Macro Economics', 'Financial Accounting for Managers', 'Business Communication', 'Quantitative Techniques'] },
      { semester: 'Semesters 3 & 4', subjects: ['Marketing Management', 'Human Resource Management', 'Corporate Finance', 'Operations & Supply Chain', 'Business Analytics with R & Tableau'] },
      { semester: 'Semesters 5 & 6', subjects: ['Strategic Management', 'Entrepreneurship & Venture Creation', 'Digital Marketing & Consumer Insights', 'International Business', 'Summer Internship Viva & Dissertation'] },
    ],
    careerRoles: ['Management Trainee', 'Business Analyst', 'Marketing Strategist', 'HR Operations Specialist', 'Product Associate'],
    topRecruiters: ['Deloitte', 'Amazon', 'Wipro', 'ICICI Bank', 'Accenture'],
    facultyLead: {
      name: 'Dr. Anita D’Souza',
      designation: 'Dean of Management Studies',
      qualification: 'Ph.D. (Management), MBA',
    },
    image: COLLEGE_IMAGES.seminarHall,
  },
  {
    slug: 'ba',
    shortTitle: 'B.A.',
    fullTitle: 'Bachelor of Arts (Mass Communication, Journalism, Psychology & English)',
    level: 'UG',
    department: 'Department of Arts & Mass Communication',
    duration: '3 Years (6 Semesters)',
    intakeSeats: 120,
    annualFee: '₹48,000 / year',
    eligibility: '10+2 from any recognized board with minimum 45% aggregate and strong communication aptitude.',
    admissionMode: 'DOST Counselling & Writing/Portfolio Interaction',
    tagline: 'Critical humanities, multimedia journalism, and behavioral psychology under one roof.',
    overview:
      'St. Joseph’s B.A. program bridges classical liberal arts with modern media production and organizational psychology. Students produce campus broadcasts, publish quarterly journals, and train in counseling and behavioral research methods.',
    specializations: ['B.A. (Mass Communication & Journalism)', 'B.A. (Journalism, Psychology & English Literature)'],
    highlights: [
      'In-house Audio-Visual Production Studio & Editing Suite for broadcast practice',
      'Behavioral Psychology Testing Lab with standardized psychometric instruments',
      'Student-run campus newspaper and digital podcast studio',
      'Direct internships with print publications, PR agencies, and HR teams',
    ],
    curriculum: [
      { semester: 'Semesters 1 & 2', subjects: ['Introduction to Mass Communication', 'Foundations of Psychology', 'British & Indian English Literature', 'Reporting & News Writing', 'Academic Writing'] },
      { semester: 'Semesters 3 & 4', subjects: ['Broadcast & Digital Journalism', 'Developmental & Social Psychology', 'Public Relations & Corporate Communication', 'Modern World Literature', 'Media Law & Ethics'] },
      { semester: 'Semesters 5 & 6', subjects: ['Documentary Filmmaking & Editing Lab', 'Organizational & Counseling Psychology', 'Advertising & Brand Storytelling', 'Literary Criticism', 'Media Production Capstone'] },
    ],
    careerRoles: ['Editorial Journalist', 'Corporate Communications Specialist', 'UX Content Strategist', 'HR & Behavioral Analyst', 'Media Producer'],
    topRecruiters: ['Deloitte', 'Amazon', 'The Hindu Media Group', 'Cognizant', 'Accenture'],
    facultyLead: {
      name: 'Prof. Teresa Joseph',
      designation: 'Head, Department of Mass Communication & Arts',
      qualification: 'M.A. (MCJ), M.Phil., UGC-NET',
    },
    image: COLLEGE_IMAGES.studentPortrait,
  },
  {
    slug: 'mba',
    shortTitle: 'MBA',
    fullTitle: 'Master of Business Administration (Dual Specialization)',
    level: 'PG',
    department: 'Joseph’s Post Graduate School of Management',
    duration: '2 Years (4 Semesters)',
    intakeSeats: 120,
    annualFee: '₹88,000 / year',
    eligibility: 'Bachelor’s degree in any discipline with 50% aggregate (45% reserved) + valid TS ICET / CAT / MAT score.',
    admissionMode: 'TS ICET State Counselling & Management Quota Interview',
    tagline: 'AACSB-inspired case pedagogy with dual specialization and 96% placement support.',
    overview:
      'Affiliated to Osmania University and approved by AICTE, our full-time MBA transforms graduates into analytical managers through dual specializations in Finance, Marketing, Human Resources, and Business Analytics.',
    specializations: ['Finance & FinTech', 'Marketing & Digital Strategy', 'Human Resource Analytics', 'Operations & Systems'],
    highlights: [
      'Dual-specialization flexibility in Year 2 with 450+ hours of Corporate Readiness Training',
      'Live consulting projects with Hyderabad SMEs and HITEC City enterprises',
      'Bloomberg-style financial modeling workshops and HR assessment centers',
      'Dedicated placement cell driving 120+ annual corporate recruiter visits',
    ],
    curriculum: [
      { semester: 'Semesters 1 & 2', subjects: ['Managerial Economics', 'Financial Reporting & Analysis', 'Marketing Strategy', 'Operations Research & Quantitative Methods', 'Corporate Finance', 'Business Analytics & Decision Science'] },
      { semester: 'Semesters 3 & 4', subjects: ['Strategic Management & Governance', 'Major Specialization Electives (4 Courses)', 'Minor Specialization Electives (2 Courses)', 'Summer Internship Corporate Project', 'Master Thesis & Comprehensive Viva'] },
    ],
    careerRoles: ['Investment Banking Analyst', 'Brand & Product Manager', 'Management Consultant', 'Talent Acquisition Lead', 'Financial Controller'],
    topRecruiters: ['Goldman Sachs', 'Deloitte', 'EY Global', 'KPMG', 'Wells Fargo', 'ICICI Bank'],
    facultyLead: {
      name: 'Dr. P. Venkateshwar Rao',
      designation: 'Director, PG Management Studies',
      qualification: 'Ph.D., MBA (Osmania University)',
    },
    image: COLLEGE_IMAGES.seminarHall,
  },
  {
    slug: 'mca',
    shortTitle: 'MCA',
    fullTitle: 'Master of Computer Applications',
    level: 'PG',
    department: 'Department of Post Graduate Computer Applications',
    duration: '2 Years (4 Semesters)',
    intakeSeats: 60,
    annualFee: '₹76,000 / year',
    eligibility: 'BCA / B.Sc (CS/IT/Data Science) or Graduate with Mathematics at 10+2 or Degree level (50% aggregate) + TS ICET.',
    admissionMode: 'TS ICET Counselling & Technical Coding Interaction',
    tagline: 'Full-stack cloud engineering, enterprise AI, and production system design in 4 intensive semesters.',
    overview:
      'Our AICTE-approved 2-year MCA bridges computer science theory with modern software engineering stacks—distributed systems, cloud-native APIs, cybersecurity, and applied machine learning—culminating in a 6-month industry software residency.',
    specializations: ['Cloud Native & Microservices', 'Applied AI & Machine Learning', 'Enterprise Cybersecurity'],
    highlights: [
      'Full-semester Semester IV Industry Internship inside IT & product companies',
      'Dedicated high-memory Linux & Docker/Kubernetes lab infrastructure',
      'Weekly competitive programming, DSA, and system design prep',
      'Direct hiring partnerships with TCS, Infosys, Cognizant, and product startups',
    ],
    curriculum: [
      { semester: 'Semesters 1 & 2', subjects: ['Advanced Data Structures & Algorithms', 'Full-Stack Web Engineering (TypeScript & Node)', 'Operating Systems & Distributed Architecture', 'Database Internals & NoSQL', 'Machine Learning & Neural Networks', 'Cloud Computing Platforms'] },
      { semester: 'Semesters 3 & 4', subjects: ['DevOps, CI/CD & Container Orchestration', 'Network Security & Cryptography', 'Software Testing & Microservices', '6-Month Industry Residency / Live Software Product Project'] },
    ],
    careerRoles: ['Full-Stack Software Engineer', 'Cloud Solutions Developer', 'Backend Systems Architect', 'Data Engineer', 'Security Analyst'],
    topRecruiters: ['TCS', 'Infosys', 'Cognizant', 'Accenture', 'Wipro', 'Amazon'],
    facultyLead: {
      name: 'Dr. S. Padmavathi',
      designation: 'Professor & Coordinator, MCA Program',
      qualification: 'Ph.D. (CS), M.Tech',
    },
    image: COLLEGE_IMAGES.dataScienceLab,
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'library',
    name: 'Central Library & Digital Knowledge Hub',
    category: 'Academic Infrastructure',
    capacityOrScale: '48,500+ Volumes · 250 Seats',
    summary:
      'A sunlit, quiet academic library housing reference books, national & international management journals, N-LIST / INFLIBNET digital archives, and dedicated postgraduate research carrels.',
    features: [
      'RFID-enabled book issue and OPAC digital catalog search',
      'Access to EBSCO, JSTOR, IEEE & N-LIST electronic databases',
      'Extended reading hall hours during autonomous semester exams',
      'High-speed campus Wi-Fi & 30 digital research terminals',
    ],
    image: COLLEGE_IMAGES.library,
  },
  {
    id: 'labs',
    name: 'Data Science, AI & Computing Laboratories',
    category: 'Computing & Innovation',
    capacityOrScale: '320+ Workstations · 4 Specialized Labs',
    summary:
      'Modern air-conditioned computing labs equipped with dual-monitor workstations, Python/R/Power BI toolchains, SPSS, Tally Prime, and enterprise cloud sandboxes.',
    features: [
      'Dedicated B.Sc Data Science & MCA Innovation Lab with 16GB/32GB RAM nodes',
      'Commerce & Finance Lab running Tally Prime, GST Simulation & Excel Modeling',
      '1 Gbps redundant fiber leased line supporting live coding & hackathons',
      'Dedicated Audio-Visual & Journalism Production Studio for B.A. MCJ students',
    ],
    image: COLLEGE_IMAGES.dataScienceLab,
  },
  {
    id: 'seminar',
    name: "Joseph's Auditorium & Seminar Halls",
    category: 'Conferences & Co-Curriculars',
    capacityOrScale: '450-Seat Auditorium · 3 AV Seminar Rooms',
    summary:
      'Tiered acoustic auditorium and executive conference suites hosting industry conclaves, pre-placement talks, national seminars, and student leadership summits.',
    features: [
      '4K laser projection, Dolby acoustic treatment, and wireless conference audio',
      'Executive Boardroom for corporate campus interview panels and group discussions',
      'Live lecture capture and hybrid webinar streaming capability',
    ],
    image: COLLEGE_IMAGES.seminarHall,
  },
  {
    id: 'sports',
    name: 'Indoor Sports Arena & Recreation Complex',
    category: 'Athletics & Wellness',
    capacityOrScale: 'Basketball · Badminton · Table Tennis · Gym',
    summary:
      'Active athletics infrastructure supporting Osmania University inter-collegiate champions across basketball, badminton, chess, cricket, and fitness training.',
    features: [
      'Regulation indoor basketball & badminton courts with wooden/synthetic flooring',
      'Modern fitness & strength conditioning studio supervised by certified coaches',
      'Annual Josephite Inter-Collegiate Sports Fest attracting 40+ colleges',
    ],
    image: COLLEGE_IMAGES.sportsComplex,
  },
];

export const PLACEMENT_STATS_BY_YEAR = [
  { year: '2025–26 (Ongoing)', recruiters: '124', offers: '680+', highestCtc: '₹14.5 LPA', averageCtc: '₹5.8 LPA', placementRate: '94%' },
  { year: '2024–25', recruiters: '118', offers: '712', highestCtc: '₹13.2 LPA', averageCtc: '₹5.4 LPA', placementRate: '93%' },
  { year: '2023–24', recruiters: '106', offers: '645', highestCtc: '₹11.8 LPA', averageCtc: '₹4.9 LPA', placementRate: '91%' },
  { year: '2022–23', recruiters: '98', offers: '604', highestCtc: '₹10.5 LPA', averageCtc: '₹4.6 LPA', placementRate: '90%' },
];

export const TESTIMONIALS = [
  {
    name: 'Riya Deshmukh',
    program: 'B.Com (Honors), Class of 2025',
    outcome: 'Audit Associate at Deloitte USI, Hyderabad',
    quote:
      'Before joining St. Joseph’s, I had zero exposure to corporate accounting software. Through the IFRS modules, Tally Prime lab, and 3 rounds of Campus Recruitment Training, I cleared Deloitte interviews in Semester V with a ₹6.8 LPA package.',
    metric: '₹6.8 LPA Offer',
  },
  {
    name: 'Arjun Kulkarni',
    program: 'B.Sc Data Science, Class of 2025',
    outcome: 'Junior Data Analyst at Wells Fargo, Hyderabad',
    quote:
      'Having dual-monitor labs and faculty who push us to build real SQL and Python portfolios made all the difference. My Semester V predictive churn capstone was literally what the Wells Fargo panel walked through during my technical interview.',
    metric: '₹8.4 LPA Offer',
  },
  {
    name: 'Sneha Chatterjee',
    program: 'MBA (Finance & Analytics), Class of 2024',
    outcome: 'Operations Analyst at Goldman Sachs Services',
    quote:
      'The dual specialization structure let me pair Corporate Finance with Business Analytics. Daily case presentations and mock interview panels with alumni transformed my confidence before placement week.',
    metric: '₹11.5 LPA Offer',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g-1',
    title: 'King Koti Main Academic Courtyard',
    category: 'Campus',
    caption: 'Morning sunlight across the central student promenade and autonomous academic block.',
    image: COLLEGE_IMAGES.heroCampus,
  },
  {
    id: 'g-2',
    title: 'Data Science & AI Innovation Lab',
    category: 'Academics & Labs',
    caption: 'B.Sc Data Science and MCA cohorts working on live machine learning and SQL pipelines.',
    image: COLLEGE_IMAGES.dataScienceLab,
  },
  {
    id: 'g-3',
    title: 'Central Library Reading Hall',
    category: 'Academics & Labs',
    caption: 'Over 48,500 books and digital research terminals supporting UG and PG scholars.',
    image: COLLEGE_IMAGES.library,
  },
  {
    id: 'g-4',
    title: "Joseph's Annual Industry Conclave",
    category: 'Events',
    caption: 'Corporate leaders addressing management and commerce undergraduates in the main auditorium.',
    image: COLLEGE_IMAGES.seminarHall,
  },
  {
    id: 'g-5',
    title: 'Inter-Collegiate Basketball Tournament',
    category: 'Sports',
    caption: 'St. Joseph’s varsity squad competing at the King Koti Indoor Sports Arena.',
    image: COLLEGE_IMAGES.sportsComplex,
  },
  {
    id: 'g-6',
    title: 'Graduating Class Peer Mentorship',
    category: 'Campus',
    caption: 'Student clubs and peer mentors welcoming incoming UG freshmen during Orientation Week.',
    image: COLLEGE_IMAGES.studentPortrait,
  },
];
