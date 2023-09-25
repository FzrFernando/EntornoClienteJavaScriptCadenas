function toCase(cadena) {
    // Convertir la cadena a minúsculas
    const minuscCadena = cadena.toLowerCase();
    
    // Agregar un guión medio
    const cadenaConGuion = minuscCadena + "-";
    
    // Convertir la cadena a mayúsculas
    const mayuscCadena = cadena.toUpperCase();
    
    // Combinar las tres partes
    const resultado = minuscCadena + '-' + mayuscCadena;
    
    return resultado;
}