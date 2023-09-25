function crearPalabra(letra, numero) {
    // Verificar que el número sea un valor válido
    if (typeof numero !== 'number' || numero <= 0) {
      return 'Número inválido';
    }
  
    // Crear la palabra con la letra repetida
    const palabraGenerada = letra.repeat(numero);
  
    return palabraGenerada;
}