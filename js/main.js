// main.js
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    if (!grid || !window.PRODUCTS) return;
  
    grid.innerHTML = PRODUCTS.map(p => `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card card-product h-100">
          <img src="${p.image}" class="card-img-top" alt="${p.title}" loading="lazy">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title mb-1">${p.title}</h6>
            <p class="text-muted small mb-2">${p.description}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <div>
                <strong>$${(p.price).toFixed(2)}</strong>
              </div>
              <div>
                <button class="btn btn-sm btn-outline-secondary me-2" onclick="toggleWishlist('${p.id}')">
                  <i class="fa-regular fa-heart"></i>
                </button>
                <button class="btn btn-sm btn-primary" onclick="addToCart('${p.id}')">
                  <i class="fa-solid fa-cart-plus me-1"></i> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`).join('');
  });
  

  const flashEndDate = new Date("2025-10-15T00:00:00").getTime();
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = flashEndDate - now;
    if (distance < 0) return;
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();


  document.addEventListener('DOMContentLoaded', function() {
    const flashCarousel = document.querySelector('#flashSaleCarousel');
    const carousel = new bootstrap.Carousel(flashCarousel, {
      interval: false, // stops auto-slide
      ride: false,     // prevents auto-start
      pause: true,     // stops hover-triggered motion
      wrap: true       // allows looping manually
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const categoryCarousel = document.querySelector('#categoryCarousel');
    new bootstrap.Carousel(categoryCarousel, {
      interval: false,
      ride: false,
      wrap: true
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const exploreCarousel = document.querySelector('#exploreCarousel');
    new bootstrap.Carousel(exploreCarousel, {
      interval: false,
      ride: false,
      wrap: true
    });
  });


  const profileDropdown = document.querySelector('.profile-dropdown');

  profileDropdown.addEventListener('mouseenter', () => {
    const dropdown = new bootstrap.Dropdown(profileDropdown.querySelector('[data-bs-toggle="dropdown"]'));
    dropdown.show();
  });

  profileDropdown.addEventListener('mouseleave', () => {
    const dropdown = bootstrap.Dropdown.getInstance(profileDropdown.querySelector('[data-bs-toggle="dropdown"]'));
    dropdown.hide();
  });

