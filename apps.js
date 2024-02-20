/*Flechas de carrusel */

const rightBtn = document.querySelector("#boton-izquierda");
const leftBtn = document.querySelector("#boton-derecha");
const content = document.querySelector(".productos-desli");

rightBtn.addEventListener("click", () => {
    content.scrollLeft += 200;
});

leftBtn.addEventListener("click", () => {
    content.scrollLeft -= 200;
});


/*===============================*/

const btnCart = document.querySelector(".container-compras");
const containerCartProducts = document.querySelector(".container-cart-products");

btnCart.addEventListener("click", () => {
    containerCartProducts.classList.toggle
    ("hidden-cart")
});

/*===============================*/

