function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let cantNumerosPares = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) { // Si el número no es par, continúa con la siguiente iteración
      continue;
    }
    cantNumerosPares = cantNumerosPares + 1; // Incrementa la cantidad de números pares
  }
  return cantNumerosPares;
}

module.exports = contarParesConContinue;
