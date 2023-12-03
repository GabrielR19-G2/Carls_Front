import { ProductoServicio } from "../../Servicio/productoServicio.js";

export class MenuComponent extends HTMLElement {
    #servicio = new ProductoServicio();

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        this.#servicio.obtenerProductos().then(productos => {
            const productosHTML = productos.map(producto => this.#renderCard(producto)).join('');
            this.#render(shadow, productosHTML, productos);
            
        }).catch(error => {
            console.error('Error al obtener productos: ', error);
        });
    }

    #render(shadow, productosHTML, productos) {
		shadow.innerHTML = `
            <link rel="stylesheet" href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css" />
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
 
            <section class="bg-black dark:bg-gray-900">
                <div class="container px-6 py-8 mx-auto">
                    <div class="lg:flex lg:-mx-2">
                        <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                            <a href="#" class="block font-medium text-yellow-400 hover:underline">DESAYUNOS</a>
                            <a href="#" class="block font-medium text-yellow-400 hover:underline">A LA PARRILLA</a>
                            <a href="#" class="block font-medium text-yellow-400 hover:underline">ENSALADAS</a>
                            <a href="#" class="block font-medium text-yellow-400 hover:underline">BEBIDAS</a>
                            <a href="#" class="block font-medium text-yellow-400 hover:underline">POSTRES</a>
                        </div>

                        <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                            <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <p class="text-yellow-500">${productos.length} RESULTADOS</p>
                                <div class="flex items-center">
                                    <select class="font-medium text-yellow-700 bg-transparent focus:outline-none">
                                        <option value="#">RECOMENDADOS</option>
                                        <option value="#">MENOR PRECIO</option>
                                        <option value="#">MAYOR PRECIO</option>
                                    </select>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                ${productosHTML}    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
	}

    #renderCard(producto){
        return `
        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="${producto.imagen}" alt="T-Shirt">
            <h4 class="mt-2 text-lg font-medium text-yellow-400 ">${producto.nombre}</h4>
            <p class="text-white">$${producto.precio}</p>

            <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-yellow-400 focus:outline-none ">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span class="mx-1">Agregar al carrito</span>
            </button>
        </div>
        `;
    }

}