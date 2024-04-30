function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   if (str1.length !== str2.length) {
      return false;
    }
  
    // Convierte ambos strings a minúsculas para realizar una comparación sensible a mayúsculas y minúsculas
    var lowerStr1 = str1.toLowerCase();
    var lowerStr2 = str2.toLowerCase();
  
    // Convierte ambos strings a arreglos para poder ordenarlos
    var arr1 = lowerStr1.split('').sort();
    var arr2 = lowerStr2.split('').sort();
  
    // Compara los arreglos para ver si contienen los mismos caracteres
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    // Si todos los caracteres coinciden, son anagramas
    return true;
}

console.log(esAnagrama("Hola", "Chau"))

module.exports = esAnagrama;
