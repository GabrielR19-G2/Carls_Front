export default class MapaComponent extends HTMLElement {
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
        await fetch('../Components/MapaComponent/mapaComponent.html')
            .then(res => res.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del Mapa:', error);
            });

    }
}

