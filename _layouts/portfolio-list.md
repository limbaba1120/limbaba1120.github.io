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
  {%- assign t_intro = 'Backend projects spanning real-time communication, concurrency control, and deployment automation. Explore my contributions and the problems I solved.' -%}
  {%- assign t_alt_preview = 'preview' -%}
  {%- assign t_print = 'Save as PDF' -%}
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
  {%- assign t_approach_1_h = 'I enjoy sharing what I learn and growing together!' -%}
  {%- assign t_approach_1_b = 'I share knowledge through study groups and strive to grow together with my teammates. I also held information sessions for students interested in international programs, sharing my experience and know-how.' -%}
  {%- assign t_approach_2_h = 'I actively learn new technologies and do not hesitate to try!' -%}
  {%- assign t_approach_2_b = 'I feel a strong sense of achievement when solving challenging tasks, and I keep taking on challenges without fear of failure. Through various projects, I gained experience in planning, development, testing, deployment, and operations.' -%}
  {%- assign t_approach_3_h = 'I enjoy communicating and collaborating with diverse people!' -%}
  {%- assign t_approach_3_b = 'With an outgoing and positive personality, I strive to keep the team atmosphere energetic.' -%}
  {%- assign t_keywords = 'A few things about me' -%}
  {%- assign t_keyword_1 = 'I enjoy sports' -%}
  {%- assign t_keyword_2 = 'Software qualifications & skills' -%}
  {%- assign t_keyword_3 = '10+ years abroad' -%}
  {%- assign other_url = '/portfolio/' -%}
  {%- assign resume_url = '/resume/en/' -%}
{%- else -%}
  {%- assign t_eyebrow = '포트폴리오' -%}
  {%- assign t_title = 'Portfolio' -%}
  {%- assign t_intro = '실시간 통신, 동시성 제어, 배포 자동화를 구현한 백엔드 프로젝트입니다. 서비스별 담당 기능과 문제 해결 과정을 정리했습니다.' -%}
  {%- assign t_alt_preview = '미리보기' -%}
  {%- assign t_print = 'PDF로 저장' -%}
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
  {%- assign t_approach_1_h = '배움을 나누고 함께 성장하는 것을 좋아합니다!' -%}
  {%- assign t_approach_1_b = '스터디에서 배운 내용을 공유하고, 해외 프로그램에 관심 있는 후배들을 위한 설명회를 열어 준비 과정과 현지 경험을 전달했습니다.' -%}
  {%- assign t_approach_2_h = '새로운 것을 배우는 데 주저하지 않습니다!' -%}
  {%- assign t_approach_2_b = '프로젝트를 하면서 필요한 기술을 익히고, 기획부터 개발·테스트·배포·운영까지 경험했습니다. 잘 모르는 부분도 직접 해보면서 배우려고 합니다.' -%}
  {%- assign t_approach_3_h = '사람들과 의견을 나누고 함께 만들어가는 것을 좋아합니다!' -%}
  {%- assign t_approach_3_b = '팀원들과 생각을 나누고, 서로의 아이디어를 더해가는 과정이 좋습니다. 편하게 의견을 주고받을 수 있도록 먼저 다가가고 대화하려고 합니다.' -%}
  {%- assign t_keywords = '저를 설명하는 키워드' -%}
  {%- assign t_keyword_1 = '운동을 좋아함' -%}
  {%- assign t_keyword_2 = 'SW 자격·역량' -%}
  {%- assign t_keyword_3 = '해외 경험 10년 이상' -%}
  {%- assign other_url = '/portfolio/en/' -%}
  {%- assign resume_url = '/resume/' -%}
{%- endif -%}

<div class="portfolio-page">
  <header class="portfolio-hero">
    <div class="portfolio-hero-heading">
      <p class="portfolio-eyebrow">BACKEND DEVELOPER · {{ site.data.resume[lng].profile.name }}</p>
      <h1 class="portfolio-hero-title">{{ t_title }}</h1>
    </div>
    {% include portfolio-profile.html %}
    <div class="portfolio-hero-actions no-print">
      <button type="button" class="portfolio-pill" onclick="window.print()"><i class="fa fa-print" aria-hidden="true"></i>&nbsp;{{ t_print }}</button>
      <a class="portfolio-pill" href="{{ site.baseurl }}{{ resume_url }}"><i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;{{ t_resume }}</a>
      <a class="portfolio-pill portfolio-pill-ghost" href="{{ site.baseurl }}{{ other_url }}"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;{{ t_switch }}</a>
    </div>
  </header>

  {%- if items.size > 0 %}
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
        <li><i class="fa fa-heartbeat" aria-hidden="true"></i><span>{{ t_keyword_1 }}</span><small class="cert-detail">{% if lng == "en" %}Football · Basketball · Baseball{% else %}축구 · 농구 · 야구{% endif %}</small></li>
        <li><i class="fa fa-certificate" aria-hidden="true"></i><span>{{ t_keyword_2 }}</span><small class="cert-detail">{% if lng == "en" %}Engineer Information Processing · SQLD{% else %}정보처리기사 · SQLD{% endif %}<br>CSTS FL · TOPCIT Level 3</small></li>
        <li><i class="fa fa-globe" aria-hidden="true"></i><span>{{ t_keyword_3 }}</span><small class="cert-detail">{% if lng == "en" %}Poland · Netherlands{% else %}폴란드 · 네덜란드{% endif %}</small></li>
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
            <span class="portfolio-toc-title">{{ p.title }}<small>{{ p.summary }}</small></span>
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
          <p class="portfolio-block-meta"><span>{{ p.period }}</span>{% if p.role %}<span>{{ p.role }}</span>{% endif %}</p>
          <h2 class="portfolio-block-title">{{ p.title }}</h2>
          {%- if p.tags or p.links %}
          <div class="portfolio-block-tagrow">
            {%- if p.tags %}
              <ul class="portfolio-block-stack">
                {%- for t in p.tags %}<li>{{ t }}</li>{% endfor %}
              </ul>
            {%- endif %}
            {%- if p.links and p.links.size > 0 %}
              <ul class="portfolio-block-links">
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
