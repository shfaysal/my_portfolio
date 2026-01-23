export type Project = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  stack: string[];
  metrics: string[];
  highlights: string[];
  role: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "trackify",
    title: "Trackify",
    summary:
      "Habit tracker with offline-first storage, streak analytics, and smart reminders.",
    image: "/images/demo-trackify.svg",
    stack: ["Kotlin", "Room", "WorkManager", "Material 3"],
    metrics: ["24% weekly retention lift", "3k daily active users"],
    highlights: [
      "Built a calendar-based streak engine with offline sync.",
      "Added smart reminders using WorkManager with low-battery safeguards.",
      "Refactored data layer into clean architecture modules for maintainability.",
    ],
    role: "Android Engineer",
    year: "2024",
  },
  {
    slug: "pulsepay",
    title: "PulsePay",
    summary:
      "Secure payments app with biometric auth, instant alerts, and card controls.",
    image: "/images/demo-pulsepay.svg",
    stack: ["Compose", "Hilt", "Firebase", "Biometric API"],
    metrics: ["35% crash reduction", "4.8 Play Store rating"],
    highlights: [
      "Shipped biometric auth flows with fallback and telemetry.",
      "Implemented live transaction alerts via Firebase Cloud Messaging.",
      "Improved startup performance by 28% through cold start profiling.",
    ],
    role: "Senior Android Developer",
    year: "2023",
  },
  {
    slug: "clinicnow",
    title: "ClinicNow",
    summary:
      "Telehealth scheduling and messaging for 50k+ patients and providers.",
    image: "/images/demo-clinicnow.svg",
    stack: ["Retrofit", "GraphQL", "DataStore", "Compose"],
    metrics: ["50k+ users", "99.2% crash-free sessions"],
    highlights: [
      "Built a clinician inbox with threaded chat and file sharing.",
      "Integrated GraphQL caching with offline-friendly data flows.",
      "Partnered with backend to improve appointment latency by 40%.",
    ],
    role: "Android Developer",
    year: "2022",
  },
];
