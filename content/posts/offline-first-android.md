---
slug: offline-first-android
title: Designing offline-first Android apps
summary: How I structure Room, network sync, and UI states for offline UX.
date: 2025-09-30
tags: Architecture, Room, UX
---
## Strategy
- Model source of truth around the local database, then sync outward.
- Use WorkManager for retries with constraints like battery and network.
- Communicate connectivity state to the UI and surface sync progress.
- Test airplane-mode flows early to catch UX gaps.
