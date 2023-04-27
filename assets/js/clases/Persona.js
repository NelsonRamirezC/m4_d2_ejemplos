/* Crear una clase Persona conforme al siguiente detalle:
Atributos: nombre, apellido y fechaNacimiento
Métodos: calcularEdad(), nombreCompleto()
 */

export default class Persona {
    //exportamos solo esta nada y nada más
    constructor(nombre, apellido, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
    }

    edad() {
        let hoy = moment();
        let edad = hoy.diff(this.fechaNacimiento, "years");
        return edad;
    }

    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
}
