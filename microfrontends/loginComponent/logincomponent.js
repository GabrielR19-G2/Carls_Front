// loginComponent.js
export class LoginComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        this.setupForm();

        this.#agregarEstilo(shadow);
        this.#render(shadow);
    }

    #render(shadow) {
        shadow.innerHTML = `
            <link rel="stylesheet" type="text/css" href="/frontend/microfrontends/loginComponent/login.css">
            <div class="contenedor">
                <div class="login">
                    <h2>Inicia Sesión</h2>
                    <form id="loginForm">
                        <label for="username">Usuario:</label>
                        <input type="text" id="username" name="username" required />

                        <label for="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required />

                        <button type="submit">Iniciar</button>
                    </form>
                    <div class="text-red">¿Aún no tienes cuenta? <a class="text-red" href="register.html">Registrarse</a></div>
        </div>
                </div>
            </div>
        `;
    }
    setupForm() {
        const loginForm = this.shadowRoot.querySelector('#loginForm'); // Usa shadowRoot en lugar de this
    
        if (loginForm) {
            loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
    
                const username = loginForm.querySelector('#username').value;
                const password = loginForm.querySelector('#password').value;
    
                // Add your login logic here
                console.log('Username:', username);
                console.log('Password:', password);
            });
        }
    }
    
    

    #agregarEstilo(shadow) {
        let link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "/frontend/microfrontends/loginComponent/login.css");
        shadow.appendChild(link);
    }
}

customElements.define('login-component', LoginComponent);
