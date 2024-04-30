function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  }
  
  // Si se pasó un solo argumento, simplemente retorna ese valor
  if (arguments.length === 1) {
    return arguments[0];
  }
  
  // Inicializa el producto como 1
  var producto = 1;
  
  // Multiplica cada argumento
  for (var i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }
  
  // Retorna el producto
  return producto;
  

}

module.exports = multiplicarArgumentos;
