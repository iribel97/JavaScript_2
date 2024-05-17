import { createProductCard } from "./createProductCard.js";

function printProductCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  const productsSelector = document.getElementById(idSelector);
  if (arrayOfProducts.length > 0) {
    for (const element of arrayOfProducts) {
      productsTemplate = productsTemplate + createProductCard(element);
    }
    productsSelector.innerHTML = productsTemplate;
  } else {
    productsSelector.innerHTML = "<h3 style='width: 100%; text-align: center'>No hay coincidencias</h3>";
  }
}

export { printProductCards };
