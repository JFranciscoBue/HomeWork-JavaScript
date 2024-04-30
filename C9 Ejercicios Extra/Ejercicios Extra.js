/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arreglo = []
  for(let clave in objeto){
    let arreglosHijos = [clave, objeto[clave]]
    arreglo.push(arreglosHijos)
}
return arreglo 
}

console.log(deObjetoAarray({D: 1, B: 2, C: 3}))

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let objeto = {}
  let contador = 1
  console.log(string)
  let stringOrd = string.split("").sort().join("")
  console.log(stringOrd)
  for(let i=0;i<stringOrd.length;i++){
    if(stringOrd[i] === stringOrd[i+1]){
      contador = contador + 1
    }
    else{
      objeto[stringOrd[i]] = contador 
      contador = 1
    }
     
  }
  console.log(objeto)

return objeto 

}

console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"))


function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let stringMayus = ""
  let stringMinus = ""
  let long = string.length 
  
  for(let i=0;i<long;i++){
    if(string[i].toUpperCase() === string[i]){
      stringMayus = stringMayus + string[i]
    }
    else{
      stringMinus = stringMinus + string[i]
    }
  }

  return stringMayus + stringMinus
}
console.log(capToFront("soyHENRY"))

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  return frase.split("").reverse().join("").split(" ").reverse().join(" ")

}

console.log(asAmirror("The Henry Challenge is close!"))

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  let numeroHechoString = numero.toString()
  let stringNumInvertido = numeroHechoString.split("").reverse().join("")
  let numeroInvertido = parseInt(stringNumInvertido)
  
  return numero === numeroInvertido? "Es capicua" : "No es capicua"
}


console.log(capicua(2002))

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  
  console.log(string)
  console.log(string.split(""))

  let arregloTemp = string.split("").filter(function (letra) {
    if(letra !== "a" && letra !== "b" && letra !== "c"){
      return letra
    }    
  })
  let resultado = arregloTemp.join("")
  console.log(resultado)
  return resultado

}

console.log(deleteAbc("Soy una Puta Genia bebe"))

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  
  arrayOfStrings.sort(function (a,b) {
       return a.length - b.length
  })

return arrayOfStrings

}


console.log(sortArray(["You", "are", "beautiful", "looking"]))

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
let arregloRetornable = []
let finDelBucle = Math.max(array1.length, array2.length)
  for(let i=0; i<finDelBucle; i++){
    for(let j=0; j<finDelBucle; j++){
      if(array1[i] === array2[j]){
        arregloRetornable.push(array1[i])
      }
    }
  }

  return arregloRetornable
}

console.log(buscoInterseccion([1,2,3,4], [1,2,5]))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
