const cartButton = document.getElementById("cart-button");
const cart = document.getElementById("cart");

cartButton.addEventListener("click", () => {
  cart.classList.toggle("show-cart");
});
