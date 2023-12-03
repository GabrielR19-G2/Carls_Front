export class RegisterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.setupForm();
    }

    render() {
        fetch('../Components/RegisterComponent/register.html')  
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Error al cargar el contenido del register:', error);
            });
    }

    setupForm() {
        const registerForm = this.querySelector('.formulario-register');

        if (registerForm) {
            registerForm.addEventListener('submit', function (event) {
                event.preventDefault();

                const username = registerForm.querySelector('.user-input').value;
                const password = registerForm.querySelector('.password-input').value;

                console.log('Username:', username);
                console.log('Password:', password);
            });
        }
    }
}

if (!customElements.get('register-info')) {
    customElements.define('register-info', RegisterComponent);
}