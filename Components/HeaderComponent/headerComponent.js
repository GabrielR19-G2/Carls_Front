export class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    await this.#render(shadow);
    this.#ListenerNav(shadow);
    this.#ListenerRegister(shadow);
  }

  async #render(shadow) {
    await fetch("../Components/HeaderComponent/headerComponent.html")
      .then((response) => response.text())
      .then((html) => {
        shadow.innerHTML = html;
      })
      .catch((error) => {
        console.error("Error al cargar el contenido del Header:", error);
      });
  }

  #ListenerNav(shadow) {
    let inicio = shadow.querySelector("#inicio");
    let menu = shadow.querySelector("#menu");
    let mapa = shadow.querySelector("#mapa");
    let login = shadow.querySelector("#Login");
    let carrito = shadow.querySelector("#Carrito");
    let registrarProducto = shadow.querySelector("#registroProducto");
    let about = shadow.querySelector("#about");

    inicio.addEventListener("click", function () {
      page("/inicio");
    });

    menu.addEventListener("click", function () {
      page("/mostrarMenu");
    });

    mapa.addEventListener("click", function () {
      page("/mostrarMapa");
    });

    login.addEventListener("click", function () {
      page("/inicioSesion");
    });

    carrito.addEventListener("click", function () { // Agrega esta línea
        page("/carrito");
    });

    registrarProducto.addEventListener("click", function(){
      page("/registroProducto");
    });
    
    about.addEventListener("click", function(){
      page("/about");
    });
  }

  #ListenerRegister(shadow) {
    let registerBtn = shadow.querySelector("#Register");

    registerBtn.addEventListener("click", function () {
      page("/registro"); 
    });
  }
}

// customElements.define('header-component', HeaderComponent);
