import { printCartCards } from "./printCartCards.js";
import { printCartTotal } from "./printCartTotal.js";

function clearCart() {
  let cartproducts = [];
  localStorage.setItem("cart", JSON.stringify(cartproducts));
  printCartCards(cartproducts, "productscart");
  printCartTotal(cartproducts, "total");
}

export { clearCart };
