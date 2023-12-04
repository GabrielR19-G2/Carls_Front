export class AboutComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' })
        this.#render(shadow);
    }

    async #render(shadow) {
        console.log('Entra');
        await fetch('../Components/AboutComponent/aboutComponent.html')
            .then(res => res.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido:', error);
            });

    }
}