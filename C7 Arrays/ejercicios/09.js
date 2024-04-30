function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
    
   let cantDeIndices = array.length;
  let indiceAleatorio = Math.floor(Math.random() * cantDeIndices);
  return array[indiceAleatorio];


}


module.exports = obtenerElementoAleatorio;
