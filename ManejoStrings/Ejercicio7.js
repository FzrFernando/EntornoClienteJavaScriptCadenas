function devuelveMasLarga2(cadena1,cadena2,cadena3){
    if (cadena1.length > cadena2.length && cadena1.length > cadena3.length){
        console.log(cadena1);
    }
    else if (cadena1.length < cadena2.length && cadena2.length > cadena3.length){
        console.log(cadena2)
    }
    else if (cadena1.length < cadena3.length && cadena2.length < cadena3.length){
        console.log(cadena3)
    }
    else {
        console.log("Hay al menos dos cadenas iguales");
    }
}