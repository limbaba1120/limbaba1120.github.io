---
title: Look US — 패션 커뮤니티 서비스
slug: look-us
lang: ko
date: 2024-08-30
period: 2024.07 - 2024.08 (1개월)
role: 백엔드 (4) · 패스트캠퍼스 Kernel 360 팀프로젝트
tags: [Java, Spring Boot, JPA, MySQL, Redis, GCP, Nginx, Docker, GitHub Actions]
hero: /assets/img/portfolio/look-us/hero.jpg
summary: 데일리룩을 공유하고 색상을 통해 원하는 패션 스타일을 찾는 패션 커뮤니티.
links:
  - { label: GitHub, href: https://github.com/Kernel360/E2E2-LOOK-US }
permalink: /portfolio/look-us/
redirect_from:
  - /project/look-us/
---

## 한 줄 소개

데일리룩을 공유하고 색상을 통해 원하는 패션 스타일을 찾는 패션 커뮤니티 서비스입니다. 기획·설계·개발·운영까지 팀원들과 협업하며 진행했습니다.

## 팀 구성

- 백엔드 4명
- 협업 도구: GitHub · Notion · Discord

## 내가 기여한 부분

### 1. CI/CD 파이프라인 구축 및 배포 자동화

- **GitHub Actions** 활용한 자동 배포 (코드 빌드 · 테스트 · 배포 자동화)
- Gradle 프로젝트 빌드 → JAR 파일 원격 서버 전송 → 서버 애플리케이션 재시작
- **Nginx + OpenSSL** 으로 HTTPS 적용해 웹 보안 강화

### 2. 소셜 로그인 (Spring Security + OAuth 2.0)

- Spring Security 프레임워크와 OAuth 2.0 클라이언트 라이브러리로 소셜 로그인 구현
- 사용자가 간편하게 가입·로그인할 수 있도록 사용자 경험 개선

### 3. 이미지 객체 및 색상 추출

- 이미지가 업로드되면 **비동기로 Vision API** 호출
- 이미지에 포함된 객체(셔츠, 바지, 신발) 식별 + 색상(RGB) 추출

### 4. 협업 및 코드 품질

- Controller / Service / Repository 계층의 **테스트 커버리지 70% 이상** 유지로 잠재적 버그 사전 예방
- 팀원들과 **페어 프로그래밍 + 코드 리뷰**로 버그를 발견하고 친밀도도 함께 높임

## 트러블 슈팅 — Docker 이미지 누적으로 인스턴스 다운

### 문제 상황

새로운 버전이 배포될 때마다 **GCP 인스턴스에 Docker 이미지가 삭제되지 않고 누적**되어 메모리 사용량이 지속적으로 증가했습니다. 결국 서버 성능이 저하되고 인스턴스가 갑자기 다운되는 현상이 발생했습니다.

### 해결 방법

- 로그 분석만으로 원인이 잡히지 않아, **GitHub Actions 워크플로우 코드**를 분석한 결과 **Docker 이미지 정리 단계가 누락**된 것을 확인했습니다.
- 인스턴스를 재시작한 후 Docker 이미지의 CPU 사용량을 확인하니 **메모리 사용량이 90% 이상**이었습니다.
- 워크플로우에 다음 명령을 추가해 **24시간 이상 미사용 이미지를 자동 삭제**하도록 했습니다:

```bash
sudo docker image prune -af --filter "until=24h"
```

이후 메모리 과부하로 인한 인스턴스 다운 현상이 해소되었습니다.

