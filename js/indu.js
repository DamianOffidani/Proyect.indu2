const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en proindumentaria.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaIndumentaria = document.createElement("div");
    nuevaIndumentaria.classList = "tarjeta-producto"
    nuevaIndumentaria.innerHTML = `
    <img src="../assets/img/${producto.id}.jpg" alt="vestimenta">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaIndumentaria);
    nuevaIndumentaria.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(indumentaria);