class Jugador {
    nombre = "";
    vida = 100;
    mana = 100;
    habilidad = "";
    op = 0;
    op2 = 0;
    objeto() {
        constructor(nombre)
        nombre = nombre;

    }
    elegir() {
        console.log("1.- venom");
        console.log("2.- hombre arena");
        console.log("3.- lagarto");
        console.log("4.- electro");
    }
    asignarNombre() {
        var op = parseInt(prompt("elije a tu personaje"));
        switch (op) {
            case 1:
                personaje1.nombre = "venom";
                personaje1.habilidad = "simbionte";
                break;
            case 2:
                personaje1.nombre = "hombre de are";
                personaje1.habilidad = "terremoto";
                break;
            case 3:
                personaje1.nombre = "lagarto";
                personaje1.habilidad = "mordida";
                break;
            case 4:
                personaje1.nombre = "electro";
                personaje1.habilidad = "rayos";
                break;
            default:
                break;
        }
    }
    asignarNombre2() {
        var op2 = parseInt(prompt("elije a tu personaje"));
        switch (op2) {
            case 1:
                personaje2.nombre = "venom";
                personaje2.habilidad = "simbionte";
                break;
            case 2:
                personaje2.nombre = "hombre de arena";
                personaje2.habilidad = "terremoto";
                break;
            case 3:
                personaje2.nombre = "lagarto";
                personaje2.habilidad = "mordida";
                break;
            case 4:
                personaje2.nombre = "electro";
                personaje2.habilidad = "rayos";
                break;
            default:
                break;
        }
    }

    /*jugarDenuevo() {

        do {
            console.log("Desea volver a jugar?  1.-Si  2.-No");
            this.vuelta = prompt("introdusca una opcion");
            this.vuelta = parseInt(this.vuelta);
            if (this.vuelta = 1) {
                this.r = false;
                this.aux = true;
                console.log("si");
            } else if (this.vuelta = 2) {
                this.r = false;
                this.aux = false;
                console.log("no");
            } else {
                console.log("valor incorrecto");
                this.r = true;
            }
        } while (this.r);
        return this.aux;
    }*/
    curar() {
        personaje1.vida += 20;
        personaje1.mana -= 40;
        this.status();
    }
    curar2() {
        personaje2.vida += 20;
        personaje2.mana -= 40;
        this.status2();
    }
    atacar() {
        personaje2.vida -= 20;
        personaje1.mana -= 40;
    }
    atacar2() {
        personaje2.vida -= 20;
        personaje2.mana -= 40;
    }
    especial() {
        personaje2.vida -= 50;
        personaje2.mana += 70;
    }
    especial2() {
        personaje1.vida -= 50;
        personaje1.mana += 70;
    }
    status() {
        console.log(personaje1);
        console.log(this);
    }
    status2() {
        console.log(personaje2);
        console.log(this);
    }

    turnos() {
        console.log("1.-atacar");
        console.log("2.-curar");
        console.log("3.-habilidad especial");
        var tiros = 0;
        do {

            var y = parseInt(prompt("introduce una opcion"));
            var x = parseInt(prompt("introduce una opcion"));
            if (personaje1.mana > 0) {
                switch (y) {
                    case 1:
                        this.atacar();
                        break;
                    case 2:
                        this.curar();
                        break;
                    case 1:
                        this.especial();
                        break;

                    default:
                        break;

                }
                if (personaje2.mana > 0) {
                    switch (x) {
                        case 1:
                            this.atacar2();
                            break;
                        case 2:
                            this.curar2();
                            break;
                        case 3:
                            this.especial2();
                            break;

                        default:
                            break;

                    }
                }
            }

            if (personaje1.vida >= 0) {
                console.log("el ganador es: " + personaje1);
                tiros = 5;
            }
            if (personaje2.vida >= 0) {
                console.log("el ganador es: " + personaje2);
                tiros = 5;
            }
            tiros++;
        }
        while (tiros < 5);


    }
    ejecutarMetodos() {
        this.elegir();
        this.asignarNombre();
        this.asignarNombre2();
        this.turnos();
        //this.jugarDenuevo();


    }
}
var personaje1 = new Jugador("jugador1");
var personaje2 = new Jugador("jugador2");
var miObjeto = new Jugador();
miObjeto.ejecutarMetodos();