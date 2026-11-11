import Persona from "./Persona.js";

export default class Estudiante extends Persona {
    constructor() {
        super();
        this.carrera = "";
    }

    estudiar(){
        return `${this.nombre} está estudiando ${this.carrera}`
    }

    #calcularPromedio(){
        return 65;
    }
    verPromedio(){
        return this.#calcularPromedio();
    }
}