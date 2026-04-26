---
title: OMOCHA — Limited-edition Goods Auction
slug: omocha
lang: en
date: 2024-12-20
period: 2024.09 - 2024.12 (3 months)
role: Backend (3) · Fastcampus Kernel 360 team project
tags: [Java, Spring Boot, Spring Data JPA, PostgreSQL, Redis, AWS, Docker, RabbitMQ, WebSocket]
hero: /assets/img/portfolio/omocha/hero.jpg
permalink: /portfolio/omocha/en/
redirect_from:
  - /project/omocha/en/
summary: An auction platform where collectors get a chance to own — and sellers a chance at the highest bid — for hard-to-find merchandise.
links:
  - { label: GitHub, href: https://github.com/Kernel360/F2-omocha-BE }
---

## Summary

A trading platform for limited-edition goods that are hard to find through normal channels. Planned, built, and operated together with the team.

## Team

- 3 backend / 2 frontend engineers
- Tools: GitHub · Notion · Discord

## What I owned

<section class="pf-contrib" markdown="1">

### Real-time chat

- Bi-directional client–server communication via **WebSocket + STOMP**
- **RabbitMQ** as the message broker for traffic monitoring
- Frontend connected via **SockJS** and **Stomp.js** on Next.js

### WebP conversion + S3 + CDN

- Converted existing JPEG / PNG to **WebP** (image size **−70%**)
- Stored on **AWS S3** behind a **CDN**, cutting image content download time from **2s to 1s**

### Flyway-based database migration automation

- Multiple devs editing the same table caused conflicts and per-environment schema drift
- Introduced **Flyway** to manage schema changes as scripts with full history
- Eliminated DB conflicts across developers and enabled consistent deployments

### User feedback loop

- Collected **50+ pieces** of user feedback via surveys
- Prioritized and shipped **10+ improvements** through agile sprints

### Categories & auction CRUD

- Built CRUD APIs and category classification across the domain

</section>

## Troubleshooting — Concurrent bidding race condition

<section class="pf-trouble" markdown="1">

### The problem

When 100 users bid at the same time, **multiple bids could succeed concurrently**. Multiple bid requests hitting the database simultaneously caused a classic concurrency issue.

### The fix

- Wrote a **test that simulates concurrent bidders** to reliably reproduce the issue and pin down the root cause.
- Avoided pessimistic / optimistic locks at the Repository (infra) layer — they raise exceptions and waste server resources. Instead, introduced **Redis-based distributed locking** so the application layer can fail fast.
- Used **Redisson `RLock`** so that, for a given auction item, **only one bid request acquires the lock** and proceeds.
- Built a **`@DistributedLock` annotation** with custom `waitTime` / `leaseTime`, and used **AOP** to keep business logic clean and the lock reusable as a component.

</section>

