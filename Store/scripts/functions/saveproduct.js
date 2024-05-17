import { getProducts } from "../products.js";

function saveProd(id) {
  getProducts().then((products) => {

    const found = products.find((each) => each.id === id);
    const product = {
      id: id,
      title: found.title,
      price: found.price,
      description: found.description,
      image: found.images[0],
      color: document.querySelector("#color-" + id).value,
      quantity: Number(document.querySelector("#quantity-" + id).value),
    };
    const storage = localStorage.getItem("cart");
    if (storage) {
      const parseStorage = JSON.parse(storage);
      parseStorage.push(product);
      const stringifyProducts = JSON.stringify(parseStorage);
      localStorage.setItem("cart", stringifyProducts);
    } else {
      const stringifyProduct = JSON.stringify([product]);
      localStorage.setItem("cart", stringifyProduct);
    }
  }).catch((error) => {
    console.error('Hubo un problema al obtener los productos:', error);
  })
}

export { saveProd };