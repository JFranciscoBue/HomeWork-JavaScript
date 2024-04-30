function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  let nuevoArreglo = []
  for(let i = 0; i < array.length; i++){
    let doble = array[i] * 2
    nuevoArreglo.push(doble)
  }
  return nuevoArreglo
}

module.exports = duplicarElementos;
