---
layout: default
# Portfolio list — single long-form page that inlines every entry from
# `_portfolio/` collection (filtered by page.lang). Each project block
# uses the existing markdown body so content stays in one place.
---
{%- assign lng = page.lang | default: 'ko' -%}
{%- assign items = site.portfolio | where: "lang", lng | sort: "date" | reverse -%}

{%- if lng == 'en' -%}
  {%- assign t_eyebrow = 'Portfolio' -%}
  {%- assign t_title = 'Portfolio' -%}
  {%- assign t_intro = 'A walkthrough of three backend projects I shipped — each one anchored on a hard problem I owned end-to-end (real-time messaging, concurrent bidding, video chat infra). For every project the page covers the context, what I built, the trickiest bug, and what stuck with me.' -%}
  {%- assign t_alt_preview = 'preview' -%}
  {%- assign t_resume = 'View resume →' -%}
  {%- assign t_switch = '한국어' -%}
  {%- assign t_index = 'Index' -%}
  {%- assign t_links = 'Links' -%}
  {%- assign t_empty = 'No portfolio entries yet.' -%}
  {%- assign t_overview = 'Overview' -%}
  {%- assign t_stat_count_label = 'Projects' -%}
  {%- assign t_stat_stack_label = 'Primary stack' -%}
  {%- assign t_stat_stack_value = 'Java · Spring Boot · JPA · MySQL / PostgreSQL · Redis' -%}
  {%- assign t_stat_focus_label = 'Focus areas' -%}
  {%- assign t_stat_focus_value = 'Real-time communication · Concurrency control · Infra automation' -%}
  {%- assign t_approach = 'How I work' -%}
  {%- assign t_approach_1_h = 'Reproduce before you fix' -%}
  {%- assign t_approach_1_b = 'Wrote a 100-bidder concurrency test for OMOCHA before touching a single line of locking code — only then could I tell pessimistic vs. distributed locks apart on the actual hot path.' -%}
  {%- assign t_approach_2_h = 'Pick locks/caches by measurement, not instinct' -%}
  {%- assign t_approach_2_b = 'Skipped pessimistic / optimistic DB locks because they waste server resources on retries — Redisson distributed locks let the application layer fail fast.' -%}
  {%- assign t_approach_3_h = 'Automate ops bottlenecks the moment they bite' -%}
  {%- assign t_approach_3_b = 'Docker image accumulation crashed a GCP instance → added a `docker image prune` step. Schema drift across teammates → introduced Flyway. Manual deploys → GitHub Actions.' -%}
  {%- assign t_approach_4_h = 'Learn new tech from official docs, not tutorials' -%}
  {%- assign t_approach_4_b = 'Picked up Amazon Chime SDK / WebRTC by reading English-only docs and shipping it — that beat following along to videos by a wide margin.' -%}
  {%- assign other_url = '/portfolio/' -%}
  {%- assign resume_url = '/resume/en/' -%}
{%- else -%}
  {%- assign t_eyebrow = '포트폴리오' -%}
  {%- assign t_title = 'Portfolio' -%}
  {%- assign t_intro = '실시간 메시징·동시 입찰·화상 채팅처럼 직접 부딪쳐가며 해결한 문제 중심으로 백엔드 프로젝트 3개를 정리한 페이지입니다. 각 프로젝트마다 맥락 → 내가 만든 것 → 가장 어려웠던 문제 → 회고를 한 흐름으로 볼 수 있습니다.' -%}
  {%- assign t_alt_preview = '미리보기' -%}
  {%- assign t_resume = '이력서 보기 →' -%}
  {%- assign t_switch = 'English' -%}
  {%- assign t_index = '목차' -%}
  {%- assign t_links = '링크' -%}
  {%- assign t_empty = '등록된 프로젝트가 아직 없습니다.' -%}
  {%- assign t_overview = '한눈에 보기' -%}
  {%- assign t_stat_count_label = '프로젝트' -%}
  {%- assign t_stat_stack_label = '주요 스택' -%}
  {%- assign t_stat_stack_value = 'Java · Spring Boot · JPA · MySQL / PostgreSQL · Redis' -%}
  {%- assign t_stat_focus_label = '관심 분야' -%}
  {%- assign t_stat_focus_value = '실시간 통신 · 동시성 제어 · 인프라 자동화' -%}
  {%- assign t_approach = '일하는 방식' -%}
  {%- assign t_approach_1_h = '문제는 먼저 재현한다' -%}
  {%- assign t_approach_1_b = 'OMOCHA 동시 입찰 문제는 락 코드를 한 줄도 만지기 전에 100명 동시 입찰 테스트를 먼저 작성했습니다. 그래야 비관적 락과 분산 락이 같은 핫패스에서 어떻게 다르게 동작하는지 비교할 수 있었습니다.' -%}
  {%- assign t_approach_2_h = '락·캐시는 측정 후에 고른다' -%}
  {%- assign t_approach_2_b = '비관적·낙관적 락은 재시도로 서버 자원을 낭비하므로 채택하지 않았고, Redisson 분산 락으로 애플리케이션 단에서 빠르게 실패 처리하도록 설계했습니다.' -%}
  {%- assign t_approach_3_h = '운영 병목은 자동화로 해결한다' -%}
  {%- assign t_approach_3_b = 'Docker 이미지 누적으로 GCP 인스턴스가 다운되었을 때 `docker image prune` 단계를 워크플로우에 자동화. 스키마 충돌은 Flyway, 수동 배포는 GitHub Actions로 정리했습니다.' -%}
  {%- assign t_approach_4_h = '새 기술은 공식 문서로 깊게 학습한다' -%}
  {%- assign t_approach_4_b = 'Amazon Chime SDK / WebRTC는 영문 공식 문서를 읽으며 직접 적용했습니다. 강의를 따라 치는 것보다 이해 깊이와 응용력에서 차이가 컸습니다.' -%}
  {%- assign other_url = '/portfolio/en/' -%}
  {%- assign resume_url = '/resume/' -%}
{%- endif -%}

