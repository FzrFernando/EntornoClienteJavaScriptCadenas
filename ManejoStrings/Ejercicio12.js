function tieneLetra(cadena, letra) {
    // Convertir la cadena y la letra a minúsculas (o mayúsculas, según prefieras)
    const cadenaMinusculas = cadena.toLowerCase();
    const letraMinusculas = letra.toLowerCase();
  
    // Utiliza indexOf para buscar la letra en la cadena (en minúsculas)
    const indice = cadenaMinusculas.indexOf(letraMinusculas);
  
    // Si indexOf devuelve -1, la letra no se encuentra en la cadena
    // Si devuelve un valor diferente de -1, la letra está presente
    return indice !== -1;
}