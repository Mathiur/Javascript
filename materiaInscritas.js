let Materias = {
    Matematicas: { profesor: "Hernesto", alumno: [ "Dalto", "Cofla", "Mariana"] },
    Programacion: { profesor: "Dario", alumno: ["Mateo", "Dalto", "Mariana"] },
    Logica: { profesor: "Juan", alumno: ["Mateo", "Dalto", "Cofla",] },
    Tecnicas: { profesor: "Ignacio", alumno: ["Mateo", "Dalto", "Cofla", "Mariana"] }
}

function infoMateria(materia) {
    if (materia in Materias) {
        let profesor = Materias[materia].profesor;
        let alumnos = Materias[materia].alumno;
        document.write(`<b>El Profesor de ${materia} es:</b> ${profesor}<br>`);
        document.write(`<b>Los Alumnos de ${materia} son:</b> ${alumnos}<br>`);
    }
}

function cantClases(alumno){
    let contador = 0;
    let clasesPresentes = [];
    for (const materia in Materias) {
        if (Materias[materia].alumno.includes(alumno)) {
            contador++;
            clasesPresentes.push(materia);
        }
    }
    document.write(`El alumno ${alumno} esta en un total de <b> ${contador}</b> clases <br>Esta cursando las clases: ${clasesPresentes.join(", ")}`)
}
// Ejemplos de uso
infoMateria("Tecnicas");
cantClases("Mateo");

function InscribirMateria(alumno,materia){
    if(Materias[materia].alumno.length >= 20){
        DocumentTimeline.write(`La materia de ${materia} esta llena no es posible inscribirse`);
    }else{
        Materias[materia].alumno.push(alumno)
        document.write(`<br>El alumno <b>${alumno}</b> se ha inscrito exitosamente a ${materia}`)
    }
}
InscribirMateria("rosco","Matematicas")
















