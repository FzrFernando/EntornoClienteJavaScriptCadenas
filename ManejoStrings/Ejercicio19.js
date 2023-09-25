function shortcut(cadena1, cadena2) {
    // Obtener el primer carácter de cada cadena
    const inicialCadena1 = cadena1.charAt(0);
    const inicialCadena2 = cadena2.charAt(0);
  
    // Devolver las iniciales combinadas
    const iniciales = inicialCadena1 + inicialCadena2;
  
    return iniciales;
}