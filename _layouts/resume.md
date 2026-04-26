---
layout: default
# Resume layout — renders from _data/resume/<lang>.yml using page.lang
---
{%- assign lng = page.lang | default: 'ko' -%}
{%- assign r = site.data.resume[lng] -%}

{%- comment -%} Inline label dictionary (no parse_json — github-pages gem uses Jekyll 3.x). {%- endcomment -%}
{%- if lng == 'en' -%}
  {%- assign t_experience = 'Experience' -%}
  {%- assign t_projects = 'Projects' -%}
  {%- assign t_education = 'Education' -%}
  {%- assign t_skills = 'Skills' -%}
  {%- assign t_certifications = 'Certifications' -%}
  {%- assign t_languages = 'Languages' -%}
  {%- assign t_print = 'Save as PDF' -%}
  {%- assign t_switch = '한국어' -%}
  {%- assign t_portfolio_link = 'View details →' -%}
  {%- assign other_url = '/resume/' -%}
{%- else -%}
  {%- assign t_experience = '경력' -%}
  {%- assign t_projects = '주요 프로젝트' -%}
  {%- assign t_education = '학력' -%}
  {%- assign t_skills = '기술' -%}
  {%- assign t_certifications = '자격증' -%}
  {%- assign t_languages = '언어' -%}
  {%- assign t_print = 'PDF로 저장' -%}
  {%- assign t_switch = 'English' -%}
  {%- assign t_portfolio_link = '상세 보기 →' -%}
  {%- assign other_url = '/resume/en/' -%}
{%- endif -%}

<div class="resume-actions no-print">
  <button type="button" class="resume-btn resume-btn-primary" onclick="window.print()"><i class="fa fa-download" aria-hidden="true"></i>&nbsp;{{ t_print }}</button>
  <a class="resume-btn" href="{{ site.baseurl }}{{ other_url }}"><i class="fa fa-globe" aria-hidden="true"></i>&nbsp;{{ t_switch }}</a>
</div>

