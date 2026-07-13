// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Prince Gupta',
  role: 'Full-Stack Developer',
  taglines: ['Full-Stack Developer', 'MERN Stack Engineer', 'Problem Solver'],
  summary:
    "I'm a B.Tech Computer Science graduate and full-stack developer with strong foundations in data structures, algorithms, and modern web development. I build end-to-end applications with the MERN stack, and I'm a quick learner with strong analytical skills — currently seeking an SDE role where I can ship real products.",
  email: 'princegupta1775@gmail.com',
  phone: '+91-6280413037',
  location: 'Chandigarh, India',
  resumeFile: '/PrinceGupta.pdf',
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/princegupta80', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/princegupta80/', icon: 'linkedin' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/princegupta8945/', icon: 'leetcode' },
  { label: 'HackerRank', url: 'https://www.hackerrank.com/profile/princegupta1775', icon: 'hackerrank' },
] as const

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'C++', 'Python', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Technologies',
    skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Django', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['MongoDB', 'MySQL', 'AWS (S3, CloudFront)', 'Git & GitHub'],
  },
]

export const experience = [
  {
    company: 'Unified Mentor',
    role: 'Software Developer',
    period: 'Sept 2025 – Present',
    location: 'Remote',
    points: [
      'Developing full-stack web applications with the MERN stack — secure authentication, CRUD operations, and reusable UI components.',
      'Built practical tools including a password generator and mini web applications to sharpen real-world development skills.',
      'Collaborating through GitHub for version control, feature updates, and bug fixes, improving code quality and workflow efficiency.',
    ],
  },
  {
    company: 'Think Next Technologies',
    role: 'Software Trainee',
    period: 'May 2024 – Jul 2024',
    location: 'Remote',
    points: [
      'Completed 2-month industrial training in the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      'Built a full-stack web project — Star Public School Website — with real-world CRUD features and responsive UI.',
      'Learned Software Development Life Cycle and testing principles.',
    ],
  },
]

export const projects = [
  {
    title: 'Online Banking System',
    description:
      'Full-stack management system supporting task creation, assignment, progress tracking, and role-based access control. Scalable MySQL-backed backend with secure data handling and RESTful APIs, structured around OOP principles.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/princegupta80',
  },
  {
    title: 'Personalized Learning Path Recommender',
    description:
      'ML-powered recommendation system that builds personalized learning paths from user skills and progress. Interactive quizzes identify knowledge gaps and continuously improve recommendation accuracy.',
    tech: ['Python', 'Scikit-Learn', 'Deep Learning', 'Streamlit'],
    github: 'https://github.com/princegupta80',
  },
]

export const education = [
  {
    school: 'Chandigarh Group Of Colleges, Landran',
    degree: 'B.Tech in Computer Science',
    period: 'Aug 2022 – Jul 2026',
    detail: 'CGPA: 7.5 / 10.0',
  },
  {
    school: 'DAV Senior Secondary School (CBSE), Chandigarh',
    degree: 'Senior Secondary Education',
    period: 'Apr 2021 – May 2022',
    detail: '',
  },
]

export const achievements = [
  {
    title: 'LeetCode — 250+ Problems',
    detail:
      'Solved 250+ DSA problems across major coding platforms, earning multiple LeetCode badges and strengthening problem-solving skills.',
  },
  {
    title: 'Career Sprint 2k24 — Top 20',
    detail: 'Placed in the top 20 among 400+ participants in an aptitude and skills evaluation (Sep 2024).',
  },
]

export const certificates = [
  { title: 'AWS Academy Graduate', detail: 'Completed the AWS cloud foundations course.' },
  { title: 'MySQL by Simplilearn', detail: 'Certified in MySQL from basics to advanced.' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
