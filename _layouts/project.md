---
layout: default
# Project detail page (used by collection items in `_portfolio/`).
# Direct URL like /project/<slug>/ — the main UX lives at /project/.
---
{%- assign lng = page.lang | default: 'ko' -%}

{%- if lng == 'en' -%}
  {%- assign t_back = '← Back to projects' -%}
  {%- assign t_links = 'Links' -%}
  {%- assign back_url = '/project/en/' -%}
{%- else -%}
  {%- assign t_back = '← 프로젝트 목록으로' -%}
  {%- assign t_links = '링크' -%}
  {%- assign back_url = '/project/' -%}
{%- endif -%}

<article class="project-detail">
  <p class="project-detail-back no-print">
    <a href="{{ site.baseurl }}{{ back_url }}#{{ page.slug }}">{{ t_back }}</a>
  </p>

  <header class="project-detail-head">
    <p class="project-detail-meta">{{ page.period }}{% if page.role %} · {{ page.role }}{% endif %}</p>
    <h1 class="project-detail-title">{{ page.title }}</h1>
    {%- if page.summary %}<p class="project-detail-summary">{{ page.summary }}</p>{% endif %}
    {%- if page.tags %}
      <ul class="project-block-stack">
        {%- for t in page.tags %}<li>{{ t }}</li>{% endfor %}
      </ul>
    {%- endif -%}
  </header>

  <div class="project-block-body markdown-style">
    {{ content }}
  </div>

  {%- if page.links and page.links.size > 0 %}
  <footer class="project-detail-foot no-print">
    <p class="project-block-foot-label">{{ t_links }}</p>
    <ul>
      {%- for link in page.links %}
        <li><a href="{{ link.href }}" target="_blank" rel="noopener noreferrer"><i class="fa fa-external-link" aria-hidden="true"></i>&nbsp;{{ link.label }}</a></li>
      {%- endfor %}
    </ul>
  </footer>
  {%- endif %}
</article>
