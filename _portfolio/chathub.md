---
title: ChatHub — 화상채팅이 가능한 커피챗 서비스
slug: chathub
lang: ko
date: 2024-06-15
period: 2024.03 - 2024.06 (3개월)
role: 경기대학교 팀프로젝트 · 백엔드 2명 / 프론트엔드 1명
tags: [Java, Spring Boot, JPA, MySQL, Naver Cloud Platform, Amazon Chime SDK, OAuth 2.0]
hero: /assets/img/portfolio/chathub/hero.jpg
summary: 개발자들이 온라인에서 간편하게 커피챗 상대를 찾고, 실시간 화상채팅이 가능한 커피챗 서비스.
links:
  - { label: GitHub, href: https://github.com/24-1Capstone/backend }
permalink: /portfolio/chathub/
redirect_from:
  - /project/chathub/
---

## 한 줄 소개

개발자들이 커피챗 상대를 찾고, 실시간 화상채팅으로 대화할 수 있는 서비스입니다.


## 주요 기여

<section class="pf-contrib" markdown="1">

### 실시간 화상회의 관리 기능 구현

- **Amazon Chime SDK Meetings API**로 회의 생성·종료, 참가자 등록 및 참여 토큰 발급 구현
- **Amazon Chime SDK**를 활용해 사용자 간 실시간 음성·영상 통신 구현

### GitHub 소셜 로그인

- Spring Security와 OAuth 2.0 클라이언트를 활용해 GitHub 계정 기반 회원가입·로그인 구현

</section>

## 느낀 점

<section class="pf-reflection" markdown="1">

이전에는 주로 Spring 강의와 외부 블로그를 참고하며 개발했습니다. 그런데 ChatHub 프로젝트에서는 GitHub OAuth와 Amazon Chime SDK를 활용한 WebRTC 기능을 구현하면서, 프로젝트에 맞는 구현 사례를 찾기 어려웠습니다.

그래서 Spring 참고 서적과 영어로 된 Chime SDK 공식 문서를 읽으며 기본 원리부터 공부하기 시작했습니다. 이 과정에서 각 코드와 설정이 왜 필요한지, 내부적으로 어떻게 동작하는지까지 **Deep Dive해볼 수 있었습니다.**

</section>
