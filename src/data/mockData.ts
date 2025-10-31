import { Candidate, User } from '@/types';

export const mockCandidates: Candidate[] = [
  {
    candidate_id: 1,
    name: "Aisha Rao",
    title: "Senior Backend Engineer",
    location: "Bengaluru, India",
    top_skills: ["Python", "PostgreSQL", "Docker", "FastAPI", "Microservices"],
    score: 92,
    score_breakdown: { skills: 0.65, experience: 0.20, credibility: 0.05, freshness: 0.02 },
    badges: ["linkedin_verified", "github_active", "email_verified"],
    resume_url: "https://example.com/resume_aisha.pdf",
    profile_url: "/candidate/1",
    summary_snippet: "7+ years building scalable backend systems, microservices architecture, and highly available APIs.",
    headline: "Backend Specialist | Microservices Expert | Python Enthusiast",
    summary: "Passionate backend engineer with extensive experience in building distributed systems and microservices. Love solving complex scalability challenges.",
    availability: "immediate",
    desired_salary_min: 80000,
    desired_salary_max: 120000,
    linkedin_url: "https://linkedin.com/in/aisharao",
    github_url: "https://github.com/aisharao",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha",
    experience: [
      {
        role: "Senior Backend Engineer",
        company: "Tech Corp",
        start: "2020",
        end: "Present",
        bullets: [
          "Led migration of monolithic app to microservices, reducing latency by 40%",
          "Built real-time data processing pipeline handling 1M+ events/day",
          "Mentored team of 5 junior engineers"
        ]
      },
      {
        role: "Backend Engineer",
        company: "StartupXYZ",
        start: "2017",
        end: "2020",
        bullets: [
          "Developed RESTful APIs serving 100K+ daily active users",
          "Implemented caching strategy reducing database load by 60%"
        ]
      }
    ],
    education: [
      { degree: "B.Tech in Computer Science", institution: "IIT Delhi", year: "2017" }
    ],
    certifications: ["AWS Solutions Architect", "Kubernetes Administrator"]
  },
  {
    candidate_id: 2,
    name: "Rahul Verma",
    title: "Full Stack Engineer",
    location: "Remote",
    top_skills: ["React", "Node.js", "PostgreSQL", "TypeScript", "AWS"],
    score: 85,
    score_breakdown: { skills: 0.55, experience: 0.25, credibility: 0.04, freshness: 0.01 },
    badges: ["github_active", "email_verified"],
    resume_url: "https://example.com/resume_rahul.pdf",
    profile_url: "/candidate/2",
    summary_snippet: "5+ years building modern web applications with React and Node.js. Strong focus on user experience.",
    headline: "Full Stack Developer | React & Node.js",
    summary: "Full stack engineer passionate about creating seamless user experiences with modern web technologies.",
    availability: "2_weeks",
    desired_salary_min: 60000,
    desired_salary_max: 90000,
    github_url: "https://github.com/rahulverma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    experience: [
      {
        role: "Full Stack Engineer",
        company: "Digital Solutions",
        start: "2019",
        end: "Present",
        bullets: [
          "Built responsive web applications using React and Node.js",
          "Implemented CI/CD pipelines reducing deployment time by 70%"
        ]
      }
    ],
    education: [
      { degree: "B.E in Information Technology", institution: "Mumbai University", year: "2019" }
    ]
  },
  {
    candidate_id: 3,
    name: "Priya Sharma",
    title: "Frontend Developer",
    location: "Pune, India",
    top_skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    score: 78,
    score_breakdown: { skills: 0.50, experience: 0.20, credibility: 0.06, freshness: 0.02 },
    badges: ["linkedin_verified", "email_verified"],
    profile_url: "/candidate/3",
    summary_snippet: "Creative frontend developer with 4 years experience building beautiful, accessible interfaces.",
    headline: "Frontend Developer | UI/UX Enthusiast",
    summary: "I love crafting pixel-perfect interfaces that users love. Strong focus on accessibility and performance.",
    availability: "1_month",
    desired_salary_min: 50000,
    desired_salary_max: 75000,
    linkedin_url: "https://linkedin.com/in/priyasharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    experience: [
      {
        role: "Frontend Developer",
        company: "Creative Agency",
        start: "2020",
        end: "Present",
        bullets: [
          "Developed responsive web applications for major brands",
          "Improved accessibility scores to 95+ on Lighthouse"
        ]
      }
    ],
    education: [
      { degree: "BCA", institution: "Pune University", year: "2020" }
    ]
  },
  {
    candidate_id: 4,
    name: "Arjun Patel",
    title: "DevOps Engineer",
    location: "Hyderabad, India",
    top_skills: ["Kubernetes", "AWS", "Terraform", "CI/CD", "Docker"],
    score: 88,
    score_breakdown: { skills: 0.58, experience: 0.22, credibility: 0.06, freshness: 0.02 },
    badges: ["github_active", "email_verified"],
    profile_url: "/candidate/4",
    summary_snippet: "6 years experience in cloud infrastructure and automation. AWS & Kubernetes certified.",
    headline: "DevOps Engineer | Cloud Infrastructure Specialist",
    summary: "Experienced DevOps engineer passionate about automation, infrastructure as code, and continuous delivery.",
    availability: "immediate",
    desired_salary_min: 70000,
    desired_salary_max: 100000,
    github_url: "https://github.com/arjunpatel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    experience: [
      {
        role: "Senior DevOps Engineer",
        company: "Cloud Services Inc",
        start: "2021",
        end: "Present",
        bullets: [
          "Managed Kubernetes clusters serving 50M+ requests/day",
          "Automated infrastructure deployment reducing setup time by 80%"
        ]
      }
    ],
    education: [
      { degree: "B.Tech in Electronics", institution: "NIT Warangal", year: "2018" }
    ],
    certifications: ["AWS Solutions Architect Professional", "CKA"]
  },
  {
    candidate_id: 5,
    name: "Sneha Desai",
    title: "Data Scientist",
    location: "Mumbai, India",
    top_skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "Data Analysis"],
    score: 81,
    score_breakdown: { skills: 0.52, experience: 0.21, credibility: 0.06, freshness: 0.02 },
    badges: ["linkedin_verified", "email_verified"],
    profile_url: "/candidate/5",
    summary_snippet: "Data scientist with 5 years experience in ML model development and deployment.",
    headline: "Data Scientist | Machine Learning Engineer",
    summary: "Passionate about leveraging data and ML to solve real-world business problems.",
    availability: "2_weeks",
    desired_salary_min: 65000,
    desired_salary_max: 95000,
    linkedin_url: "https://linkedin.com/in/snehadesai",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    experience: [
      {
        role: "Data Scientist",
        company: "Analytics Corp",
        start: "2019",
        end: "Present",
        bullets: [
          "Built recommendation system serving 1M+ users",
          "Developed predictive models improving accuracy by 25%"
        ]
      }
    ],
    education: [
      { degree: "M.Sc in Data Science", institution: "BITS Pilani", year: "2019" }
    ]
  },
  {
    candidate_id: 6,
    name: "Vikram Singh",
    title: "Mobile App Developer",
    location: "Delhi, India",
    top_skills: ["React Native", "iOS", "Android", "Firebase", "JavaScript"],
    score: 76,
    score_breakdown: { skills: 0.48, experience: 0.20, credibility: 0.06, freshness: 0.02 },
    badges: ["github_active", "email_verified"],
    profile_url: "/candidate/6",
    summary_snippet: "Mobile developer specializing in React Native with 4+ years experience.",
    headline: "Mobile App Developer | React Native",
    summary: "Creating smooth, performant mobile experiences for iOS and Android platforms.",
    availability: "1_month",
    desired_salary_min: 55000,
    desired_salary_max: 80000,
    github_url: "https://github.com/vikramsingh",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    experience: [
      {
        role: "Mobile Developer",
        company: "App Studio",
        start: "2020",
        end: "Present",
        bullets: [
          "Developed 10+ mobile apps with 100K+ downloads each",
          "Optimized app performance reducing crash rate by 60%"
        ]
      }
    ],
    education: [
      { degree: "B.Tech in CSE", institution: "Delhi University", year: "2020" }
    ]
  }
];

export const mockRecruiters: User[] = [
  {
    id: 100,
    email: "recruiter@techcorp.com",
    type: "recruiter",
    full_name: "Sarah Johnson",
    is_admin: false
  }
];

export const mockUsers: User[] = [
  ...mockRecruiters,
  {
    id: 1,
    email: "aisha@example.com",
    type: "candidate",
    full_name: "Aisha Rao"
  }
];
