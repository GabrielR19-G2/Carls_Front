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
         
        await fetch('loginComponent/login.html')
        .then(response => response.text())
        .then(html => {
            shadow.innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el contenido del login:', error);
        });
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
