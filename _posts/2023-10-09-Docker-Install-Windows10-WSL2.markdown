---
lng_pair: id_DockerInstallWin10WSL2
title: 윈도우10 도커 설치 (WSL2)
author: 임건우
category: Docker
tags: [Docker, WSL2, Windows10, Ubuntu]
date: 2023-10-09 18:40:00 +0900
---

윈도우10에 Docker Desktop을 설치하기 전에 WSL2를 먼저 설정해야 한다. 가상머신/듀얼부팅 없이 윈도우 위에서 리눅스 명령을 쓸 수 있게 해주는 게 WSL이다.

## WSL2 설정

### Windows Terminal 설치

Microsoft Store에서 Windows Terminal 설치. PowerShell 기반 + GUI 개선판.

### 윈도우 버전 확인

WSL2 설치 기준은 **Windows 10 20H1 이상**. Windows Terminal에서 `winver` 입력해 확인.

### WSL 설치

```
wsl --install
```

WSL 버전이 2가 맞는지 확인하고, 만약 1이면 2로 변환.

### Ubuntu 설치

Microsoft Store에서 Ubuntu 다운로드 → Windows Terminal `+` 탭에서 Ubuntu 선택 → username/password 입력하면 설치 완료.

---

## Docker Desktop 설치

[Docker Desktop for Windows 공식 가이드](https://docs.docker.com/desktop/install/windows-install/) 다운로드.

설치 화면에서 **"Use WSL 2 instead of Hyper-V (recommended)"** 체크하고 NEXT 진행 → 완료 후 **RESTART**.

## WSL Ubuntu ↔ Docker 연동

1. **Windows 기능** → "Linux용 Windows 하위 시스템" 체크
2. Docker Desktop → **Settings** → **General** → "Use the WSL 2 based engine"
3. **Resources** → **WSL integration** → 설치한 Ubuntu 버전 선택

Ubuntu 터미널에서 `docker` 입력해 도커 도움말이 뜨면 연동 성공. 이제 WSL Ubuntu에서 Docker 이미지를 받고 컨테이너를 실행할 수 있다.

---

**참고:** [얄팍한 코딩사전 — 가장 쉽게 배우는 도커](https://www.yalco.kr/36_docker/)
