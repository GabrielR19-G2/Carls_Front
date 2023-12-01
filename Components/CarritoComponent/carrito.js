document.addEventListener("DOMContentLoaded", () => {
    const carritoProductos = document.querySelector(".carrito-productos");
    let carrito = [];
  
    function agregarCarrito() {
      const divCard = document.createElement("div");
      divCard.classList.add("card-productos");
  
      const imgProducto = document.createElement("img");
      imgProducto.src = "../../images/burguer.jpg";
  
      const tituloProducto = document.createElement("p");
      tituloProducto.textContent = "Combo hamburguesa papas & soda";
      tituloProducto.classList.add("ordenar");
  
      const precioProducto = document.createElement("p");
      precioProducto.textContent = "$120";
      precioProducto.classList.add("precio");
  
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar producto";
      btnEliminar.classList.add("btn");
  
      const producto = {
        id: generateUniqueId(),
        titulo: tituloProducto.textContent,
        precio: precioProducto.textContent,
      };
  
      // Agregar evento de eliminación
      btnEliminar.addEventListener("click", function () {
        eliminarProducto(producto.id);
      });
  
      divCard.appendChild(imgProducto);
      divCard.appendChild(tituloProducto);
      divCard.appendChild(precioProducto);
      divCard.appendChild(btnEliminar);
  
      carrito.push(producto);
      carritoProductos.appendChild(divCard);
      almacenarYActualizarStorage();
    }
  
    function generateUniqueId() {
      return new Date().getTime();
    }
  
    function almacenarYActualizarStorage() {
      localStorage.setItem("Productos", JSON.stringify(carrito));
      sincronizarStorage();
    }
  
    function sincronizarStorage() {
      const productos = JSON.parse(localStorage.getItem("Productos")) || [];
  
      carritoProductos.innerHTML = "";
  
      productos.forEach((producto) => {
        const divCard = document.createElement("div");
        divCard.classList.add("card-productos");
  
        const imgProducto = document.createElement("img");
        imgProducto.src = "../../images/burguer.jpg";
  
        const tituloProducto = document.createElement("p");
        tituloProducto.textContent = producto.titulo;
        tituloProducto.classList.add("ordenar");
  
        const precioProducto = document.createElement("p");
        precioProducto.textContent = producto.precio;
        precioProducto.classList.add("precio");
  
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar producto";
        btnEliminar.classList.add("btn");
  
        // Agregar evento de eliminación
        btnEliminar.addEventListener("click", function () {
          eliminarProducto(producto.id);
        });
  
        divCard.appendChild(imgProducto);
        divCard.appendChild(tituloProducto);
        divCard.appendChild(precioProducto);
        divCard.appendChild(btnEliminar);
  
        carritoProductos.appendChild(divCard);
      });
    }
  
    function eliminarProducto(productId) {
      carrito = carrito.filter((producto) => producto.id !== productId);
      localStorage.setItem("Productos", JSON.stringify(carrito));
      sincronizarStorage();
    }
  
    sincronizarStorage();
  
    const btnAgregar = document.querySelector(".btn-agregar");
    if (btnAgregar) {
      btnAgregar.addEventListener("click", agregarCarrito);
    }
  });