---
lng_pair: id_RaspberryPi4Install
title: Raspberry Pi4 OS 설치 — React, SpringBoot 배포까지
author: 임건우
category: Raspberry
tags: [RaspberryPi, RaspberryPi4, Imager, Putty, VNC, OS설치, 원격접속]
date: 2023-10-03 12:00:00 +0900
---

React와 SpringBoot로 만든 프로젝트를 라즈베리파이에 배포하기 위한 첫 단계 — 모니터 없이도 원격 접속만으로 라즈베리파이를 사용할 수 있도록 OS를 설치하고 환경을 잡아본다.

## Raspberry Pi Imager 다운로드

컴퓨터와 라즈베리파이가 **같은 와이파이 네트워크**에 연결되어 있어야 한다.

마이크로 SD카드를 PC에 연결하면 포맷 대화상자가 뜨는데, **반드시 취소를 누른다.**

[공식 다운로드 페이지](https://www.raspberrypi.com/software/) 에서 Windows 버전을 받는다.

## Imager 설정

- **저장소**: Mass Storage Device USB Device
- **운영체제**: Raspberry Pi OS (32-bit)
- **고급 옵션**:
  - SSH 사용 — 필수
  - 사용자 이름 / 비밀번호 — 라즈베리파이 로그인 시 사용 (임의 설정)
  - 무선 LAN 설정 — 집 와이파이 SSID와 비밀번호
  - 로케일 — Asia/Seoul

설정이 끝나면 **쓰기**를 눌러 SD카드에 OS를 굽고, SD카드를 라즈베리파이에 꽂은 뒤 전원을 켠다.

## Putty로 원격 SSH 접속

먼저 라즈베리파이의 IP 주소를 확인해야 한다.

Windows Terminal:

```
ipconfig
```

기본 게이트웨이 주소를 웹브라우저에 입력해 공유기 관리 페이지로 들어간다.

**SK BroadBand 공유기 기본 계정:**
- ID: `admin`
- 비밀번호: `MAC주소 마지막 6자리 + _ + admin` (예: `CCCCCC_admin`)

네트워크 관리 → 접속 단말 정보에서 라즈베리파이 IP를 확인한다.

[Putty](https://www.putty.org/) MSI Windows Installer 버전을 설치하고, Host Name에 라즈베리파이 IP를 넣어 Open. 위에서 설정한 ID/PW로 로그인한다.

## 모니터 없이 부팅되도록 설정

모니터를 연결하지 않은 상태에서도 부팅되게 하려면 HDMI 강제 옵션을 켠다.

```
sudo nano /boot/config.txt
```

`hdmi_force_hotplug=1` 앞의 `#` 을 제거 → `Ctrl+X` → `Shift+Y` → `Enter` 로 저장.

```
sudo raspi-config
```

1. System Options
2. Boot / Auto Login
3. Desktop

자동 로그인을 비활성화 (원격 로그인 필요).

```
sudo reboot
```

## VNC Viewer로 GUI 원격 접속

[RealVNC](https://www.realvnc.com/en/connect/download/viewer/windows/) Windows 버전 다운로드.

RealVNC Viewer를 열고 라즈베리파이 IP를 입력 → 위에서 설정한 ID/PW로 로그인 → 그래픽 인터페이스 접속 완료.

---

**참고:** [YouTube 튜토리얼](https://www.youtube.com/watch?v=AHwVvgEytrE&list=PLgkpDfSY2BezjRnkM3CvfeejgqJF_mZFS&index=3)
