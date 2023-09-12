class Calculadora{
    constructor(){}
    suma(numero1, numero2){
        return parseInt(numero1) + parseInt(numero2);
    }
    resta(numero1, numero2){
        return parseInt(numero1) - parseInt(numero2);
    }
    multiplicacion(numero1, numero2){
        return parseInt(numero1) * parseInt(numero2);
    }
    division(numero1, numero2){
        return parseInt(numero1) / parseInt(numero2);
    }
    potencia(numero1, numero2){
        return parseInt(numero1) ** parseInt(numero2);
    }
    raizCuadrada(numero1){
        return parseInt(Math.sqrt(numero1));
    }
    raizCubica(numero1){
        return parseInt(Math.cbrt(numero1));
    }
}
const calculadora = new Calculadora();

alert("¿Que operacion quiere hacer?")
let operacion = prompt("Suma marque +,Resta marque -, Multiplicacion marque *, Division marque /, Potencia marque **,  Raiz Cuadrada marque //, Raiz cubica marque ***")
if(operacion === "+" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = calculadora.suma(numero1,numero2);
    alert("La suma es igual a " + resultado)
}else if(operacion === "-" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = calculadora.resta(numero1,numero2);
    alert("La resta es igual a " + resultado)
}else if(operacion === "*" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = calculadora.multiplicacion(numero1,numero2);
    alert("La multiplicacion es igual a " + resultado)
}else if(operacion === "/" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = calculadora.division(numero1,numero2);
    alert("La division es igual a " + resultado)
}else if(operacion === "**" ){
    let numero1 = parseInt(prompt("Ingrese el numero 1"))
    let numero2 = parseInt(prompt("Ingrese el numero 2"))
    let resultado = calculadora.potencia(numero1,numero2);
    alert("La potencia es igual a " + resultado)
}else if(operacion === "//" ){
    let numero1 = parseInt(prompt("Ingrese el numero para hallar la raiz cuadrada"))
    let resultado = calculadora.raizCuadrada(numero1);
    alert("La raiz cuadrada es igual a " + resultado)
}else if(operacion === "***" ){
    let numero1 = parseInt(prompt("Ingrese el numero para hallar la raiz cubica"))
    let resultado = calculadora.raizCubica(numero1);
    alert("La raiz cubica es igual a " + resultado)
}else{
    alert("Opercacion no valida");
}
