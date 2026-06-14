function parsePrice(priceString) {
  return parseFloat(priceString.replace(/[^0-9.]/g, ""));
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items-container");
  const cartTotalSpan = document.getElementById("cart-total");
  const cartItemCountSpan = document.getElementById("cart-item-count");

  cartContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your shopping cart is empty.</p>";
    cartTotalSpan.innerText = "$0";
    cartItemCountSpan.innerText = "0";
    return;
  }

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    const itemPrice = parsePrice(item.price);
    const itemSubtotal = itemPrice * item.quantity;
    total += itemSubtotal;

    itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
            </div>
    <div class="cart-item-controls">
        <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
        <span>${item.quantity}</span> 
        <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
        <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
    </div>

        `;
    cartContainer.appendChild(itemElement);
  });

  cartTotalSpan.innerText = `$${total.toFixed(2)}`;
  cartItemCountSpan.innerText = cart.length;
}

window.changeQuantity = function (index, amount) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index]) {
    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
      removeFromCart(index);
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
};

window.removeFromCart = function (index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index]) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
};

document.addEventListener("DOMContentLoaded", renderCart);

document
  .getElementById("checkout-button")
  .addEventListener("click", function () {
    alert("The purchasing process will continue...");
  });
