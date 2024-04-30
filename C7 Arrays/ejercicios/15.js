function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indiceMayor = 0; // Inicializamos el índice mayor como 0 (primer elemento del arreglo)
  
  for (let i = 1; i < array.length; i++) { // Comenzamos desde el segundo elemento del arreglo
    if (array[i] > array[indiceMayor]) { // Comparamos el elemento actual con el mayor encontrado hasta ahora
      indiceMayor = i; // Si encontramos un elemento mayor, actualizamos el índice mayor
    }
  }
  
  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
