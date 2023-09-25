function crearPalabra(letra, numero) {
    // Verificar que el número sea un valor válido
    if (typeof numero !== 'number' || numero <= 0) {
      return 'Número inválido';
    }
  
    // Convertir la letra a mayúsculas
    letra = letra.toUpperCase();
  
    // Crear la palabra con la letra en mayúsculas repetida
    const palabraGenerada = letra.repeat(numero);
  
    return palabraGenerada;
}