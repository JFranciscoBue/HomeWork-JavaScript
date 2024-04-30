function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuevoArreglo=[]
   arrayOfStrings.filter(function (elemento) {
   if(elemento[0] === "a"  ){
      nuevoArreglo.push(elemento)
   }    
   })
   return nuevoArreglo
   
}

module.exports = filter;
