---
title: ChatHub — Developer Coffee-Chat with Live Video
slug: chathub
lang: en
date: 2024-06-15
period: 2024.03 - 2024.06 (3 months)
role: Kyonggi University team project · 2 backend / 1 frontend engineer
tags: [Java, Spring Boot, JPA, MySQL, Naver Cloud Platform, Amazon Chime SDK, OAuth 2.0]
hero: /assets/img/portfolio/chathub/hero.jpg
permalink: /portfolio/chathub/en/
redirect_from:
  - /project/chathub/en/
summary: A cloud-based coffee-chat service for developers, with real-time video chat built in.
links:
  - { label: GitHub, href: https://github.com/24-1Capstone/backend }
---

## Summary

A service where developers find coffee-chat partners and connect through real-time video calls.

## What I owned

<section class="pf-contrib" markdown="1">

### Real-time video meeting management

- Implemented meeting creation and termination, attendee registration, and join token issuance using the **Amazon Chime SDK Meetings API**
- Implemented real-time voice and video communication between users using the **Amazon Chime SDK**

### Social login (Spring Security + OAuth 2.0)

- Implemented social sign-up and login with **GitHub OAuth**
- Used Spring Security with the OAuth 2.0 client library

</section>

## Reflection

Previously, I mainly relied on Spring courses and blog posts when developing features. In ChatHub, however, it was difficult to find examples that fit our implementation of GitHub OAuth and WebRTC-based video calls using the Amazon Chime SDK.

I started with the fundamentals, reading Spring reference books and the official Chime SDK documentation in English. This gave me the opportunity to **take a deep dive into why each piece of code and configuration was needed and how it worked internally.**
