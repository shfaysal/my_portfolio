export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "compose-performance-checklist",
    title: "Jetpack Compose performance checklist",
    summary:
      "A practical checklist I use before shipping Compose-heavy features.",
    date: "2025-11-12",
    tags: ["Compose", "Performance", "Android"],
    body: [
      "Start with tracing: identify cold start and recomposition hotspots before optimizing.",
      "Stabilize your UI state by using immutable models and remember/derivedStateOf wisely.",
      "Keep lists fast with LazyColumn keys, stable item content, and image caching.",
      "Profile on real devices and measure frame time before and after changes.",
    ],
  },
  {
    slug: "offline-first-android",
    title: "Designing offline-first Android apps",
    summary:
      "How I structure Room, network sync, and UI states for offline UX.",
    date: "2025-09-30",
    tags: ["Architecture", "Room", "UX"],
    body: [
      "Model your source of truth around the local database, then sync outward.",
      "Use WorkManager to schedule retries with constraints like battery and network.",
      "Communicate connectivity state to the UI and surface sync progress.",
      "Test airplane mode flows early to catch UX gaps.",
    ],
  },
];
