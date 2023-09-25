function informacionProducto(producto) {
    // Utilizar un template literal para generar la descripción
    const descripcion = `
    Producto: ${producto.nombre}
    Categoría: ${producto.categoria}
    Precio: $${producto.precio}
    Disponibilidad: ${producto.disponible ? 'Disponible' : 'No disponible'}
    `;
  
    return descripcion;
}
  
// Ejemplo de uso:
const producto = {
    nombre: "Smartphone",
    categoria: "Electrónicos",
    precio: 499.99,
    disponible: true
};
  
const descripcionProducto = informacionProducto(producto);
console.log(descripcionProducto);