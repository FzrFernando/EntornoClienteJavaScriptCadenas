function firstChar(cadena) {
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];
      if (caracter !== ' ') {
        return caracter;
      }
    }
    
    // Devolver un valor por defecto si la cadena está vacía o solo contiene espacios
    return null;
}