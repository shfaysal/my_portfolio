---
slug: compose-performance-checklist
title: Jetpack Compose performance checklist
summary: A practical checklist I use before shipping Compose-heavy features.
date: 2025-11-12
tags: Compose, Performance, Android
---
## Checklist
- Trace cold start and recomposition hotspots before optimizing.
- Stabilize UI state with immutable models and remember/derivedStateOf.
- Keep lists fast with LazyColumn keys, stable item content, and image caching.
- Profile on real devices and measure frame time before/after changes.
