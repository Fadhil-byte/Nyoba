let cart = [];

function addToCart(productName, productPrice) {
  // Menambahkan produk ke keranjang
  cart.push({ name: productName, price: productPrice });
  updateCartButton();
}

function updateCartButton() {
  // Menampilkan jumlah produk di tombol keranjang
  const cartButton = document.querySelector('.cart button');
  cartButton.textContent = `Keranjang (${cart.length})`;
}

function showCart() {
  // Menampilkan modal keranjang
  const cartModal = document.getElementById('cart-modal');
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
    cartItems.appendChild(li);
  });

  cartModal.style.display = 'flex';
}

function closeCart() {
  // Menutup modal keranjang
  document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
  if (cart.length === 0) {
    alert('Keranjang kosong!');
    return;
  }

  let total = cart.reduce((sum, item) => sum + item.price, 0);
  alert(`Total belanja: Rp ${total.toLocaleString()}`);
  cart = []; // Mengosongkan keranjang setelah checkout
  updateCartButton();
  closeCart();
}

function searchProduct() {
  let query = document.getElementById('search-bar').value.toLowerCase();
  let products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    let productName = product.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(query)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
