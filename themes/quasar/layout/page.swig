<div id="content-wrap">
  <div id="content" class="wrapper">
    <div id="content-inner">
      <article class="article-container" itemscope itemtype="http://schema.org/Article">
        <div class="article-inner">
          <div class="article">
            <div class="inner">
              <header class="article-header">
                <h1 class="article-title" itemprop="name">{{ page.title }}</h1>
                <a href="{{ edit_page_link(page.source) }}" class="article-edit-link" title="Improve Page"><i class="fa fa-pencil"></i></a>
              </header>
              <div class="article-content" itemprop="articleBody" data-swiftype-index="true">
                {{ page_anchor(page.content) }}
                <br>
                <i class="fa fa-pencil"></i> <a href="{{ edit_page_link(page.source) }}" title="Improve Page">Caught a mistake or want to contribute to the documentation?</a>
              </div>
              <footer class="article-footer">
                <time class="article-footer-updated" datetime="{{ date_xml(page.updated) }}" itemprop="dateModified">Last update: {{ date(page.updated) }}</time>
                {{ page_nav() }}
              </footer>
            </div>
          </div>
          <aside id="article-toc" role="navigation">
            <div id="article-toc-inner">
              <strong class="sidebar-title">Page Contents</strong>
              {{ toc(page.content, {list_number: false}) }}
              <a href="#" id="article-toc-top">Back to Top</a>
            </div>
          </aside>
        </div>
      </article>
      {{ partial('partial/sidebar') }}
    </div>
  </div>
</div>
