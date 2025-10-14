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
<!-- HEADER RIGHT ICONS -->
<div class="header-icons d-flex align-items-center gap-3">

  <!-- Wishlist -->
  <a href="wishlist.html" class="text-dark position-relative">
    <i class="fa-regular fa-heart fs-5"></i>
  </a>

  <!-- Cart -->
  <a href="cart.html" class="text-dark position-relative">
    <i class="fa-solid fa-cart-shopping fs-5"></i>
    <span class="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
  </a>

  <!-- Profile Dropdown -->
  <div class="dropdown profile-dropdown">
    <a href="#" class="text-dark dropdown-toggle d-flex align-items-center" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="fa-regular fa-user fs-5"></i>
    </a>

    <ul class="dropdown-menu dropdown-menu-end shadow border-0 rounded-3 p-2" aria-labelledby="profileDropdown">
      <li><a class="dropdown-item d-flex align-items-center gap-2" href="account.html">
        <i class="fa-regular fa-user"></i> Manage Account
      </a></li>
      <li><a class="dropdown-item d-flex align-items-center gap-2" href="account.html">
        <i class="fa-solid fa-box"></i> My Orders
      </a></li>
      <li><a class="dropdown-item d-flex align-items-center gap-2" href="account.html">
        <i class="fa-solid fa-ban"></i> My Cancellations
      </a></li>
      <li><a class="dropdown-item d-flex align-items-center gap-2" href="account.html">
        <i class="fa-regular fa-star"></i> My Reviews
      </a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item d-flex align-items-center gap-2 text-danger" href="account.html">
        <i class="fa-solid fa-right-from-bracket"></i> Logout
      </a></li>
    </ul>
  </div>

</div>
        </div>
      </div>
    </div>
  </nav>`;

  // === Footer placeholder (we’ll update later) ===
  const footer = `
  <!-- ===== FOOTER ===== -->
<footer class="footer bg-dark text-white pt-5 pb-3 mt-5">
  <div class="container">
    <div class="row gy-4">
      
      <!-- Exclusive / Subscribe -->
      <div class="col-12 col-md-6 col-lg-3">
        <h5 class="fw-bold mb-3">Exclusive</h5>
        <h6 class="fw-semibold mb-2">Subscribe</h6>
        <p class="small text-light mb-3">Get 10% off your first order</p>
        <form class="d-flex subscribe-form">
          <input type="email" class="form-control bg-transparent border-light text-white" placeholder="Enter your email" required>
          <button type="submit" class="btn btn-light ms-2">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>

      <!-- Support -->
      <div class="col-12 col-md-6 col-lg-3">
        <h5 class="fw-bold mb-3">Support</h5>
        <p class="small mb-1">111 Bijoy Sarani, Dhaka,<br>DH 1515, Bangladesh.</p>
        <p class="small mb-1">exclusive@gmail.com</p>
        <p class="small mb-0">+88015-88888-9999</p>
      </div>

      <!-- Account -->
      <div class="col-6 col-md-4 col-lg-2">
        <h5 class="fw-bold mb-3">Account</h5>
        <ul class="list-unstyled footer-links">
          <li><a href="account.html">My Account</a></li>
          <li><a href="login.html">Login / Register</a></li>
          <li><a href="cart.html">Cart</a></li>
          <li><a href="wishlist.html">Wishlist</a></li>
          <li><a href="shop.html">Shop</a></li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div class="col-6 col-md-4 col-lg-2">
        <h5 class="fw-bold mb-3">Quick Link</h5>
        <ul class="list-unstyled footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>

      <!-- Download App -->
      <div class="col-12 col-md-4 col-lg-2">
        <h5 class="fw-bold mb-3">Download App</h5>
        <p class="small">Save $3 with App New User Only</p>
        <div class="mb-2">
          <img src="assets/images/qr.png" class="img-fluid mb-2" alt="QR Code" style="max-width:170px;">
          
        </div>
        <div class="social-icons mt-2">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

    </div>

    <hr class="border-secondary mt-5">
    <p class="text-center small text-secondary mb-0">
      © Copyright Rimel 2022. All rights reserved.
    </p>
  </div>
</footer>
`;

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
