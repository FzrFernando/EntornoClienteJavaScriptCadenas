function generarNombre2(cadena1,cadena2,cadena3){
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5){
        console.log("error");
    } else {
        let longitud1 = cadena1.length;
        let longitud2 = cadena2.length;
        let longitud3 = cadena3.length;
        console.log(`${cadena1.charAt(longitud1-1)} ${cadena2.charAt(longitud2-1)} ${cadena3.charAt(longitud3-1)}`)
    }
}