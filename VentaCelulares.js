class celular {
    constructor(color, peso, tamaño, resolucionDePantalla, resolucionDeCamara, memoriaRam) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDePantalla = resolucionDePantalla;
        this.resolucionDeCamara = resolucionDeCamara;
        this.memoriaRam = memoriaRam;
        this.encenddido = false;
    }

    BotonPrender() {
        if (this.encendido == false) {
            alert("El celular esta encendido");
            this.encenddido = true;
        } else {
            alert("El celular esta apagado");
        }
    }

    Reiniciar() {
        if (this.encenddido == true) {
            alert("El celular se esta reiniciando");
        } else {
            alert("El celular esta apagado")
        }
    }

    tomarFoto() {
        alert("Foto tomada con una resolucion de " + this.resolucionDeCamara);

    }

    grabarVideo() {
        alert("Video tomado con una resolucion de " + this.resolucionDeCamara);
    }

    mobilInfo() {
        return "<b>" + " Color: " + "</b>" + this.color + "<br>" +
            "<b>" + " Peso: " + "</b>" + this.peso + "<br>" +
            "<b>" + " Tamaño: " + "</b>" + this.tamaño + "<br>" +
            "<b>" + " Resolución de pantalla: " + "</b>" + this.resolucionDePantalla + "<br>" +
            "<b>" + " Resolución de cámara: " + "</b>" + this.resolucionDeCamara + "<br>" +
            "<b>" + " Memoria RAM: " + "</b>" + this.memoriaRam + "<br>"
    }
}

celular1 = new celular("azul", "15g", "5.4", "full hd", "14mpx", "256GB");
celular2 = new celular("rojo", "10g", "5.0", "hd", "12mpx", "32GB");
celular3 = new celular("negro", "5g", "6.4", "hd", "15mpx", "16GB")
document.write(`${celular1.mobilInfo()}<br>
                ${celular2.mobilInfo()}<br>
                ${celular3.mobilInfo()}<br>`);

class CelularAltaGama extends celular {
    constructor(color, peso, tamaño, resolucionDePantalla, resolucionDeCamara, memoriaRam, camaraExtra) {
        super(color, peso, tamaño, resolucionDePantalla, resolucionDeCamara, memoriaRam)
        this.camaraExtra = camaraExtra
    }
    CamaraLenta() {
        alert("Grabando en camara lenta");
    }

    ReconocimientoFacial() {
        alert("Tiene reconocimiento facial")
    }

    altaGama() {
        return this.mobilInfo() + "<b> Resolucion camara extra: </b>" + this.camaraExtra
    }
}
Celular1 = new CelularAltaGama("dorado", "6g", "8.7", "4k", "20mpx", "526GB", "full hd");
Celular2 = new CelularAltaGama("azul", "6g", "6", "4k", "18mpx", "256GB", "hd");
document.write("<b>Celulares Gama Alta</b><br>" + `${Celular1.altaGama()}<br><br>
                ${Celular2.altaGama()}
`)

class App {
    constructor(cantidadDescargas, puntuacion, peso) {
        this.cantidadDescargas = cantidadDescargas,
            this.puntuacion = puntuacion,
            this.peso = peso,
            this.instalada = false,
            this.iniciar = false
    }
    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada correctamente");
        }
    }

    desistalar() {
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desistalada correctamente");
        }
    }

    abrir() {
        if (this.iniciar == false && this.instalada == true) {
            this.iniciar = true;
            alert("App iniciada");
        }
    }

    cerrar() {
        if (this.iniciar == true && this.instalada == true) {
            alert("App cerrada");
        }
    }

    infomobil() {
        return `<br><br><b>Descargas:</b> ${this.cantidadDescargas}<br>
                <b>Puntuacion:</b> ${this.puntuacion}<br>
                <b>Peso:</b> ${this.peso}`
    }
}
app = new App("5.000","4.2 estrellas","1GB")
app2 = new App("8.000","5.0 estrellas","526MB")
document.write(app.infomobil() + app2.infomobil())
app.instalar();
app.desistalar();
