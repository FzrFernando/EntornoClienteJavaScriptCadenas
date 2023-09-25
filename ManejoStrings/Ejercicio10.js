function generarNombre3(cadena1, cadena2, cadena3) {
    // Verificar si alguna cadena tiene menos de 5 letras
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5) {
      return 'error';
    } else {
      // Obtener las tres últimas letras de cada cadena
      const ultimasLetras1 = cadena1.slice(-3);
      const ultimasLetras2 = cadena2.slice(-3);
      const ultimasLetras3 = cadena3.slice(-3);
  
      // Concatenar las últimas letras para formar el nuevo nombre
      const nuevoNombre = ultimasLetras1 + ultimasLetras2 + ultimasLetras3;
  
      return nuevoNombre;
    }
}