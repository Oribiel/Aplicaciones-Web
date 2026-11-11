import {saludar, PI, config} from './saludo.mjs';

console.log(saludar("Josmara"));
console.log(`El valor de PI es: ${PI}`);
console.log(`La URL de la API es: ${config.url_api}`);

import Estudiante from './Estudiante.js';
import Persona from './Persona.js';

let estudiante = new Estudiante();
estudiante.nombre = "Josmara";
estudiante.carrera = "ISW";

console.log(estudiante.saludar());
console.log(estudiante.estudiar());
console.log(estudiante.verPromedio());

let persona = new Persona("Josmara", 20);
console.log(persona.saludar());