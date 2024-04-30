function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let arregloInvertido = []
  let longitudArreglo = array.length - 1
  for(let i = 0; i <= longitudArreglo; i++){
    arregloInvertido.unshift(array[i])
  }
  return arregloInvertido
}

module.exports = invertirArray;
