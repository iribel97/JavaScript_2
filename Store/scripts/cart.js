import { printIcons, printNavBar, printFooter, hideSearch} from "./functions/printLayout.js";
import { printCartCards } from "./functions/printCartCards.js";
import { printCartTotal } from "./functions/printCartTotal.js";

hideSearch();
printIcons();
printNavBar( "navbar");
printFooter( "footer");

let cartproducts = JSON.parse(localStorage.getItem("cart"));
if (!cartproducts) {
  cartproducts = [];
}
printCartCards(cartproducts, "productscart");
printCartTotal(cartproducts, "total");
