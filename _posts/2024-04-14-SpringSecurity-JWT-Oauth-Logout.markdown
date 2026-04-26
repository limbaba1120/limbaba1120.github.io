---
lng_pair: id_SpringSecurityJwtLogout
title: Spring Security + JWT + OAuth — 안전한 로그아웃 구현
author: 임건우
category: Spring Security
tags: [Spring Security, JWT, OAuth, Logout, Backend]
date: 2024-04-14 22:03:00 +0900
---

스프링 시큐리티 / JWT / OAuth 학습 내용을 프로젝트에 적용하면서, **토큰 기반 인증의 로그아웃**을 제대로 처리하는 방법을 정리한 글.

## 기존 코드의 한계

처음 구현한 코드는 다음과 같았다.

**WebOAuthSecurityConfig.java**

```java
http.logout()
    .logoutSuccessUrl("/login");
```

**UserApiController.java**

```java
@GetMapping("/logout")
public String logout(HttpServletRequest request, HttpServletResponse response) {
    new SecurityContextLogoutHandler()
        .logout(request, response, SecurityContextHolder.getContext().getAuthentication());
    return "redirect:/login";
}
```

문제: **로그아웃 후에도 다른 보호된 URL에 그대로 접근이 가능**했다. SecurityContext만 비웠을 뿐, 실제 토큰은 살아있어서다.

## 원하던 동작

1. DB에 저장된 `refresh_token` 제거
2. `refresh_token` / `access_token` 쿠키 삭제
3. Authorization 무효화
4. 프론트엔드에서 `localStorage` 의 access token 삭제 + 보호 라우트 차단

## 변경된 구현

**WebOAuthSecurityConfig.java**

```java
http.logout()
    .logoutUrl("/logout")
    .logoutSuccessHandler(logoutSuccessHandler())
    .deleteCookies("refresh_token", "access_token")
    .clearAuthentication(true)
    .invalidateHttpSession(true);
```

핵심 옵션:

- `.logoutUrl()` — 로그아웃 엔드포인트 지정
- `.logoutSuccessHandler()` — 성공 시 추가 작업 훅
- `.deleteCookies()` — 지정 쿠키 자동 삭제
- `.clearAuthentication(true)` — SecurityContext 의 인증 객체 제거
- `.invalidateHttpSession(true)` — HTTP 세션 무효화

**UserApiController.java**

```java
@PostMapping("/logout")
public ResponseEntity logout() {
    return ResponseEntity.ok("You have been logged out successfully.");
}
```

> GET → POST 로 바꾼 이유: **CSRF 보호 및 의도치 않은 로그아웃 방지**. GET 요청은 숨겨진 `<img>` 태그나 스크립트로 공격받을 수 있다.

**LogoutSuccessHandler.java**

```java
@Override
public void onLogoutSuccess(HttpServletRequest request,
                            HttpServletResponse response,
                            Authentication authentication) throws IOException {
    String accessToken = getAccessToken(request.getHeader(HEADER_AUTHORIZATION));
    if (accessToken == null || !tokenProvider.validToken(accessToken)) {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().print("Invalid or missing token, logout failed.");
        response.getWriter().flush();
        return;
    }

    Long userId = tokenProvider.getUserId(accessToken);
    refreshTokenRepository.findByUserId(userId).ifPresent(refreshTokenRepository::delete);

    new SecurityContextLogoutHandler().logout(request, response, authentication);
    response.setStatus(HttpServletResponse.SC_OK);
    response.getWriter().print("You have been logged out successfully.");
    response.getWriter().flush();
}

private String getAccessToken(String authorizationHeader) {
    if (authorizationHeader != null && authorizationHeader.startsWith(TOKEN_PREFIX)) {
        return authorizationHeader.substring(TOKEN_PREFIX.length());
    }
    return null;
}
```

처리 순서:

1. **토큰 검증** — Authorization 헤더에서 access token 추출, 유효성 검증
2. **refresh token 삭제** — 해당 사용자의 DB 레코드 제거
3. **SecurityContext 정리** — 로그아웃 응답 반환

## 핵심 원칙

> **토큰 기반 인증을 쓰는 애플리케이션은 로그아웃 시 토큰 무효화가 필수다.** SecurityContext 만 비우는 것으로는 부족하다.

## 테스트 결과

- 로그인 시 `refresh_token` 이 DB에 저장됨
- POSTMAN 으로 access token 헤더 포함 + POST `/logout` 호출
- 응답 200 / DB의 refresh token 삭제 / 쿠키 제거 확인

## 남은 작업

프론트엔드(React) — `localStorage` 의 access token 삭제 및 보호 라우트 가드 추가.
