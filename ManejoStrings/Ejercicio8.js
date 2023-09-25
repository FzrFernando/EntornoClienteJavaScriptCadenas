function generarNombre(cadena1,cadena2,cadena3){
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5){
        console.log("error");
    } else {
        console.log(`${cadena1.charAt(0)} ${cadena2.charAt(0)} ${cadena3.charAt(0)}`)
    }
}