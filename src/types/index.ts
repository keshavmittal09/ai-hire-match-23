export type UserType = 'candidate' | 'recruiter';

export interface User {
  id: number;
  email: string;
  type: UserType;
  full_name: string;
  is_admin?: boolean;
}

export interface Candidate {
  candidate_id: number;
  name: string;
  title: string;
  location: string;
  top_skills: string[];
  score: number;
  score_breakdown: {
    skills: number;
    experience: number;
    credibility: number;
    freshness: number;
  };
  badges: string[];
  resume_url?: string;
  profile_url: string;
  summary_snippet: string;
  headline?: string;
  summary?: string;
  experience?: Experience[];
  education?: Education[];
  certifications?: string[];
  portfolio_links?: string[];
  desired_salary_min?: number;
  desired_salary_max?: number;
  availability?: string;
  linkedin_url?: string;
  github_url?: string;
  twitter_url?: string;
  instagram_url?: string;
  portfolio_url?: string;
  website_url?: string;
  avatar?: string;
  phone?: string;
  bio?: string;
}

export interface Experience {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface SearchFilters {
  location?: string;
  availability?: string;
  min_salary?: number;
  max_salary?: number;
  skills?: string[];
}

export interface SearchResult {
  total: number;
  page: number;
  page_size: number;
  results: Candidate[];
}
