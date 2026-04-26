---
lng_pair: id_JenkinsGithubIntegration
title: 윈도우10 Jenkins 깃허브 연동
author: 임건우
category: 형상관리
tags: [Jenkins, GitHub, 형상관리, CI/CD, Webhook]
date: 2023-10-09 16:16:00 +0900
---

Jenkins 설치까지 끝났다면, 다음은 GitHub 레포와 연동해 push 시 자동 빌드가 돌도록 설정한다.

## GitHub Personal Access Token 발급

1. GitHub → **Settings**
2. **Developer Settings**
3. **Personal access tokens**
4. **Generate new token → classic**
5. 권한 설정 후 **Generate Token**
6. **토큰을 메모장에 저장** — 페이지를 떠나면 다시 볼 수 없으므로 영구 보관

## Jenkins 시스템 설정

1. **Jenkins 관리** → **System Configuration** → **System**
2. **Name** 입력 → **Add Jenkins**
3. 설정 후 연결 테스트가 성공하면 **Save**

## 새 Freestyle 프로젝트 만들기

1. **새로운 Item**
2. 프로젝트명 입력 → **Freestyle project**
3. **General** — `GitHub project` 체크, GitHub 레포 URL 입력
4. **소스 코드 관리** — **Git** 선택

## Git 인증 설정

1. GitHub 레포 URL 붙여넣기
2. **Add** → **Jenkins** 선택
3. Credentials 입력
4. **Add**

## Build Trigger

`GitHub hook trigger for GITScm polling` 체크 → **Save**

## GitHub Webhook 설정

해당 레포 → **Settings** → **Webhooks** → **Add webhook**

- Payload URL: `http://localhost/github-webhook/`
- (localhost로 안 잡히면 공인 IP 또는 도메인 사용)

## 동작 확인

Jenkins 프로젝트로 돌아가 **지금 빌드**(Build Now). 정상 빌드되면 연동 완료. 이후 GitHub push 시 자동으로 빌드가 트리거된다.
