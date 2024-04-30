function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i] === array[j])
      return true
    }
  }
  return false
}

console.log(todosIguales([9,9]))


module.exports = todosIguales;
