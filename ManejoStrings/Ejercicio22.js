function firstWord(cadena) {
    // Buscar la posición del primer espacio en blanco
    const indiceEspacio = cadena.indexOf(' ');
  
    // Si no se encuentra un espacio en blanco, la cadena es la primera palabra
    if (indiceEspacio === -1) {
      return cadena;
    }
  
    // Extraer los caracteres antes del primer espacio en blanco
    const primeraPalabra = cadena.substring(0, indiceEspacio);
  
    return primeraPalabra;
}