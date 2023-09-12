let suma = (numero1, numero2) =>{
    return parseInt(numero1) + parseInt(numero2);
}
let resta = (numero1, numero2) =>{
    return parseInt(numero1) - parseInt(numero2);
}
let multiplicacion = (numero1, numero2) =>{
    return parseInt(numero1) * parseInt(numero2);
}
let division = (numero1, numero2) =>{
    return parseInt(numero1) / parseInt(numero2);
}
let potencia = (numero1, numero2) =>{
    return parseInt(numero1) ** parseInt(numero2);
}

alert("¿Que operacion quiere hacer?")
let operacion = prompt("Suma marque +, Resta marque -, Multiplicacion marque *, Division marque /, Potencia marque **")
if(operacion === "+" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = suma(numero1,numero2);
    alert("La suma es igual a " + resultado)
}else if(operacion === "-" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = restaa(numero1,numero2);
    alert("La resta es igual a " + resultado)
}else if(operacion === "*" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = multiplicacion(numero1,numero2);
    alert("La multiplicacion es igual a " + resultado)
}else if(operacion === "/" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = division(numero1,numero2);
    alert("La division es igual a " + resultado)
}else if(operacion === "**" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = potencia(numero1,numero2);
    alert("La potencia es igual a " + resultado)
}else{
    alert("Opercacion no valida");
}