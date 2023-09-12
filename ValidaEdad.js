const ValidacionEntrada = (time) => {
    let edad = prompt("Cuantos años tienes");
    let gratis = false;
    parseInt(edad);
    if (edad >= 18) {
        if (time >= 2 && time < 7 && gratis == false) {
            alert("Puede ingresar gratis");
            gratis = true;
        }else{
            alert("Puede, pasar pero tiene que pagar la entrada");
        }
    } else {
        alert("No puede ingresar");
    }
}
ValidacionEntrada(2);
ValidacionEntrada(3);
ValidacionEntrada(1);
