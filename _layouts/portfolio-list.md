---
layout: default
# Portfolio list page — shown in nav as "Portfolio".
---
{%- assign lng = page.lang | default: 'ko' -%}
{%- assign items = site.portfolio | where: "lang", lng | sort: "date" | reverse -%}

{%- if lng == 'en' -%}
  {%- assign t_title = 'Portfolio' -%}
  {%- assign t_intro = 'Selected projects with deep-dive write-ups — what I built, why, and what I learned.' -%}
  {%- assign t_count_label = 'projects' -%}
  {%- assign t_empty = 'No portfolio entries yet.' -%}
  {%- assign t_switch = '한국어' -%}
  {%- assign t_view = 'Read more →' -%}
  {%- assign other_url = '/portfolio/' -%}
{%- else -%}
  {%- assign t_title = 'Portfolio' -%}
  {%- assign t_intro = '주요 프로젝트의 상세 기록 — 무엇을 만들었고, 왜, 그리고 무엇을 배웠는지.' -%}
  {%- assign t_count_label = '개의 프로젝트' -%}
  {%- assign t_empty = '등록된 포트폴리오가 아직 없습니다.' -%}
  {%- assign t_switch = 'English' -%}
  {%- assign t_view = '자세히 보기 →' -%}
  {%- assign other_url = '/portfolio/en/' -%}
{%- endif -%}

<div class="portfolio-page">
  <header class="portfolio-hero">
    <div class="portfolio-hero-text">
      <p class="portfolio-eyebrow">{{ items.size }} {{ t_count_label }}</p>
      <h1 class="portfolio-hero-title">{{ t_title }}</h1>
      <p class="portfolio-hero-intro">{{ t_intro }}</p>
    </div>
    <div class="portfolio-hero-action no-print">
      <a class="resume-btn" href="{{ site.baseurl }}{{ other_url }}"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;{{ t_switch }}</a>
    </div>
  </header>

  {%- if items.size == 0 %}
    <p class="portfolio-empty">{{ t_empty }}</p>
  {%- else %}
    <ul class="portfolio-grid">
    {%- for p in items %}
      {%- assign accent = p.accent | default: '#1e3a5f' -%}
      <li class="portfolio-card" style="--card-accent: {{ accent }};">
        <a href="{{ site.baseurl }}{{ p.url }}">
          <div class="portfolio-card-head">
            {%- if p.icon %}<span class="portfolio-card-icon"><i class="fa fa-{{ p.icon }}" aria-hidden="true"></i></span>{% endif %}
            {%- if p.period %}<span class="portfolio-card-period">{{ p.period }}</span>{% endif %}
          </div>
          <h2 class="portfolio-card-title">{{ p.title }}</h2>
          {%- if p.role %}<p class="portfolio-card-role">{{ p.role }}</p>{% endif %}
          {%- if p.summary %}<p class="portfolio-card-summary">{{ p.summary }}</p>{% endif %}
          {%- if p.tags and p.tags.size > 0 %}
            <p class="portfolio-card-tags">
              {%- for tag in p.tags limit:5 %}<span class="resume-tag">{{ tag }}</span>{% endfor -%}
              {%- if p.tags.size > 5 %}<span class="resume-tag resume-tag-more">+{{ p.tags.size | minus: 5 }}</span>{% endif -%}
            </p>
          {% endif -%}
          <span class="portfolio-card-link">{{ t_view }}</span>
        </a>
      </li>
    {%- endfor %}
    </ul>
  {%- endif %}
</div>