<div class="portfolio-page">
  <header class="portfolio-hero">
    <h1 class="portfolio-hero-title">{{ t_title }}</h1>
    <p class="portfolio-hero-intro">{{ t_intro }}</p>
    <div class="portfolio-hero-actions no-print">
      <a class="portfolio-pill" href="{{ site.baseurl }}{{ resume_url }}"><i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;{{ t_resume }}</a>
      <a class="portfolio-pill portfolio-pill-ghost" href="{{ site.baseurl }}{{ other_url }}"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;{{ t_switch }}</a>
    </div>
  </header>

  {%- if items.size > 0 %}
  <section class="portfolio-overview" aria-label="{{ t_overview }}">
    <p class="portfolio-overview-label">{{ t_overview }}</p>
    <dl class="portfolio-overview-grid">
      <div class="portfolio-overview-stat">
        <dt>{{ t_stat_count_label }}</dt>
        <dd><span class="portfolio-overview-num">{{ items.size }}</span></dd>
      </div>
      <div class="portfolio-overview-stat">
        <dt>{{ t_stat_stack_label }}</dt>
        <dd>{{ t_stat_stack_value }}</dd>
      </div>
      <div class="portfolio-overview-stat">
        <dt>{{ t_stat_focus_label }}</dt>
        <dd>{{ t_stat_focus_value }}</dd>
      </div>
    </dl>
  </section>

  <section class="portfolio-approach" aria-label="{{ t_approach }}">
    <p class="portfolio-approach-label">{{ t_approach }}</p>
    <ol>
      <li>
        <h3>{{ t_approach_1_h }}</h3>
        <p>{{ t_approach_1_b }}</p>
      </li>
      <li>
        <h3>{{ t_approach_2_h }}</h3>
        <p>{{ t_approach_2_b }}</p>
      </li>
      <li>
        <h3>{{ t_approach_3_h }}</h3>
        <p>{{ t_approach_3_b }}</p>
      </li>
      <li>
        <h3>{{ t_approach_4_h }}</h3>
        <p>{{ t_approach_4_b }}</p>
      </li>
    </ol>
  </section>

  <nav class="portfolio-toc no-print" aria-label="{{ t_index }}">
    <p class="portfolio-toc-label">{{ t_index }}</p>
    <ol>
      {%- for p in items %}
        {%- assign num = forloop.index | prepend: '00' | slice: -2, 2 -%}
        <li>
          <a href="#{{ p.slug }}">
            <span class="portfolio-toc-num">{{ num }}</span>
            <span class="portfolio-toc-title">{{ p.title }}</span>
            <span class="portfolio-toc-period">{{ p.period }}</span>
          </a>
        </li>
      {%- endfor %}
    </ol>
  </nav>

  <div class="portfolio-blocks">
    {%- for p in items %}
      {%- assign num = forloop.index | prepend: '00' | slice: -2, 2 -%}
      <article class="portfolio-block" id="{{ p.slug }}">
        <header class="portfolio-block-head">
          <p class="portfolio-block-num">{{ num }}</p>
          <p class="portfolio-block-meta">{{ p.period }}{% if p.role %} · {{ p.role }}{% endif %}</p>
          <h2 class="portfolio-block-title">{{ p.title }}</h2>
          {%- if p.summary %}<p class="portfolio-block-summary">{{ p.summary }}</p>{% endif -%}
          {%- if p.tags or p.links %}
          <div class="portfolio-block-tagrow">
            {%- if p.tags %}
              <ul class="portfolio-block-stack">
                {%- for t in p.tags %}<li>{{ t }}</li>{% endfor %}
              </ul>
            {%- endif %}
            {%- if p.links and p.links.size > 0 %}
              <ul class="portfolio-block-links no-print">
                {%- for link in p.links %}
                  {%- assign icon = 'fa-external-link' -%}
                  {%- assign href_low = link.href | downcase -%}
                  {%- if href_low contains 'github.com' %}{% assign icon = 'fa-github' %}{% endif -%}
                  <li><a href="{{ link.href }}" target="_blank" rel="noopener noreferrer"><i class="fa {{ icon }}" aria-hidden="true"></i>&nbsp;{{ link.label }}<span aria-hidden="true">&nbsp;↗</span></a></li>
                {%- endfor %}
              </ul>
            {%- endif %}
          </div>
          {%- endif %}
        </header>

        {%- if p.hero %}
        <figure class="portfolio-block-hero">
          <img src="{{ site.baseurl }}{{ p.hero }}" alt="{{ p.title }} {{ t_alt_preview }}">
        </figure>
        {%- endif %}

        <div class="portfolio-block-body markdown-style">
          {{ p.content }}
        </div>
      </article>
    {%- endfor %}
  </div>
  {%- else %}
  <p class="portfolio-empty">{{ t_empty }}</p>
  {%- endif %}
</div>
