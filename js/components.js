// components.js
document.addEventListener('DOMContentLoaded', () => {

  // === Top Notification Bar ===
// === Top Notification Bar ===
const topBar = `
  <div class="top-bar text-white">
    <div class="container-fluid">
      <div class="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center text-center text-md-start">
        <p class="promo-text mb-0 py-2 px-3">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
          <a href="#" class="text-decoration-underline text-white fw-semibold ms-1">Shop Now</a>
        </p>
        <div class="language-selector d-none d-md-flex align-items-center me-3">
          <span class="small">English</span>
          <i class="fa-solid fa-chevron-down small ms-1"></i>
        </div>
      </div>
    </div>
  </div>`;
  // === Main Header ===
  const header = `
  <nav class="navbar navbar-expand-lg bg-white shadow-sm">
    <div class="container py-2">
      <a class="navbar-brand fw-bold fs-4 text-dark" href="index.html">Exclusive</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link fw-medium text-dark" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link fw-medium text-dark" href="contact.html">Contact</a></li>
          <li class="nav-item"><a class="nav-link fw-medium text-dark" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link fw-medium text-dark" href="sign-in.html">Sign Up</a></li>
        </ul>

        <div class="d-flex align-items-center gap-3">
          <div class="input-group input-group-sm search-box">
            <input type="text" class="form-control border-end-0" placeholder="What are you looking for?" aria-label="Search">
            <button class="btn border-start-0 bg-white"><i class="fa-solid fa-magnifying-glass text-muted"></i></button>
          </div>

          <a href="wishlist.html" class="text-muted position-relative">
            <i class="fa-regular fa-heart fa-lg"></i>
            <span class="badge bg-danger rounded-pill wishlist-count position-absolute top-0 start-100 translate-middle">0</span>
          </a>

          <a href="cart.html" class="text-muted position-relative">
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
            <span class="badge bg-danger rounded-pill cart-count position-absolute top-0 start-100 translate-middle">0</span>
          </a>

          <a href="account.html" class="text-muted">
            <i class="fa-regular fa-user fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>`;

  // === Footer placeholder (we’ll update later) ===
  const footer = `
  <footer class="py-4 bg-light text-center small text-muted mt-5">
    © ${new Date().getFullYear()} Exclusive. All rights reserved.
  </footer>`;

  // === Inject everything ===
  document.getElementById('site-header').innerHTML = topBar + header;
  document.getElementById('site-footer').innerHTML = footer;

  // === Toast container ===
  if (!document.getElementById('toast-inline')) {
    const toastDiv = document.createElement('div');
    toastDiv.id = 'toast-inline';
    toastDiv.className = 'toast-inline';
    document.body.appendChild(toastDiv);
  }
});
