export class ProductoServicio {
    #urlProducto = 'http://localhost:3000/api/' + 'productos/';

    async crearProducto(productoData) {
        try {
            let response = await fetch(this.#urlProducto, {
                method: "POST",
                body: JSON.stringify(productoData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            let json = await response.json();
            return json;
        } catch (error) {
            console.log('Error al crear producto: ', error);
            return null;
        }
    }

    async obtenerProductos() {
        try {
            let response = await fetch(this.#urlProducto);
            let json = await response.json();
            return json;
        } catch (error) {
            console.log('Error al obtener productos: ', error);
            return null;
        }
    }

    async obtenerProductoPorId(productoId) {
        try {
            let response = await fetch(this.#urlProducto + productoId);
            let json = await response.json();
            return json;
        } catch (error) {
            console.log('Error al obtener producto: ', error);
            return null;
        }
    }
}