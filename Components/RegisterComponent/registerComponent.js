export class RegisterComponent extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        this.setupForm();
<<<<<<< HEAD:RegisterComponent/registerComponent.js

        // this.#agregarEstilo(shadow);
=======
>>>>>>> ed8549aa799e11983c06a9c9b58c9722240b824d:Components/RegisterComponent/registerComponent.js
        this.#render(shadow);
        this.initRegister();
    }

    initRegister() {
        console.log('Error registerComponent');
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
<<<<<<< HEAD:RegisterComponent/registerComponent.js
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
=======
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
>>>>>>> ed8549aa799e11983c06a9c9b58c9722240b824d:Components/RegisterComponent/registerComponent.js
