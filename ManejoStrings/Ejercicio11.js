function tieneLetra(cadena, letra) {
    // Utiliza indexOf para buscar la letra en la cadena
    const indice = cadena.indexOf(letra);
  
    // Si indexOf devuelve -1, la letra no se encuentra en la cadena
    // Si devuelve un valor diferente de -1, la letra está presente
    return indice !== -1;
}