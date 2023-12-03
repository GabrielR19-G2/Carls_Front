export class ProductoServicio {
    #urlProducto = 'http://localhost:3000/api/' + 'productos/';

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