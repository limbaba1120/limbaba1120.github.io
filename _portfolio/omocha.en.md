---
title: OMOCHA — Limited-edition Goods Auction
slug: omocha
lang: en
date: 2024-12-20
period: 2024.09 - 2024.12 (3 months)
role: Fastcampus Kernel 360 team project · 3 backend / 2 frontend engineers
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

An auction platform for buying and selling hard-to-find, limited-edition collectibles.

## What I owned

<section class="pf-contrib" markdown="1">

### Real-time chat

- Bi-directional client–server communication via **WebSocket + STOMP**
- Used **RabbitMQ** as the STOMP message broker to relay chat messages to subscribers
- Directly implemented the chat UI and WebSocket connection in **Next.js** using **SockJS** and **Stomp.js**

### Image size and loading time optimization

- Reduced image size by **approximately 70% through resizing and WebP/AVIF conversion**
- Reduced image loading time from **2.5 seconds to 0.8 seconds** through image optimization and **S3/CDN delivery**

### Database schema versioning and automated updates with Flyway

- Schema changes were missed as multiple developers modified tables, causing database structures to differ between development and production
- Introduced **Flyway** to manage table creation and modification history as versioned SQL files
- Applied pending migrations in order to **keep database schemas consistent across development and production**

### Service improvements based on user feedback

- Recruited **100 survey participants** through personal contacts and social media
- Delivered **10+ improvements based on user feedback**, including faster image loading and a new category feature

</section>

## Troubleshooting — Concurrent bidding race condition

<section class="pf-trouble" markdown="1">

### The problem

Multiple bids at the same price could succeed for the same auction, even though only one should have been accepted.

### The fix

- Wrote a test submitting 100 bids at the same price to reproduce the issue and verify that **one succeeds and the remaining 99 are rejected**.
- Applied **Redis distributed locking** to process bids one at a time for each auction.
- Separated the locking logic using **a custom annotation and AOP**, making it reusable across features.

</section>
