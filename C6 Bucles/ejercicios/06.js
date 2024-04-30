function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  let digitos = num.toString()
  return digitos.length === 3 
  
}

module.exports = tieneTresDigitos;
