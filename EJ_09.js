// - Obtener la suma de los elementos de un array.

let numeros = [12, 5, 68];
let suma = 0;

for (let i = 0; i < numeros.length; i++) { //forma de recorrer un array
    suma = suma + numeros[i]; //acumulo la sum de los elementos
}

console.log("La suma es:", suma); // muestro la suma de todos los elementos