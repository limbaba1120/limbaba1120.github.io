---
title: OMOCHA — 굿즈 경매 서비스
slug: omocha
lang: ko
date: 2024-12-20
period: 2024.09 - 2024.12 (3개월)
role: 백엔드 (3) · 패스트캠퍼스 Kernel 360 팀프로젝트
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

구하기 어려운 한정판 굿즈를 경매로 사고팔 수 있는 종합 거래 플랫폼입니다. 기획·개발·운영을 팀원들과 협업하며 진행했습니다.

## 팀 구성

- 백엔드 3명 / 프론트엔드 2명
- 협업 도구: GitHub · Notion · Discord

## 내가 기여한 부분

<section class="pf-contrib" markdown="1">

### 실시간 채팅 구현

- **WebSocket + STOMP 프로토콜**로 클라이언트–서버 간 양방향 통신 구현
- **RabbitMQ** 메시지 브로커로 메시지 흐름 모니터링
- 프론트는 Next.js + SockJS / Stomp.js 로 WebSocket 연결

### 이미지 WebP 변환 + S3 + CDN

- 기존 JPEG / PNG 이미지를 **WebP 형식으로 변환** (이미지 용량 **70% 감소**)
- 변환된 이미지를 **AWS S3**에 저장 후 **CDN** 도입으로 콘텐츠 다운로드 시간 **2초 → 1초** 단축

### Flyway로 데이터 마이그레이션 자동화

- 운영 환경에서 같은 테이블을 여러 명이 수정하며 충돌, 환경별 스키마 불일치 발생
- **Flyway** 도입 → 데이터베이스 스키마 변경을 스크립트로 관리, 히스토리 추적
- 여러 개발자 간의 데이터베이스 충돌을 방지하고 일관된 배포 진행

### 사용자 피드백 수집 및 서비스 개선

- 설문 조사를 통해 **50개 이상**의 사용자 피드백 수집
- 피드백을 우선순위에 따라 분류하고, 애자일 스프린트를 통해 서비스 기능을 **10개 이상 개선**

### 카테고리 / 경매 게시글 CRUD

- 도메인 전반의 CRUD API 와 카테고리 분류 로직 구현

</section>

## 트러블 슈팅 — 동시 입찰의 동시성 문제

<section class="pf-trouble" markdown="1">

### 문제 상황

100명의 사용자가 동시에 입찰하는 과정에서 **여러 명의 입찰이 동시에 성공 처리되는 문제**가 발생했습니다. 여러 입찰 요청이 동시에 데이터베이스에 접근하면서 발생하는 동시성 문제임을 확인했습니다.

### 해결 방법

- 여러 사용자가 동시에 입찰하는 상황을 시뮬레이션하는 **테스트 코드를 작성**해 문제를 재현하고 원인을 정확히 파악했습니다.
- Repository(Infra) 단에서 예외를 던져 서버 리소스를 낭비할 수 있는 비관적 락·낙관적 락보다, **애플리케이션 단에서 빠르게 실패 처리**할 수 있도록 **Redis 기반 분산 락**을 도입했습니다.
- **Redisson의 RLock**을 활용한 분산 락을 적용해, 특정 경매 상품에 대한 입찰 요청이 들어올 때 **하나의 요청만 락을 획득해 처리**하도록 제한했습니다.
- `@DistributedLock` 어노테이션을 통해 `waitTime`(대기 시간)과 `leaseTime`(임대 시간)을 커스텀하고, **AOP**를 활용해 비즈니스 로직 코드의 복잡도를 줄이고 재사용 가능한 분산 락 컴포넌트로 만들었습니다.

</section>