<article class="page-a4 resume" lang="{{ lng }}">
  <header class="resume-header">
    <div class="resume-header-text">
      <h1 class="resume-name">{{ r.profile.name }}</h1>
      {%- if r.profile.title %}<p class="resume-title">{{ r.profile.title }}</p>{% endif %}
      {%- if r.profile.summary %}<p class="resume-summary">{{ r.profile.summary | newline_to_br }}</p>{% endif %}
      <ul class="resume-contact">
        {%- if r.profile.contact.email %}<li><i class="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:{{ r.profile.contact.email }}">{{ r.profile.contact.email }}</a></li>{% endif %}
        {%- if r.profile.contact.phone %}<li><i class="fa fa-phone" aria-hidden="true"></i> {{ r.profile.contact.phone }}</li>{% endif %}
        {%- if r.profile.contact.github %}<li><i class="fa fa-github" aria-hidden="true"></i> <a href="{{ r.profile.contact.github }}">{{ r.profile.contact.github | remove: 'https://' }}</a></li>{% endif %}
        {%- if r.profile.contact.linkedin %}<li><i class="fa fa-linkedin" aria-hidden="true"></i> <a href="{{ r.profile.contact.linkedin }}">LinkedIn</a></li>{% endif %}
        {%- if r.profile.contact.blog %}<li><i class="fa fa-globe" aria-hidden="true"></i> <a href="{{ r.profile.contact.blog }}">{{ r.profile.contact.blog | remove: 'https://' }}</a></li>{% endif %}
      </ul>
    </div>
    {%- if r.profile.photo %}
    <div class="resume-header-photo">
      <img src="{{ site.baseurl }}{{ r.profile.photo }}" alt="{{ r.profile.name }}">
    </div>
    {% endif -%}
  </header>

  {%- if r.experience and r.experience.size > 0 %}
  <section class="resume-section">
    <h2 class="resume-section-title">{{ t_experience }}</h2>
    {% for job in r.experience %}
      <div class="resume-item">
        <div class="resume-item-head">
          <strong>{{ job.company }}</strong>
          <span class="resume-item-meta">{{ job.period }}{% if job.location %} · {{ job.location }}{% endif %}</span>
        </div>
        <p class="resume-item-sub">{{ job.role }}</p>
        {% if job.bullets and job.bullets.size > 0 %}
        <ul class="resume-bullets">
          {% for b in job.bullets %}<li>{{ b }}</li>{% endfor %}
        </ul>
        {% endif %}
      </div>
    {% endfor %}
  </section>
  {% endif -%}

  {%- if r.projects and r.projects.size > 0 %}
  <section class="resume-section">
    <h2 class="resume-section-title">{{ t_projects }}</h2>
    <ul class="resume-projects">
      {% for p in r.projects %}
        <li class="resume-project-card">
          <div class="resume-item-head">
            <strong>{{ p.name }}</strong>
            {% if p.period %}<span class="resume-item-meta">{{ p.period }}</span>{% endif %}
          </div>
          {% if p.role %}<p class="resume-item-sub">{{ p.role }}</p>{% endif %}
          {% if p.one_liner %}<p class="resume-project-desc">{{ p.one_liner }}</p>{% endif %}
          {% if p.tags and p.tags.size > 0 %}<p class="resume-tags">{% for tag in p.tags %}<span class="resume-tag">{{ tag }}</span>{% endfor %}</p>{% endif %}
          {% if p.slug %}{%- assign portfolio_url = '/portfolio/' | append: p.slug | append: '/' -%}{% if lng == 'en' %}{%- assign portfolio_url = portfolio_url | append: 'en/' -%}{% endif %}<a class="resume-portfolio-link no-print" href="{{ site.baseurl }}{{ portfolio_url }}">{{ t_portfolio_link }}</a>{% endif %}
        </li>
      {% endfor %}
    </ul>
  </section>
  {% endif -%}

  {%- if r.education and r.education.size > 0 %}
  <section class="resume-section">
    <h2 class="resume-section-title">{{ t_education }}</h2>
    {% for e in r.education %}
      <div class="resume-item">
        <div class="resume-item-head">
          <strong>{{ e.school }}</strong>
          <span class="resume-item-meta">{{ e.period }}</span>
        </div>
        {% if e.degree %}<p class="resume-item-sub">{{ e.degree }}</p>{% endif %}
        {% if e.notes %}<p class="resume-notes">{{ e.notes }}</p>{% endif %}
      </div>
    {% endfor %}
  </section>
  {% endif -%}

  {%- if r.skills %}
  <section class="resume-section">
    <h2 class="resume-section-title">{{ t_skills }}</h2>
    <dl class="resume-skills">
      {% for pair in r.skills %}
        <dt>{{ pair[0] }}</dt>
        <dd>
          {% for skill in pair[1] %}<span class="resume-tag">{{ skill }}</span>{% endfor %}
        </dd>
      {% endfor %}
    </dl>
  </section>
  {% endif -%}

  {%- if r.certifications and r.certifications.size > 0 %}
  <section class="resume-section">
    <h2 class="resume-section-title">{{ t_certifications }}</h2>
    <ul class="resume-cert-list">
      {% for c in r.certifications %}
        <li>
          <strong>{{ c.name }}</strong>
          <span class="resume-cert-issuer">{{ c.issuer }}</span>
          <span class="resume-item-meta">{{ c.date }}</span>
        </li>
      {% endfor %}
    </ul>
  </section>
  {% endif -%}

  {%- if r.languages and r.languages.size > 0 %}
  <section class="resume-section">
    <h2 class="resume-section-title">{{ t_languages }}</h2>
    <ul class="resume-language-list">
      {% for l in r.languages %}<li><strong>{{ l.name }}</strong> <span>{{ l.level }}</span></li>{% endfor %}
    </ul>
  </section>
  {% endif -%}
</article>
