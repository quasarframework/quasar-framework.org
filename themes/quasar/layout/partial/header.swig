<header id="header" class="wrapper">
  <div id="header-inner" class="inner">
    <h1 id="logo-wrap">
      <a href="/" id="logo">Quasar</a>
    </h1>
    <nav id="main-nav">
      <ul>
        {{ header_menu('main-nav') }}
        <li class="main-nav-item">
          <a href="https://github.com/{{ config.github }}" class="main-nav-link"><i class="fa fa-github-alt"></i></a>
        </li>
      </ul>
    </nav>
    <a id="mobile-nav-toggle">
      <span class="mobile-nav-toggle-bar"></span>
      <span class="mobile-nav-toggle-bar"></span>
      <span class="mobile-nav-toggle-bar"></span>
    </a>
    <a id="mobile-search-btn" class="st-search-launcher"></a>
  </div>
</header>
