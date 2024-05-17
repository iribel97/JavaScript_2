import { getProducts } from "./products.js";
import { printIcons, printNavBar, printFooter, hideSearch} from "./functions/printLayout.js";
import { printDetails } from "./functions/printDetails.js";
import { printProductCards } from "./functions/printProductCards.js";

hideSearch();
printIcons();
printNavBar("navbar");
printFooter("footer");

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
printDetails(id);

getProducts().then((products) => {
    const onsale = products.filter((each) => each.onsale);
    printProductCards(onsale, "product-container");
}).catch((error) => {
  console.error('Hubo un problema al obtener los productos:', error);
});

