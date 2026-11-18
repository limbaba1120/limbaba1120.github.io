---
title: OMOCHA — 굿즈 경매 서비스
slug: omocha
lang: ko
date: 2024-12-20
period: 2024.09 - 2024.12 (3개월)
role: 패스트캠퍼스 Kernel 360 팀프로젝트 · 백엔드 3명 / 프론트엔드 2명
tags: [Java, Spring Boot, Spring Data JPA, PostgreSQL, Redis, AWS, Docker, RabbitMQ, WebSocket]
hero: /assets/img/portfolio/omocha/hero.jpg
summary: 판매자는 더 높은 가격을, 구매자는 소장 기회를 얻을 수 있는 한정판 굿즈 경매 거래 플랫폼.
links:
  - { label: GitHub, href: https://github.com/Kernel360/F2-omocha-BE }
permalink: /portfolio/omocha/
redirect_from:
  - /project/omocha/
---

## 한 줄 소개

구하기 어려운 한정판 굿즈를 경매로 사고팔 수 있는 거래 플랫폼입니다.


## 주요 기여

<section class="pf-contrib" markdown="1">

### 실시간 채팅 구현

- **WebSocket + STOMP 프로토콜**로 클라이언트–서버 간 양방향 통신 구현
- **RabbitMQ**를 STOMP 메시지 브로커로 사용해 채팅 메시지를 구독자에게 중계
- **Next.js**에서 **SockJS와 Stomp.js**를 사용해 WebSocket 연결 및 채팅 UI 직접 구현

### 이미지 용량 및 로딩 시간 개선

- 이미지 크기 조정 및 **WebP·AVIF 변환으로 이미지 용량 약 70% 감소**
- 이미지 최적화와 **S3·CDN 적용으로 이미지 로딩 시간 2.5초 → 0.8초 단축**

### DB 변경 이력 관리와 환경 일관성 확보

- 여러 개발자가 테이블을 수정하면서 변경 내역이 누락되고, 개발·운영 환경의 DB 구조가 달라지는 문제 발생
- **Flyway**를 도입해 테이블 생성·수정 내역을 버전별 SQL 파일로 관리
- 미적용된 변경 사항을 순서대로 반영해 **개발·운영 환경의 DB 구조를 일관되게 관리**

### 사용자 피드백을 반영한 서비스 개선

- 지인과 SNS를 통해 **100명을 모집해 사용자 설문 진행**
- 피드백을 바탕으로 **이미지 로딩 개선, 카테고리 기능 추가 등 10개 이상의 개선 사항 반영**

</section>

## 문제 해결 · 동시 입찰 처리

<section class="pf-trouble" markdown="1">

### 문제 상황

같은 경매에 동일 금액의 입찰 요청이 몰리면서, **한 건만 성공해야 하는 입찰이 여러 건 성공하는 문제**가 발생했습니다.

### 해결 방법

- 동일 금액의 입찰 요청 100건으로 문제를 재현하고, **1건만 성공하고 나머지 99건은 거절되는지 검증하는 테스트**를 작성했습니다.
- **Redis 분산 락**을 적용해 같은 경매의 입찰 요청을 한 번에 하나씩 처리하도록 개선했습니다.
- **어노테이션과 AOP**로 락 처리 로직을 분리해, 필요한 기능에서 재사용할 수 있도록 구현했습니다.

</section>
