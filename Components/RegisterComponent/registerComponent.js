// registercomponent.js
export class RegistroComponent extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        this.setupForm();
        this.#render(shadow);
        this.initRegister();
    }

    initRegister() {
        console.log('Error registerComponent');
    }

    #render(shadow) {
        shadow.innerHTML += `
        <!-- registerComponent.html -->
        <div class="contenedor">
            <div class="registro">
                <h2>Regístrate</h2>
                <p class="hint-text">Crea tu cuenta es gratis y sólo te llevará un minuto.</p>
                <!-- Agrega un ID al formulario -->
                <form id="registroForm">
                    <label for="username">Usuario:</label>
                    <input type="text" id="username" name="username" required />
        
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                
                    <div class="form-group">
                        <label class="form-check-label"><input type="checkbox" required="required"> Acepto las <a href="#">Condiciones de uso</a> y las <a href="#"> Políticas de privacidad</a></label>
                    </div>

                    <button type="submit">Crear cuenta</button>

                </form>
                <br>
                <div class="text-red">¿Ya tiene una cuenta? <a class="text-red" href="login.html">Iniciar Sesión</a></div>                 
                </div>
                
            </div>
        </div>
        
        `;
    }
    setupForm() {
        const registroForm = this.shadowRoot.querySelector('#registroForm');

        if (registroForm) {
            registroForm.addEventListener('submit', function (event) {
                event.preventDefault();

                const username = registroForm.querySelector('#username').value;
                const password = registroForm.querySelector('#password').value;

                console.log('Username:', username);
                console.log('Password:', password);

                return false;
            });
        }
    }



    #agregarEstilo(shadow) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        // Utiliza una ruta absoluta o relativa basada en la raíz del servidor
        link.setAttribute("href", "../Components/FooterComponent/footer.css");
        shadow.appendChild(link);
    }



}
customElements.define('registro-component', RegistroComponent);
