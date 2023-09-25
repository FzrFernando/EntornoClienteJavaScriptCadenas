function validarDNI(numeroDNI) {
    // Expresión regular para verificar el formato del DNI
    const dniRegex = /^(\d{8})([A-Za-z])?$/;
  
    // Comprobar si el número de DNI coincide con el formato esperado
    if (!dniRegex.test(numeroDNI)) {
      return false;
    }
  
    // Extraer el número y la letra del DNI
    const numero = numeroDNI.slice(0, 8);
    const letraProvida = numeroDNI.charAt(8).toUpperCase();
  
    // Array con las letras válidas para un DNI
    const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';
    
    // Calcular la letra correspondiente al número
    const letraCalculada = letrasValidas[numero % 23];
  
    // Comparar la letra proporcionada con la letra calculada (en mayúsculas)
    return letraProvida === letraCalculada;
}
  
// Pruebas con diferentes números de DNI
console.log(validarDNI('12345678Z')); // true
console.log(validarDNI('87654321A')); // true
console.log(validarDNI('12345678A')); // false
console.log(validarDNI('87654321Z')); // false
console.log(validarDNI('1234567X'));  // false (formato incorrecto)