function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  objetoProducto.calcularPrecioDescuento = function() {
    // Esta función multiplica el precio del producto por el porcentajeDeDescuento.
    var precioConDescuento = objetoProducto.precio * (1 - objetoProducto.porcentajeDeDescuento);
    // Retorna el precio final
    return precioConDescuento;
  };

  // Retorna el objetoProducto modificado
  return objetoProducto;


// Ejemplo de uso:
var producto = {
  precio: 10,
  porcentajeDeDescuento: 0.2
};

// Agrega el método calcularPrecioDescuento al objeto producto
agregarMetodoCalculoDescuento(producto);

// Calcula el precio final con descuento
var precioFinal = producto.calcularPrecioDescuento();

return precioFinal 

}



module.exports = agregarMetodoCalculoDescuento;
