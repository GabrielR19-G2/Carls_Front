import { UsuarioServicio } from "../../Servicio/usuarioServicio.js";

export class RegisterComponent extends HTMLElement {
    #servicio = new UsuarioServicio();

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        this.#render(shadow);
    }

    async #render(shadow) {
        await fetch('../Components/RegisterComponent/register.html')
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
        const usuario = shadow.querySelector('#username').value;
        const contraseña = shadow.querySelector('#password').value;

        const userData = {
            usuario: usuario,
            contraseña: contraseña
        };
        console.log('el ' + userData.usuario, userData.contraseña);
        this.#servicio.crearUsuario(userData)
            .then(response => {
                console.log('Usuario registrado con éxito: ', response);

                this.#limpiarFormulario(shadow);
            })
            .catch(error => console.error('Error al registrar producto: ', error));
    }

    #limpiarFormulario(shadow) {
        shadow.querySelector('#password').value = '';
        shadow.querySelector('#username').value = '';
    }
}