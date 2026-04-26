---
title: Look US — Fashion Community Service
slug: look-us
lang: en
icon: camera
accent: "#be185d"
date: 2024-08-30
period: 2024.07 - 2024.08 (1 month)
role: Backend (4) · Fastcampus Kernel 360 team project
tags: [Java, Spring Boot, JPA, MySQL, Redis, GCP, Nginx, Docker, GitHub Actions]
hero: /assets/img/portfolio/look-us/hero.jpg
permalink: /portfolio/look-us/en/
summary: A fashion community where users share their daily looks and discover styles by color.
links:
  - { label: GitHub, href: https://github.com/Kernel360/E2E2-LOOK-US }
---

## Summary

A fashion community service for sharing daily outfits and discovering styles by color. Planned, designed, built, and operated together with the team.

## Team

- 4 backend engineers
- Tools: GitHub · Notion · Discord

## What I owned

### 1. CI/CD pipeline and deployment automation

- Set up automated builds, tests, and deploys with **GitHub Actions**
- Gradle build → ship JAR to remote server → restart the app
- Hardened the web tier with HTTPS via **Nginx + OpenSSL**

### 2. Social login (Spring Security + OAuth 2.0)

- Implemented social login with Spring Security and the OAuth 2.0 client library
- Streamlined sign-up and sign-in for an easier onboarding experience

### 3. Image object and color extraction

- On upload, the server asynchronously calls **Vision API**
- Identifies objects in images (shirts, pants, shoes) and extracts dominant colors (RGB)

### 4. Collaboration and code quality

- Maintained **70%+ test coverage** across Controller / Service / Repository layers to catch bugs early
- Found bugs and built team rapport through **pair programming and code reviews**

## Troubleshooting — instance crash from accumulating Docker images

### The problem

Every new deploy left **un-pruned Docker images on the GCP instance**, steadily growing memory usage. Eventually performance degraded and the instance crashed.

### The fix

- Logs alone didn't surface the cause. Reviewing the **GitHub Actions workflow** revealed that the **image-pruning step was missing**.
- After restarting the instance, Docker image CPU usage check showed **memory usage above 90%**.
- Added the following command to the workflow to **auto-delete unused images older than 24 hours**:

```bash
sudo docker image prune -af --filter "until=24h"
```

The memory-overload-driven instance crashes stopped after that.

