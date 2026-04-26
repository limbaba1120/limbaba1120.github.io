---
layout: default
# Portfolio detail page (used by collection items in `_portfolio/`).
---
{%- assign lng = page.lang | default: 'ko' -%}
{%- assign accent = page.accent | default: '#1e3a5f' -%}

{%- if lng == 'en' -%}
  {%- assign t_back = '← Back to portfolio' -%}
  {%- assign t_period = 'Period' -%}
  {%- assign t_role = 'Role' -%}
  {%- assign t_stack = 'Stack' -%}
  {%- assign t_links = 'Links' -%}
  {%- assign back_url = '/portfolio/en/' -%}
{%- else -%}
  {%- assign t_back = '← 포트폴리오로' -%}
  {%- assign t_period = '기간' -%}
  {%- assign t_role = '역할' -%}
  {%- assign t_stack = '기술 스택' -%}
  {%- assign t_links = '링크' -%}
  {%- assign back_url = '/portfolio/' -%}
{%- endif -%}

<article class="portfolio-detail" style="--page-accent: {{ accent }};">

  <p class="portfolio-back no-print">
    <a href="{{ site.baseurl }}{{ back_url }}">{{ t_back }}</a>
  </p>

  <header class="portfolio-detail-hero">
    {%- if page.icon %}
    <div class="portfolio-detail-icon"><i class="fa fa-{{ page.icon }}" aria-hidden="true"></i></div>
    {% endif -%}
    <h1 class="portfolio-detail-title">{{ page.title }}</h1>
    {%- if page.summary %}<p class="portfolio-detail-summary">{{ page.summary }}</p>{% endif %}
  </header>

  <div class="portfolio-detail-meta">
    {%- if page.period %}
    <div class="portfolio-meta-item">
      <span class="portfolio-meta-label"><i class="fa fa-calendar" aria-hidden="true"></i> {{ t_period }}</span>
      <span class="portfolio-meta-value">{{ page.period }}</span>
    </div>
    {% endif -%}
    {%- if page.role %}
    <div class="portfolio-meta-item">
      <span class="portfolio-meta-label"><i class="fa fa-users" aria-hidden="true"></i> {{ t_role }}</span>
      <span class="portfolio-meta-value">{{ page.role }}</span>
    </div>
    {% endif -%}
    {%- if page.links and page.links.size > 0 %}
    <div class="portfolio-meta-item portfolio-meta-links">
      <span class="portfolio-meta-label"><i class="fa fa-external-link" aria-hidden="true"></i> {{ t_links }}</span>
      <span class="portfolio-meta-value">
        {%- for l in page.links %}
          <a href="{{ l.href }}" target="_blank" rel="noopener">{{ l.label }}</a>{% unless forloop.last %} · {% endunless %}
        {% endfor -%}
      </span>
    </div>
    {% endif -%}
  </div>

  {%- if page.tags and page.tags.size > 0 %}
  <div class="portfolio-detail-tags">
    <span class="portfolio-meta-label"><i class="fa fa-code" aria-hidden="true"></i> {{ t_stack }}</span>
    <div class="portfolio-tags-row">
      {% for tag in page.tags %}<span class="resume-tag">{{ tag }}</span>{% endfor %}
    </div>
  </div>
  {% endif -%}

  {%- if page.thumbnail %}
  <p class="portfolio-thumb"><img src="{{ site.baseurl }}{{ page.thumbnail }}" alt="{{ page.title }}"></p>
  {% endif -%}

  <div class="portfolio-body markdown-style">
    {{ content }}
  </div>

</article>
