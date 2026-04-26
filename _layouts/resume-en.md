---
# English resume layout — chains to `resume` so it shares all rendering
# logic, but has a different layout key so it does NOT show up in the
# theme's nav (which filters pages by `layout == button_key`).
layout: resume
---
{{ content }}
