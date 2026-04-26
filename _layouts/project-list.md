---
layout: default
# Project list — single long-form page that inlines every entry from
# `_portfolio/` collection (filtered by page.lang). Each project block
# uses the existing markdown body so content stays in one place.
---
{%- assign lng = page.lang | default: 'ko' -%}
{%- assign items = site.portfolio | where: "lang", lng | sort: "date" | reverse -%}

{%- if lng == 'en' -%}
  {%- assign t_eyebrow = 'projects' -%}
  {%- assign t_title = 'Project' -%}
  {%- assign t_intro = 'Selected projects with deep-dive write-ups — what I built, why, and what I learned along the way.' -%}
  {%- assign t_resume = 'View resume →' -%}
  {%- assign t_switch = '한국어' -%}
  {%- assign t_index = 'Index' -%}
  {%- assign t_links = 'Links' -%}
  {%- assign t_empty = 'No project entries yet.' -%}
  {%- assign other_url = '/project/' -%}
  {%- assign resume_url = '/resume/en/' -%}
{%- else -%}
  {%- assign t_eyebrow = '개의 프로젝트' -%}
  {%- assign t_title = 'Project' -%}
  {%- assign t_intro = '실시간 통신·동시성·인프라 운영 등 직접 부딪치며 해결한 문제 중심으로 정리했습니다. 각 프로젝트별 배경 · 기여 · 트러블슈팅을 한 페이지에서 볼 수 있습니다.' -%}
  {%- assign t_resume = '이력서 보기 →' -%}
  {%- assign t_switch = 'English' -%}
  {%- assign t_index = '목차' -%}
  {%- assign t_links = '링크' -%}
  {%- assign t_empty = '등록된 프로젝트가 아직 없습니다.' -%}
  {%- assign other_url = '/project/en/' -%}
  {%- assign resume_url = '/resume/' -%}
{%- endif -%}

<div class="project-page">
  <header class="project-hero">
    <p class="project-hero-eyebrow">{% if lng == 'en' %}{{ items.size }} {{ t_eyebrow }}{% else %}{{ items.size }}{{ t_eyebrow }}{% endif %}</p>
    <h1 class="project-hero-title">{{ t_title }}</h1>
    <p class="project-hero-intro">{{ t_intro }}</p>
    <div class="project-hero-actions no-print">
      <a class="project-pill" href="{{ site.baseurl }}{{ resume_url }}"><i class="fa fa-file-text-o" aria-hidden="true"></i>&nbsp;{{ t_resume }}</a>
      <a class="project-pill project-pill-ghost" href="{{ site.baseurl }}{{ other_url }}"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;{{ t_switch }}</a>
    </div>
  </header>

  {%- if items.size > 0 %}
  <nav class="project-toc no-print" aria-label="{{ t_index }}">
    <p class="project-toc-label">{{ t_index }}</p>
    <ol>
      {%- for p in items %}
        {%- assign num = forloop.index | prepend: '00' | slice: -2, 2 -%}
        <li>
          <a href="#{{ p.slug }}">
            <span class="project-toc-num">{{ num }}</span>
            <span class="project-toc-title">{{ p.title }}</span>
            <span class="project-toc-period">{{ p.period }}</span>
          </a>
        </li>
      {%- endfor %}
    </ol>
  </nav>

  <div class="project-blocks">
    {%- for p in items %}
      {%- assign num = forloop.index | prepend: '00' | slice: -2, 2 -%}
      <article class="project-block" id="{{ p.slug }}">
        <header class="project-block-head">
          <p class="project-block-num">{{ num }}</p>
          <p class="project-block-meta">{{ p.period }}{% if p.role %} · {{ p.role }}{% endif %}</p>
          <h2 class="project-block-title">{{ p.title }}</h2>
          {%- if p.summary %}<p class="project-block-summary">{{ p.summary }}</p>{% endif -%}
          {%- if p.tags %}
            <ul class="project-block-stack">
              {%- for t in p.tags %}<li>{{ t }}</li>{% endfor %}
            </ul>
          {%- endif -%}
        </header>

        <div class="project-block-body markdown-style">
          {{ p.content }}
        </div>

        {%- if p.links and p.links.size > 0 %}
        <footer class="project-block-foot no-print">
          <p class="project-block-foot-label">{{ t_links }}</p>
          <ul>
            {%- for link in p.links %}
              <li><a href="{{ link.href }}" target="_blank" rel="noopener noreferrer"><i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;{{ link.label }}</a></li>
            {%- endfor %}
          </ul>
        </footer>
        {%- endif %}
      </article>
    {%- endfor %}
  </div>
  {%- else %}
  <p class="project-empty">{{ t_empty }}</p>
  {%- endif %}
</div>
