// Importar componentes 
import { HeaderComponent } from "./HeaderComponent/headerComponent.js"
import FooterComponent from "./FooterComponent/footer.js"
import ContentComponent from "./ContentComponent/content.js"

document.addEventListener("DOMContentLoaded", function () {
    page("/indeic.html", () => inicio());
    page("/inicioSesion", () => iniciarSesion()) //esto sale de un click del botón del header
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
    // <navbar-info></navbar-info> -> No necesitamos el navbar, el header cumple la misma función
}

function iniciarSesion() {
    const body = document.querySelector('body')
    body.innerHTML = `
    <header></header>
    <
    <footer-info></footer-info>
    `
}

window.customElements.define('header-info', HeaderComponent)
window.customElements.define('content-info', ContentComponent)
window.customElements.define('login-info', LoginComponent)
window.customElements.define('footer-info', FooterComponent)
