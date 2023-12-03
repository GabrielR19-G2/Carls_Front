export class CarritoComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        fetch('../Components/CarritoComponent/carrito.html') 
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del carrito:', error);
            });
    }
}

if (!customElements.get('carrito-info')) {
    customElements.define('carrito-info', CarritoComponent);
}