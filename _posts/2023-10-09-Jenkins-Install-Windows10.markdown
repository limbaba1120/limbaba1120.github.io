---
lng_pair: id_JenkinsInstallWin10
title: 윈도우10 Jenkins 설치
author: 임건우
category: 형상관리
tags: [Jenkins, 형상관리, CI/CD]
date: 2023-10-09 15:35:00 +0900
---

Jenkins는 설치가 쉬운 무료 오픈 소스 CI/CD 도구다. 윈도우10에 LTS 버전을 설치하는 과정을 정리.

## Jenkins 다운로드

[Jenkins 공식 다운로드](https://www.jenkins.io/download/) 에서 **Jenkins LTS Windows** 버전을 받는다.

## 설치

1. **시작** — 다운받은 설치 파일 실행 → Next
2. **설치 경로** 선택 → Next
3. **계정 설정** — 윈도우 계정 ID/PW 입력 → `Test Credentials` 클릭

> 여기서 `Error logging on...` 메시지가 뜨면 다음 단계로.

### `Error logging on...` 해결

윈도우 검색 → **로컬 보안 정책**

좌측: **로컬 정책** → **사용자 권한 할당** → **서비스로 로그온**

더블클릭 → 윈도우 계정 ID 추가. 직접 안 보이면 `Advanced` → 검색해서 추가.

다시 Jenkins 인스톨러로 돌아와 NEXT.

### 포트 설정

기본값 `8080` 유지하거나 원하는 포트 입력.

### 자바 요구사항

Jenkins는 **Java 11 / 17 / 21** 중 하나가 시스템에 설치되어 있어야 한다.

## 설치 확인

`Win + R` → `services.msc` → Jenkins 서비스가 실행 중인지 확인.

## Jenkins 접속

1. Chrome 으로 `localhost:8080` 접속
2. 패스워드 입력 → CONTINUE
3. **Install suggested plugins**
4. 설정 폼 작성 → **Save and Continue**

설치 완료. 다음 글에서는 Jenkins ↔ GitHub 연동을 다룬다.
