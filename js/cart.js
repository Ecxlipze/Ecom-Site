// cart.js
const CART_KEY = 'ec_front_cart_v1';
const WISHLIST_KEY = 'ec_front_wishlist_v1';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateHeaderCounts();
}
function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
  catch(e){ return []; }
}
function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateHeaderCounts();
}

function updateHeaderCounts(){
  const cart = getCart();
  const wishlist = getWishlist();
  const cartCount = cart.reduce((sum,i)=>sum + (i.qty || 1), 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = cartCount);
  document.querySelectorAll('.wishlist-count').forEach(el => el.textContent = wishlist.length);
}

function addToCart(productId, qty = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) { showToast('Product not found'); return; }
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty = (existing.qty || 1) + qty;
  else cart.push({ id: productId, qty, title: prod.title, price: prod.price, image: prod.image });
  saveCart(cart);
  showToast(`${prod.title} added to cart`);
}

function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
}

function setQuantity(productId, qty) {
  const cart = getCart();
  const it = cart.find(i => i.id === productId);
  if (!it) return;
  it.qty = Math.max(1, Number(qty));
  saveCart(cart);
}

function toggleWishlist(productId) {
  const wishlist = getWishlist();
  const idx = wishlist.indexOf(productId);
  if (idx === -1) wishlist.push(productId);
  else wishlist.splice(idx, 1);
  saveWishlist(wishlist);
  const prod = PRODUCTS.find(p => p.id === productId);
  showToast(prod ? (idx === -1 ? `${prod.title} saved to wishlist` : `${prod.title} removed from wishlist`) : 'Wishlist updated');
}

// small toast
function showToast(msg, ms = 1500) {
  const container = document.getElementById('toast-inline');
  if (!container) return alert(msg);
  const div = document.createElement('div');
  div.className = 'alert alert-success py-2 px-3';
  div.style.opacity = '0.95';
  div.textContent = msg;
  container.appendChild(div);
  setTimeout(()=> {
    div.remove();
  }, ms);
}

// expose to global (so inline buttons can call)
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.setQuantity = setQuantity;
window.toggleWishlist = toggleWishlist;
window.getCart = getCart;
window.getWishlist = getWishlist;
window.updateHeaderCounts = updateHeaderCounts;

// update counts on load
document.addEventListener('DOMContentLoaded', updateHeaderCounts);
