function addGuiones(cadena) {
    let nuevaCadena = '';
  
    for (let i = 0; i < cadena.length; i++) {
      nuevaCadena += cadena[i];
  
      // Agregar un guion medio después de cada letra, excepto la última
      if (i < cadena.length - 1) {
        nuevaCadena += '-';
      }
    }
  
    return nuevaCadena;
}