import { products } from "../products.js";
import { printProductCards } from "./printProductCards.js";

function printFilter(evento) {
  const text = evento.target.value;
  const found = products.filter((each) => each.title.toLowerCase().includes(text.toLowerCase()));
  printProductCards(found, "products");
}

export { printFilter };
