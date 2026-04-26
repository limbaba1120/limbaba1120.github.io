---
layout: default
# Portfolio detail page (used by collection items in `_portfolio/`).
# Direct URL like /portfolio/<slug>/ — the main UX lives at /portfolio/.
---
{%- assign lng = page.lang | default: 'ko' -%}

{%- if lng == 'en' -%}
  {%- assign t_back = '← Back to portfolio' -%}
  {%- assign back_url = '/portfolio/en/' -%}
{%- else -%}
  {%- assign t_back = '← 포트폴리오로' -%}
  {%- assign back_url = '/portfolio/' -%}
{%- endif -%}

<article class="portfolio-detail">
  <p class="portfolio-detail-back no-print">
    <a href="{{ site.baseurl }}{{ back_url }}#{{ page.slug }}">{{ t_back }}</a>
  </p>

  <header class="portfolio-detail-head">
    <p class="portfolio-detail-meta">{{ page.period }}{% if page.role %} · {{ page.role }}{% endif %}</p>
    <h1 class="portfolio-detail-title">{{ page.title }}</h1>
    {%- if page.summary %}<p class="portfolio-detail-summary">{{ page.summary }}</p>{% endif %}
    {%- if page.tags or page.links %}
    <div class="portfolio-block-tagrow">
      {%- if page.tags %}
        <ul class="portfolio-block-stack">
          {%- for t in page.tags %}<li>{{ t }}</li>{% endfor %}
        </ul>
      {%- endif %}
      {%- if page.links and page.links.size > 0 %}
        <ul class="portfolio-block-links no-print">
          {%- for link in page.links %}
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

  {%- if page.hero %}
  <figure class="portfolio-block-hero">
    <img src="{{ site.baseurl }}{{ page.hero }}" alt="{{ page.title }} 미리보기">
  </figure>
  {%- endif %}

  <div class="portfolio-block-body markdown-style">
    {{ content }}
  </div>
</article>
