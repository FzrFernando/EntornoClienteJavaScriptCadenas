function contadorDeLetras(cadena, letra) {
    // Inicializamos un contador para llevar la cuenta
    let contador = 0;
  
    // Recorremos la cadena de texto con un bucle for
    for (let i = 0; i < cadena.length; i++) {
      // Comparamos cada letra con la letra que estamos buscando (ignorando mayúsculas/minúsculas)
      if (cadena[i].toLowerCase() === letra.toLowerCase()) {
        contador++;
      }
    }
  
    return contador;
}