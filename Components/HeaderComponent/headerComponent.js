export class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        await this.#render(shadow);
        this.#ListenerNav(shadow);
    }

    async #render(shadow) {
        // const headerContainer = document.getElementById('header-container');
        // Components\HeaderComponent\headerComponent.html
        await fetch('../Components/HeaderComponent/headerComponent.html')
            .then(response => response.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del Header:', error);
            });
    }

    #agregarEstilo(shadow) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        // Utiliza una ruta absoluta o relativa basada en la raíz del servidor
        link.setAttribute("href", "../../src/output.css");
        shadow.appendChild(link);
    }

    #ListenerNav(shadow) {
        let inicio = shadow.querySelector("#inicio");
        let menu = shadow.querySelector("#menu");
        let mapa = shadow.querySelector("#mapa");

        let login = shadow.querySelector("#Login");

        inicio.addEventListener("click", function () {
            page("/inicio")
        })

        menu.addEventListener("click", function () {
            page("/mostrarMenu")
        })

        mapa.addEventListener("click", function () {
            page("/mostrarMapa")
        })
        login.addEventListener("click", function () {
            page("/inicioSesion")
        })
    }
}

// customElements.define('header-component', HeaderComponent);