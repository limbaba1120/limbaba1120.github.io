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
  {%- assign t_approach = 'About me' -%}
  {%- assign t_approach_1_h = 'Growing together' -%}
  {%- assign t_approach_1_b = 'I enjoy sharing what I learn and growing with others. I have shared knowledge through study groups and organized sessions for students interested in international programs.' -%}
  {%- assign t_approach_2_h = 'Taking on new challenges' -%}
  {%- assign t_approach_2_b = 'I actively learn new technologies and do not hesitate to take on unfamiliar problems. Through projects, I have experienced the full cycle from planning and development to testing, deployment, and operations.' -%}
  {%- assign t_approach_3_h = 'Communicating and collaborating' -%}
  {%- assign t_approach_3_b = 'I enjoy working with people from different backgrounds and try to bring open, positive energy to the team.' -%}
  {%- assign t_keywords = 'A few things about me' -%}
  {%- assign t_keyword_1 = 'I enjoy sports' -%}
  {%- assign t_keyword_2 = '4 software certifications' -%}
  {%- assign t_keyword_3 = '10+ years abroad' -%}
  {%- assign t_keyword_4 = 'OPIc IH' -%}
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
  {%- assign t_approach = '저는 이런 개발자입니다' -%}
  {%- assign t_approach_1_h = '배움을 나누며 함께 성장합니다' -%}
  {%- assign t_approach_1_b = '스터디를 통해 지식을 나누고 팀원들과 함께 성장하는 것을 좋아합니다. 해외 프로그램에 관심 있는 후배들을 위한 설명회를 열어 경험과 노하우를 공유했습니다.' -%}
  {%- assign t_approach_2_h = '새로운 기술과 과제에 주저하지 않습니다' -%}
  {%- assign t_approach_2_b = '새로운 기술을 적극적으로 익히고, 낯선 문제도 끝까지 해결하며 성장합니다. 여러 프로젝트에서 기획·개발·테스트·배포·운영의 전 과정을 경험했습니다.' -%}
  {%- assign t_approach_3_h = '다양한 사람들과 소통하고 협력합니다' -%}
  {%- assign t_approach_3_b = '서로 다른 배경을 가진 사람들과 협업하는 것을 좋아하며, 열린 태도와 긍정적인 에너지로 팀에 기여하려고 노력합니다.' -%}
  {%- assign t_keywords = '저를 설명하는 키워드' -%}
  {%- assign t_keyword_1 = '운동을 좋아함' -%}
  {%- assign t_keyword_2 = 'SW 관련 자격증 4개' -%}
  {%- assign t_keyword_3 = '해외 경험 10년 이상' -%}
  {%- assign t_keyword_4 = 'OPIc IH' -%}
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
    </ol>
    <div class="portfolio-keywords" aria-label="{{ t_keywords }}">
      <p class="portfolio-keywords-label">{{ t_keywords }}</p>
      <ul>
        <li><i class="fa fa-heartbeat" aria-hidden="true"></i><span>{{ t_keyword_1 }}</span></li>
        <li><i class="fa fa-certificate" aria-hidden="true"></i><span>{{ t_keyword_2 }}</span></li>
        <li><i class="fa fa-globe" aria-hidden="true"></i><span>{{ t_keyword_3 }}</span></li>
        <li><i class="fa fa-comments-o" aria-hidden="true"></i><span>{{ t_keyword_4 }}</span></li>
      </ul>
    </div>
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
          <img src="{{ site.baseurl }}{{ p.hero }}" alt="{{ p.title }} {{ t_alt_preview }}" loading="lazy" decoding="async">
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
