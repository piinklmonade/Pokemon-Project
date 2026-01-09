function addToCart(event) {
  event.preventDefault(); 

  let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

  cartCount++;

  localStorage.setItem('cartCount', cartCount);

  updateCartCount();
}

function updateCartCount() {
  let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

  const cartCountElement = document.getElementById('cart-count');
  
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('cartCount', 0);

  updateCartCount();

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
});