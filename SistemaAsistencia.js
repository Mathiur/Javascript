let ArrayEstudiantes = [];
for (let i = 0; i < 5; i++) {
    let nombre = prompt("¿Ingrese el nombre del alumno? " + (i + 1));
    let asistencia = prompt("Ingrese las asistencias de " + nombre + " separadas por un espacio si esta presente (p) y ausente (a)");
    ArrayEstudiantes.push({
        nombre: nombre,
        asistencia: asistencia.split(" ")
    })
}

for (let i = 0; i < ArrayEstudiantes.length; i++) {
    let presente = 0;
    let ausente = 0;
    for(let j = 0; j < ArrayEstudiantes[i].asistencia.length; j++){
        if(ArrayEstudiantes[i].asistencia[j] === "a"){
            ausente++;
        }else{
            presente++;
        }
    }
    let porcentaje = (ausente / 30)*100;
    ArrayEstudiantes[i].porcentaje = porcentaje;
    ArrayEstudiantes[i].ausente = ausente;
    ArrayEstudiantes[i].presente = presente;
}

for(let i = 0; i < ArrayEstudiantes.length; i++){
    let situacionFin = "";
    if(ArrayEstudiantes[i].porcentaje <= 10){
        situacionFin = "Aprobado";
    }else{
        situacionFin = "Reprobado";
    }
    document.write(ArrayEstudiantes[i].nombre + " : Ausencias = " + ArrayEstudiantes[i].ausente + ", Presente = " + ArrayEstudiantes[i].presente + ", " + situacionFin + "<br>")
}


