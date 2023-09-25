function indexOfIgnoreCase(cadena1, cadena2) {
    // Convertir ambas cadenas a minúsculas para la comparación
    const cadena1Lower = cadena1.toLowerCase();
    const cadena2Lower = cadena2.toLowerCase();
  
    // Utilizar indexOf para buscar la segunda cadena en la primera (en minúsculas)
    const indice = cadena1Lower.indexOf(cadena2Lower);
  
    return indice;
}