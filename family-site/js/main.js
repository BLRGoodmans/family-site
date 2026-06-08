// =============================================
//  SHARED COMPONENTS — nav, footer, lightbox
// =============================================

// ——— NAV HTML (call buildNav(root) with relative path to root) ———
function buildNav(root = '') {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <a href="${root}index.html" class="nav-brand">🌳 <span>Our</span> Family</a>
    <button class="nav-toggle" aria-label="Menu" onclick="this.nextElementSibling.classList.toggle('open')">☰</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="${root}index.html">Home</a></li>
      <li class="dropdown">
        <button>Generations ▾</button>
        <div class="dropdown-menu">
          <div class="dropdown-section">Founders</div>
          <a href="${root}great-grandparents.html">Great Grandparents</a>
          <a href="${root}grandparents.html">Grandparents</a>
          <div class="dropdown-section">Generation 3</div>
          <a href="${root}generation-3/child-1.html">Child 1 Family</a>
          <a href="${root}generation-3/child-2.html">Child 2 Family</a>
          <a href="${root}generation-3/child-3.html">Child 3 Family</a>
          <a href="${root}generation-3/child-4.html">Child 4 Family</a>
          <a href="${root}generation-3/child-5.html">Child 5 Family</a>
          <a href="${root}generation-3/child-6.html">Child 6 Family</a>
          <a href="${root}generation-3/child-7.html">Child 7 Family</a>
          <a href="${root}generation-3/child-8.html">Child 8 Family</a>
          <a href="${root}generation-3/spinster.html">Single Child</a>
          <div class="dropdown-section">Generation 4</div>
          <a href="${root}generation-4/index.html">All Grandchildren →</a>
        </div>
      </li>
      <li><a href="${root}family-tree.html">Family Tree</a></li>
      <li><a href="${root}gallery.html">Gallery</a></li>
      <li><a href="${root}timeline.html">Timeline</a></li>
      <li><a href="${root}contribute.html">Contribute</a></li>
    </ul>
  `;
  document.body.prepend(nav);
}

// ——— FOOTER ———
function buildFooter(root = '') {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-brand">🌳 Our Family Heritage</div>
    <p style="font-size:0.875rem;margin:0 auto;max-width:400px;">
      Four generations of love, laughter and memories — preserved for those who come next.
    </p>
    <ul class="footer-links">
      <li><a href="${root}index.html">Home</a></li>
      <li><a href="${root}family-tree.html">Family Tree</a></li>
      <li><a href="${root}gallery.html">Gallery</a></li>
      <li><a href="${root}timeline.html">Timeline</a></li>
      <li><a href="${root}contribute.html">Contribute</a></li>
    </ul>
    <p class="footer-copy">Built with love · All rights reserved · Family use only</p>
  `;
  document.body.appendChild(footer);
}

// ——— LIGHTBOX ———
function initLightbox() {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.style.cssText = `
    display:none;position:fixed;inset:0;z-index:9999;
    background:rgba(0,0,0,0.88);
    display:none;align-items:center;justify-content:center;
    padding:2rem;cursor:pointer;
  `;
  overlay.innerHTML = `
    <button onclick="closeLightbox()" style="position:absolute;top:1.5rem;right:1.5rem;
      background:rgba(255,255,255,0.15);border:none;color:white;
      font-size:1.5rem;width:44px;height:44px;border-radius:50%;cursor:pointer;">✕</button>
    <img id="lightboxImg" src="" alt="" style="max-width:90vw;max-height:85vh;
      border-radius:12px;box-shadow:0 24px 80px rgba(0,0,0,0.6);">
    <p id="lightboxCaption" style="position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);
      color:white;font-size:0.9rem;text-align:center;max-width:500px;"></p>
  `;
  document.body.appendChild(overlay);

  document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
    item.addEventListener('click', () => {
      overlay.style.display = 'flex';
      document.getElementById('lightboxImg').src = item.dataset.src;
      document.getElementById('lightboxCaption').textContent = item.dataset.caption || '';
    });
  });
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// ——— TABS ———
function initTabs() {
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });
}

// ——— GALLERY FILTER ———
function initGalleryFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.gen === filter || item.dataset.family === filter)
          ? 'block' : 'none';
      });
    });
  });
}
