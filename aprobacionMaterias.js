let materias ={
    Matematicas:[90,4,80,"Matematicas"],
    Programacion:[95,7,75,"Programacion"],
    Logica:[70,7,80,"Logica"],
    Tecnicas:[95,9,75,"Tecnicas"]
}
let aprobacion = () =>{
    for(let materia in materias){
        console.log(materias[materia][3])
        if(materias[materia][0] >= 90){
            console.log("%c  Asistencia en orden","color:green");
        }else{
            console.log("%c  Asistencia Faltante","color:red");
        }
        if(materias[materia][1] >= 7 && materias[materia][1] <= 10){
            console.log("%c  Promedio aprobado","color:green");
        }else{
            console.log("%c  Promedio faltante","color:red");
        }
        if(materias[materia][2] >= 75){
            console.log("%c Trabajos entregados","color:green");
        }else{
            console.log("%c  Trabajos faltantes","color:red")
        }
    }
}
aprobacion();
let trabajosPracticas = "100 minutos hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

for(let i = 0; i < 14; i++){
    if(i == 0){
        console.groupCollapsed("SEMANA 1")
    }
    console.group("dia " + (i+1))
    console.log(trabajo);
    console.log(estudio);
    console.log(trabajosPracticas);
    console.log(homework);
    console.log(descanso);
    console.groupEnd();
    if(i == 7){
        console.groupEnd();
        console.groupCollapsed("SEMANA 2");
    }
}
console.groupEnd();
console.groupEnd();