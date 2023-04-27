class Animal {
    constructor(nombre, chip, propietario) {
        this.nombre = nombre;
        this.chip = chip ||= "S/C";
        this.propietario = propietario;
    }

    comunicarse() {
        console.log("Soy un animal");
    }
}

class Gato extends Animal {
    // generamos la herencia
    constructor(nombre, chip, propietario, propiedadGato) {
        super(nombre, chip, propietario);
        this.propiedadGato = propiedadGato;
    }

    maullar() {
        console.log("Miauuu!");
    }

    comunicarse() {
        console.log("hola, soy un gato... Miauuu!");
    }
}

class Perro extends Animal {
    // generamos la herencia
    constructor(nombre, chip, propietario, propiedadPerro) {
        super(nombre, chip, propietario);
        this.propiedadPerro = propiedadPerro;
    }

    ladrar() {
        return "Guauuu!";
    }

    comunicarse() {
        //console.log("hola, soy un perro..." + this.ladrar());
        super.comunicarse();
    }
}

let gato = new Gato("Cuchito", "0001", "Pedro", "Es un gato");

let perro = new Perro("Cachupin", "0002", "Carlos", "Es un perro");

gato.comunicarse();

perro.comunicarse();
