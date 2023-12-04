export class UsuarioServicio {
    #urlUsuario = 'http://localhost:3000/api/' + 'usuarios/';

    async crearUsuario(usuarioData) {
        try {
            let response = await fetch(this.#urlUsuario, {
                method: "POST",
                body: JSON.stringify(usuarioData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            let json = await response.json();
            return json;
        } catch (error) {
            console.log('Error al crear usuario: ', error);
            return null;
        }
    }

    async obtenerUsuarios() {
        try {
            let response = await fetch(this.#urlUsuario);
            let json = await response.json();
            return json;
        } catch (error) {
            console.log('Error al obtener usuarios: ', error);
            return null;
        }
    }

    async obtenerUsuarioPorId(usuariooId) {
        try {
            let response = await fetch(this.#urlUsuario + usuariooId);
            let json = await response.json();
            return json;
        } catch (error) {
            console.log('Error al obtener usuario: ', error);
            return null;
        }
    }
}