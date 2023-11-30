export default class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        this.#render(shadow);
        this.initFooter();
        // this.#agregarEstilo(shadow);
    }

    initFooter() {
        console.log('Footer initialized 3');
    }

    async #render(shadow) {
        // const footerContainer = document.getElementById('footer-container');

        await fetch('../Components//FooterComponent/footer.html')
            .then(res => res.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del footer:', error);
            });

    }
    #agregarEstilo(shadow) {
        console.log('enrta');
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        // Utiliza una ruta absoluta o relativa basada en la raíz del servidor
        link.setAttribute("href", "../Components/FooterComponent/footer.css");
        shadow.appendChild(link);
        console.log(link);
    }
}


// customElements.define('footer-component', FooterComponent);
