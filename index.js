// index.js
import "./microfrontends/Menu/menu.js";
import "./microfrontends/navbar/navbar.js";
import "./microfrontends/footer/footer.js";
import "./microfrontends/RegisterComponent/registerComponent.js";
import "./microfrontends/loginComponent/logincomponent.js";

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");
  navbarContainer.innerHTML = "<navbar-component></navbar-component>";


  const contentContainer = document.getElementById("content-container");
  const page = window.location.pathname; // Obtener la ruta de la página actual

  if (page.includes("register.html")) {
    contentContainer.innerHTML = "<registro-component></registro-component>";
  } else if (page.includes("login.html")) {
    contentContainer.innerHTML = "<login-component></login-component>";
  } else {

  }

  const footerContainer = document.getElementById("footer-container");
  footerContainer.innerHTML = "<footer-component></footer-component>";
  
  const menuContainer = document.getElementById("menu-container");
  if (menuContainer) {
    menuContainer.innerHTML = "<menu-component></menu-component>";
  }

});
