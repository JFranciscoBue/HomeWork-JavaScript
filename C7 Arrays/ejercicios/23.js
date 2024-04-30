function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:

  let cantidadIteraciones = 0
  let suma = num 
  let nuevoArreglo = []
  do {
    cantidadIteraciones++
    suma = suma  + 2
    nuevoArreglo.push(suma)
    if(cantidadIteraciones === suma){
      return "Se interrumpió la ejecución" 
    }

  } while (cantidadIteraciones < 10);

  return nuevoArreglo

}

module.exports = breakStatement;
