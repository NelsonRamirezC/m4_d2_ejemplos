import Persona from "./clases/Persona.js"; //aquí importamos lo que exportamos en otro archivo
import Calculadora from "./clases/Calculadora.js";

let persona = new Persona("Carlos", "Soto", "1985-01-01");

console.log(persona.edad());

console.log("Resultado de la suma: ", Calculadora.sumar(5, 6));

//EJEMPLOS CON CLASE CALCULADORA
