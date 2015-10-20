<!-- Scripts -->
<!-- build:js build/js/main.js -->
{{ js('js/toc') }}
{{ js('js/mobile_nav') }}
<!-- endbuild -->
<script src="//cdn.jsdelivr.net/retinajs/1.1.0/retina.min.js" async></script>
{% if page.layout === 'plugins' %}
<!-- build:js build/js/plugins.js -->
{{ js('js/plugins') }}
<!-- endbuild -->
{% endif %}
