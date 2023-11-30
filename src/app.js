// Importar componentes 
import { HeaderComponent } from "../Components/HeaderComponent/headerComponent.js"
import { LoginComponent } from "../Components/loginComponent/logincomponent.js"
import FooterComponent from "../Components/FooterComponent/footer.js"
import ContentComponent from "../Components/ContentComponent/content.js"

document.addEventListener("DOMContentLoaded", function () {
    page("/src/indeic.html", () => inicio());
    page("/inicioSesion", () => iniciarSesion()) //esto sale de un click del botón del header
    page();
})
console.log('Mostrando inicio 1');

function inicio() {
    const body = document.querySelector("body");

    body.innerHTML = `
     <link href="./output.css" rel="stylesheet">

        
        <footer-info></footer-info>
    `;
    // <navbar-info></navbar-info> -> No necesitamos el navbar, el header cumple la misma función
}

function iniciarSesion() {
    const body = document.querySelector('body')
    body.innerHTML = `

    <login-info> </login-info>
    <footer-info></footer-info>
    `
}

window.customElements.define('header-info', HeaderComponent)
window.customElements.define('content-info', ContentComponent)
window.customElements.define('login-info', LoginComponent)
window.customElements.define('footer-info', FooterComponent)
