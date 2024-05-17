import { products } from "./products.js";
import { options, printIcons, printNavBar, printFooter, hideSearch} from "./functions/printLayout.js";
import { printDetails } from "./functions/printDetails.js";
import { printProductCards } from "./functions/printProductCards.js";

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
printDetails(id);

const onsale = products.filter((each) => each.onsale);
printProductCards(onsale, "product-container");
