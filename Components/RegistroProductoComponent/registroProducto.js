import { ProductoServicio } from "../../Servicio/productoServicio.js";

export class RegistroProductoComponent extends HTMLElement {
    #servicio = new ProductoServicio();

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        this.#render(shadow);
    }

    async #render(shadow) {
        await fetch('../Components/RegistroProductoComponent/registroProducto.html')
            .then(response => response.text())
            .then(html => {
                shadow.innerHTML += html;
                this.#setupEventListeners(shadow);
            })
            .catch(error => console.error('Error loading HTML: ', error));
    }

    #setupEventListeners(shadow) {
        const registrarButton = shadow.querySelector('#registrar');

        if (registrarButton) {
            registrarButton.addEventListener('click', () => this.#handleRegistrarClick(shadow));
        }
    }

    #handleRegistrarClick(shadow) {
        const nombre = shadow.querySelector('#nombre').value;
        const descripcion = shadow.querySelector('#descripcion').value;
        const precio = shadow.querySelector('#precio').value;
        const categoria = shadow.querySelector('#categoria').value;
        const imagen = shadow.querySelector('#imagen').files[0];

        const productData = {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            categoria: categoria,
            imagen: '/img/' + imagen.name
        };

        this.#servicio.crearProducto(productData)
            .then(response => {
                console.log('Producto registrado con éxito: ', response);

                this.#limpiarFormulario(shadow);
            })
            .catch(error => console.error('Error al registrar producto: ', error));
    }

    #limpiarFormulario(shadow) {
        shadow.querySelector('#nombre').value = '';
        shadow.querySelector('#descripcion').value = '';
        shadow.querySelector('#precio').value = '';
        shadow.querySelector('#categoria').value = '';
        shadow.querySelector('#imagen').value = '';
    }
}
