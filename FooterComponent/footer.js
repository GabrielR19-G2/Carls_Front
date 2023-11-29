export default class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        this.#render(shadow);
        this.initFooter();
    }

    initFooter() {
        console.log('Footer initialized 3');
    }

    async #render(shadow) {
        // const footerContainer = document.getElementById('footer-container');

        await fetch('./FooterComponent/footer.html')
            .then(res => res.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del footer:', error);
            });

    }
}

// customElements.define('footer-component', FooterComponent);
