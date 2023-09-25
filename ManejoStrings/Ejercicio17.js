function contadorDeLetras2(cadena1, cadena2, letra) {
    // Función para contar el número de veces que aparece una letra en una cadena (sin importar mayúsculas/minúsculas)
    function contarLetras(cadena, letra) {
      let contador = 0;
      for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === letra.toLowerCase()) {
          contador++;
        }
      }
      return contador;
    }
  
    // Contar el número de veces que aparece la letra en cada cadena
    const contadorCadena1 = contarLetras(cadena1, letra);
    const contadorCadena2 = contarLetras(cadena2, letra);
  
    // Comparar los recuentos y devolver la cadena con más ocurrencias
    if (contadorCadena1 > contadorCadena2) {
      return cadena1;
    } else if (contadorCadena2 > contadorCadena1) {
      return cadena2;
    } else {
      return 'Ambas cadenas tienen la misma cantidad de letras buscadas.';
    }
}