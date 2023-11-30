export class RegisterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        this.setupForm();

        // this.#agregarEstilo(shadow);
        this.#render(shadow);
    }

    async #render(shadow) {
         
        await fetch('RegisterComponent/register.html')
        .then(response => response.text())
        .then(html => {
            shadow.innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el contenido del register:', error);
        });
    }
    setupForm() {
        const registerForm = this.shadowRoot.querySelector('#registerForm'); // Usa shadowRoot en lugar de this
    
        if (registerFormForm) {
            registerFormForm.addEventListener('submit', function (event) {
                event.preventDefault();
    
                const username = registerFormForm.querySelector('#username').value;
                const password = registerFormForm.querySelector('#password').value;
    
                console.log('Username:', username);
                console.log('Password:', password);
            });
        }
    }

}