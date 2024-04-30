function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  let nuevoArreglo = []
  for(let i = 0; i < array.length; i++){
    let mayusculas = array[i].toUpperCase()
    nuevoArreglo.push(mayusculas)
  }
  return nuevoArreglo

}

module.exports = convertirStringAMayusculas;
