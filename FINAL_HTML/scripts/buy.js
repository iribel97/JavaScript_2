/**
 * define una variable buySelector para seleccionar con el método getElementById la etiqueta del botón “Finaliza tu compra”.
 */
    function comprar() {
        const buySelector = document.getElementById("buy");
    
        buySelector.addEventListener("click", () => {
            //Borrar los productos del carrito
            localStorage.removeItem('cart');
            //Redirigir a la página de inicio
            window.location.href = "./cart.html";
        });
    }

    

    comprar()