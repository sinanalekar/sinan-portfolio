export const person = {
  name: "Sinan Anwar Alekar",
  email: "sinanalekar9192@gmail.com",
  website: "https://sinan-alekar.vercel.app",
  github: "https://github.com/sinanalekar",
  linkedin: "https://www.linkedin.com/in/sinan-anwar-alekar-90171825a/",
  instagram: "https://www.instagram.com/alk.sinan/",
} as const;

// First-party skills from the two supplied CVs; no proficiency scores or certifications.
export const skillGroups = [
  {
    title: "Security testing",
    skills: [
      "Burp Suite",
      "Wireshark",
      "Nmap",
      "Chrome DevTools",
      "Controlled experiments",
      "Reproduction and evidence review",
    ],
  },
  {
    title: "Identity & API security",
    skills: [
      "OAuth 2.0",
      "JWT",
      "RBAC",
      "CSRF",
      "REST APIs",
      "Authorization boundaries",
    ],
  },
  {
    title: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Bash",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend & data",
    skills: [
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "SQLite",
      "Firebase",
      "Firestore",
      "Realtime Database",
    ],
  },
  {
    title: "Interfaces & mobile",
    skills: [
      "React",
      "Next.js",
      "Tauri",
      "Android",
      "PWA",
      "Firebase Cloud Messaging",
      "Android Studio",
    ],
  },
  {
    title: "AI & research workflows",
    skills: [
      "OpenAI and Gemini API integration",
      "Agent tool permissions",
      "Hypothesis-led experiments",
      "Negative controls",
      "Reproducibility",
    ],
  },
  {
    title: "Delivery & tooling",
    skills: [
      "Git",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Linux",
      "Postman",
    ],
  },
] as const;

export const spokenLanguages = ["English", "Hindi", "Marathi", "Urdu"] as const;
