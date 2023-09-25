function generarNombre3(cadena1,cadena2,cadena3){
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5){
        console.log("error");
    } else {
        console.log(`${cadena1.substring(cadena1.length-4,cadena1.length-1)} ${cadena2.charAt(cadena2.length-4,cadena2.length-1)} ${cadena3.charAt(cadena3.length-4,cadena3.length-1)}`)
    }
}