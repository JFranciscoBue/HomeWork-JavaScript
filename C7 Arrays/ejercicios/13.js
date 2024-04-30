function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let arregloDePares=[]
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0)
    arregloDePares.push(array[i])
  }
  return arregloDePares
}

module.exports = filtrarNumerosPares;
