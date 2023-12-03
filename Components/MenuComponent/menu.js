export class MenuComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        this.#render(shadow);
    }

    async #render(shadow) {
        // const footerContainer = document.getElementById('footer-container');
        console.log('Entra');
        await fetch('../Components/MenuComponent/menu.html')
            .then(res => res.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del footer:', error);
            });

    }

    #ListenerMenu(shadow){
        console.log('Entramos!');
        let menu = shadow.querySelector('#menu')
        menu.addEventListener("click", function(){
            page("/mostrarMenu")
        })
    }
}

// customElements.define('menu-component', MenuComponent);