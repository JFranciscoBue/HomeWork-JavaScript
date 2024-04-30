function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  let cantidadDeNotas = resultadosTest.length
  let sumaDeNotas = 0
  
  for(let i=0; i < resultadosTest.length; i++){
      sumaDeNotas = sumaDeNotas + resultadosTest[i]
      promedio = sumaDeNotas / cantidadDeNotas
  }
  return promedio 
}

module.exports = promedioResultadosTest;
