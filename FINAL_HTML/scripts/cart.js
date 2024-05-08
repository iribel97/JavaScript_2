// Definiendo variable cartproducts que traiga el array del localStorage
let cartproducts = JSON.parse(localStorage.getItem('cart'));

/**
 * Renderizar dinámicamente los productos del carrito
 */
//Definir funcion printCart
function printCart() {
    //Traer el selector del contenedor de productos
    const container = document.querySelector(".container");
    //Limpiar el contenedor
    container.innerHTML = "";

    if (cartproducts === null || cartproducts.length === 0) {
        container.innerHTML = `
    <article class="product-cart">
        <div class="title-product">No hay productos en el carrito</div>
    </article>
    `;
    } else {
        //Iterar sobre los productos del carrito
        cartproducts.forEach(product => {
            //Crear un div que contenga la información del producto
            const productDiv = document.createElement("article");
            //Agregar la clase product al div
            productDiv.classList.add("product-cart");
            //Agregar el contenido al div
            productDiv.innerHTML = `
    <img class="product-img" src="${product.photo}">
  
    <div class="product-details">
      <div class="title-product">${product.title}</div>
      <div class="color-product">${product.color}</div>
      <!--Mostrar la cantidad a comprar-->
      <input class="product-input" type="number" name="quantity" min="1" id="${product.id}_${product.color}" value="${product.quantity}" onchange="changeQuantity(event)">
    </div>
    <div class="product-price">
        P.U. $ ${product.price}.00 <br>
        --------------- <br>
     Subtotal $ ${product.price * product.quantity}.00
    </div>
    `;
            //Agregar el div al contenedor
            container.appendChild(productDiv);
        });
    }
}

/**
 * Renderizar el total a pagar
 */
//Definir función printTotal
function printTotal() {
    //Definir variable para almacenar el precio total
    let totalPrice = 0;

    if (cartproducts !== null ) {

        //Iterar sobre los productos del carrito
        cartproducts.forEach(product => {
            //Sumar el precio de cada producto al total
            totalPrice = totalPrice + (product.price * product.quantity);
        });
    }

    //Traer el selector del contenedor del total
    const totalContainer = document.querySelector("#total");
    //Limpiar el contenedor
    totalContainer.innerHTML = "";
    //Agregar el html
    totalContainer.innerHTML = `
    <h1 class="cart-title">Resumen del pedido</h1>
        <p class="cart-total">Total        USD $${(totalPrice !== null || totalPrice !=0) ? totalPrice : 0 }</p>
        <p class="cart-tax">Taxes</p>
        <button class="cart-btn" id="buy" type="button">COMPRAR</button>
    `;
    const buySelector = document.getElementById("buy");

    buySelector.addEventListener("click", () => {
        //Borrar los productos del carrito
        localStorage.removeItem('cart');
        //Redirigir a la página de inicio
        window.location.href = "./cart.html";
    });
}

/**
 * Evento changeQuantity(event) para cambiar la cantidad de productos en el carrito
 */
//Definir función changeQuantity
function changeQuantity(event) {
    //Traer el id del producto
    const id = event.target.id.split("_");
    //Traer el valor de la cantidad
    const quantity = event.target.value;
    //Iterar sobre los productos del carrito
    cartproducts.forEach(product => {
        //Verificar si el id del producto es igual al id del producto seleccionado
        if (product.id == id[0] && product.color == id[1]) {
            //Cambiar la cantidad del producto
            product.quantity = quantity;
        }
    });
    //Guardar el carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(cartproducts));
    printCart();
    printTotal();
}

printCart();
printTotal();