/*- Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. 
Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres. */

let personas = [
    { nombre: "Natasha", sexo: "f", edad: 20 },
    { nombre: "Joaquin", sexo: "m", edad: 19 },
    { nombre: "Laura", sexo: "f", edad: 43 },
    { nombre: "Mauro", sexo: "m", edad: 43 },
    { nombre: "Pedro", sexo: "m", edad: 10 }
];

let suma = 0;
let sumaEdadF = 0;
let cantF = 0;
let mayorF = 0;
let menorM = 0;
let nombreMayor = "";

// recorro la lista
for (let i = 0; i < personas.length; i++) {
    let persona = personas[i];
    suma = suma + persona.edad;

    if (persona.sexo === "f") {
        sumaEdadF = sumaEdadF + persona.edad;
        cantF = cantF + 1;

        // Si todavía no hay ninguna mujer o si esta es más grande
        if (mayorF === 0 || persona.edad > mayorF) {
            mayorF = persona.edad;
            nombreMayor = persona.nombre;
        }
    }

    if (persona.sexo === "m") {
        if (menorM === 0 || persona.edad < menorM) {
            menorM = persona.edad;
        }
    }
}

// cálculo de promedios
let promedioEdades = 0;
let promedioEdadF = 0;

if (personas.length > 0) {
    promedioEdades = suma / personas.length;
}

if (cantF > 0) {
    promedioEdadF = sumaEdadF / cantF;
}

// resultados
console.log("Promedio de edad general:", promedioEdades);
console.log("Mujer con mayor edad:", nombreMayor);
console.log("Hombre con menor edad:", menorM);
console.log("Promedio de edad de mujeres:", promedioEdadF);
