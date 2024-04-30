function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let stringNuevo = "";
  for (let i = 0; i < palabras.length; i++) {
    stringNuevo = stringNuevo + palabras[i];
    if (i < palabras.length - 1) { // Verifica si no es la última palabra
      stringNuevo = stringNuevo + " "; // Agrega un espacio solo si no es la última palabra
    }
  }
  return stringNuevo;
}

module.exports = dePalabrasAFrase;
