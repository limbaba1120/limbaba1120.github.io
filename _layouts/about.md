---
layout: default
# About page — typography-led layout that mirrors the blog post / portfolio
# reading rhythm (Pretendard, 760px width). Profile photo and contact are
# rendered up top from `_data/owner/<lng>.yml` (theme convention) but the
# body itself just flows like a focused post.
---
{%- include multi_lng/get-lng-by-url.liquid -%}
{%- assign lng = get_lng -%}
{%- assign owner = site.data.owner[lng] -%}
{%- assign photo = page.img | default: '/assets/img/default/profile.JPG' -%}

<article class="about-page">
  <header class="about-page-head">
    {%- if photo %}
    <div class="about-page-photo">
      <img src="{{ site.baseurl }}{{ photo }}" alt="{{ owner.brand }}">
    </div>
    {% endif -%}
    <div class="about-page-headline">
      <p class="about-page-eyebrow">About</p>
      <h1 class="about-page-name" translate="no">{{ owner.brand }}</h1>
    </div>
  </header>

  <div class="about-page-body markdown-style">
    {{ content }}
  </div>
</article>
