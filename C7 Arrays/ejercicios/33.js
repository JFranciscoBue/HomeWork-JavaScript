function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let resultado = '';
  // Determina la longitud máxima entre los tres strings
  let maxLength = Math.max(str1.length, str2.length, str3.length);
  // Itera sobre la longitud máxima
  for (let i = 0; i < maxLength; i++) {
    // Concatena el caracter de str1 si no está vacío
    if (str1[i] !== undefined && str1[i] !== '') {
      resultado += str1[i];
    }
    // Concatena el caracter de str2 si no está vacío
    if (str2[i] !== undefined && str2[i] !== '') {
      resultado += str2[i];
    }
    // Concatena el caracter de str3 si no está vacío
    if (str3[i] !== undefined && str3[i] !== '') {
      resultado += str3[i];
    }
  }
  return resultado;
  
  

}

module.exports = combine;