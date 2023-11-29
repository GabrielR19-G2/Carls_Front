export class HeaderComponent extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        await this.#render(shadow);
        this.#inicial(shadow)
    }

    async #render(shadow) {
        // const headerContainer = document.getElementById('header-container');

        await fetch('HeaderComponent/headerComponent.html')
            .then(response => response.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del Header:', error);
            });
    }

    #header(shadow) {
        this.#inicial(shadow);
    }
    #inicial(shadow) {
        let navegacion = shadow.querySelector('.nav-header')
        let btnIniciarSesion = document.createElement('button')
        btnIniciarSesion.setAttribute("id", "btn-inicioSesion")
        btnIniciarSesion.innerHTML = "Iniciar sesión!!"

        btnIniciarSesion.addEventListener("click", function () {
            page("/inicioSesion")
        })

        navegacion.appendChild(btnIniciarSesion);
    }

}

// customElements.define('header-component', HeaderComponent);