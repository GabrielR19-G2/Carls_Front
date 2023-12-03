// Importar componentes 
import { HeaderComponent } from "../Components/HeaderComponent/headerComponent.js"
import { LoginComponent } from "../Components/loginComponent/logincomponent.js"
import FooterComponent from "../Components/FooterComponent/footer.js"
import { RegisterComponent } from "../Components/RegisterComponent/registerComponent.js"
import ContentComponent from "../Components/ContentComponent/content.js"
import { MenuComponent } from "../Components/MenuComponent/menu.js"
import MapaComponent from "../Components/MapaComponent/mapaContent.js"
import { CarritoComponent } from "../Components/CarritoComponent/carrito.js";


document.addEventListener("DOMContentLoaded", function () {
    page("/src/index.html", () => inicio());
    page("/inicioSesion", () => iniciarSesion()) //esto sale de un click del botón del header
    page("/mostrarMenu", () => mostrarMenu());
    page("/mostrarMapa", () => mostrarMapa());
    page("/inicio", () => inicio());
    page("/registro", () => mostrarRegistro());
    page("/carrito", () => mostrarCarrito());

    page();
})
console.log('Mostrando inicio 1');

function inicio() {
    const body = document.querySelector("body");

    body.innerHTML = `
        <header-info></header-info>
        <content-info></content-info>
        <footer-info></footer-info>
    `;
}

function iniciarSesion() {
    const body = document.querySelector('body')
    body.innerHTML = `
    <header-info> </header-info>
    <login-info> </login-info>
    <footer-info></footer-info>
    `
}

function mostrarMenu() {
    const body = document.querySelector('body')
    body.innerHTML = `
    <header-info></header-info>
    <menu-info></menu-info>
    <footer-info></footer-info>
    `
}

function mostrarMapa() {
    const body = document.querySelector('body')
    body.innerHTML = `
    <header-info></header-info>
    <mapa-info></mapa-info>
    <footer-info></footer-info>
    `
}

function mostrarRegistro() {
    const body = document.querySelector('body');
    body.innerHTML = `
        <header-info></header-info>
        <register-info></register-info> 
        <footer-info></footer-info>
    `;
}

function mostrarCarrito() {
    const body = document.querySelector('body');
    body.innerHTML = `
        <header-info></header-info>
        <carrito-info></carrito-info>
        <footer-info></footer-info>
    `;
}


window.customElements.define('header-info', HeaderComponent);
window.customElements.define('content-info', ContentComponent);
window.customElements.define('login-info', LoginComponent);
window.customElements.define('menu-info', MenuComponent);
window.customElements.define('mapa-info', MapaComponent);
window.customElements.define('footer-info', FooterComponent);
window.customElements.define('register-info', RegisterComponent);
window.customElements.define('carrito-info', CarritoComponent);
