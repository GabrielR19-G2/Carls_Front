export default class ContentComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        this.#render(shadow);
        this.initFooter();
    }

    initFooter() {
        console.log('Content');
    }

    async #render(shadow) {
        // const footerContainer = document.getElementById('footer-container');

        await fetch('./ContentComponent/content.html')
            .then(res => res.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del content:', error);
            });

    }
}

// customElements.define('footer-component', FooterComponent);
