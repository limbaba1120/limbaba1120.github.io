---
lng_pair: id_RedmineInstallWin10
title: 윈도우10 Redmine 설치 및 GitHub 연동
author: 임건우
category: 형상관리
tags: [Redmine, GitHub, 형상관리, Project, Bitnami]
date: 2023-10-09 17:46:00 +0900
---

윈도우에서 Redmine을 설치하고 GitHub 레포와 연동하는 과정. 다음 편에서는 우분투에서 같은 작업을 진행할 예정.

## 윈도우에서 Git Clone

Redmine 프로젝트용 폴더(`opensw` 등)를 만들고 그 안에서 GitHub 레포를 clone 받아 둔다.

![새 폴더 생성](/assets/img/posts/redmine/01-new-folder.jpg)

`opensw` 안에 git 업데이트 스크립트를 만든다:

```bash
$ vi gitupd.sh

cd ~/(git repo 위치)
git remote update
```

![폴더 셋업](/assets/img/posts/redmine/02-folder-setup.png)

그리고 crontab에 등록:

```bash
$ crontab -e

* * * * * ~/gitupd.sh
```

`* * * * *` 은 cron 표현식 (1분마다 실행).

## Redmine 설치 (Bitnami 패키지)

[Redmine 설치 (Bitnami) — REDMINE 커뮤니티](http://www.redmine.or.kr/projects/community/wiki/%EB%A0%88%EB%93%9C%EB%A7%88%EC%9D%B8_%EC%84%A4%EC%B9%98%28bitnami%29) 에서 Windows 버전 다운로드.

설치 진행:

**1. 한국어 선택 → 다음**

![언어 선택](/assets/img/posts/redmine/03-language.jpg)

**2. 컴포넌트 모두 선택 → 다음**

![컴포넌트](/assets/img/posts/redmine/04-components.jpg)

**3. 설치 경로 선택 → 다음**

![설치 경로](/assets/img/posts/redmine/05-install-path.jpg)

**4. 계정 정보 입력** — 계정명: `admin` / 패스워드: `redmine` (예시)

![계정 정보](/assets/img/posts/redmine/06-account.jpg)

**5. Gmail 사용 선택 후 Gmail 계정 입력 → 다음**

**6. Access BitNami Redmine Stack 클릭하면 끝**

![BitNami 스택 접근](/assets/img/posts/redmine/07-bitnami-stack.jpg)

## Redmine ↔ Git 저장소 연동

`http://localhost/redmine` 접속 → 로그인.

![Redmine 로그인](/assets/img/posts/redmine/08-login.jpg)

**1. 프로젝트 탭 → 새 프로젝트 → 정보 입력 후 만들기**

![프로젝트 생성](/assets/img/posts/redmine/09-create-project.png)

**2. 만든 프로젝트 → 설정 → 저장소 → 저장소 추가**

위에서 clone 해 둔 git 레포 경로 입력 → 만들기.

![저장소 추가](/assets/img/posts/redmine/10-add-repo.png)

**3. 저장소 탭에서 정상 표시되면 연동 완료**

![저장소 성공](/assets/img/posts/redmine/11-repo-success.png)
