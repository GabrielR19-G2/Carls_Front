export class LoginComponent extends HTMLElement {
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
        // const headerContainer = document.getElementById('header-container');
        // Components\HeaderComponent\headerComponent.html
        await fetch('../Components/loginComponent/login.html')
            .then(response => response.text())
            .then(html => {
                shadow.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del Header:', error);
            });
    }


    setupForm() {
        const loginForm = this.shadowRoot.querySelector('#loginForm'); // Usa shadowRoot en lugar de this
    
        if (loginForm) {
            loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
    
                const username = loginForm.querySelector('#username').value;
                const password = loginForm.querySelector('#password').value;
    
                console.log('Username:', username);
                console.log('Password:', password);
            });
        }
    }
    
    

    // #agregarEstilo(shadow) {
    //     let link = document.createElement("link");
    //     link.setAttribute("rel", "stylesheet");
    //     link.setAttribute("href", "/frontend/microfrontends/loginComponent/login.css");
    //     shadow.appendChild(link);
    // }
}

