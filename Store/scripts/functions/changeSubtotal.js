import { getProducts } from "../products.js";

function changeSubtotal(event) {
  getProducts().then((products) => {
    const value = event.target.value;
    const id = event.target.id.slice(9)
    const found = products.find((each) => each.id === id);
    const subtotal = found.price * value;
    const priceSelector = document.querySelector("#price");
    priceSelector.innerHTML = "$" + subtotal;
  }).catch((error) => {
    console.error('Hubo un problema al obtener los productos:', error);
  })
}

export { changeSubtotal };