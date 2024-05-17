import { printIcons, printNavBar, printFooter } from "./functions/printLayout.js";
import { printProductCards } from "./functions/printProductCards.js";
import { printFilter } from "./functions/printFilter.js";

printIcons();
printNavBar("navbar");
printFooter("footer");

printProductCards( [] ,"products");

const searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", printFilter);
