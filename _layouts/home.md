---
# Home page chains to the About layout so the home content renders as a
# typography-led about page (photo + name + role + body), while keeping
# the `layout: home` key on index.md so the side-nav Home button still
# matches via theme's `where: layout == button_key` filter.
layout: about
---
{{ content }}
