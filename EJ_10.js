// - Sumar solo los elementos pares de un array.

let numeros = [123, 53, 18, 3, 22];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // evalúa solo el número
        suma = suma + numeros[i]; // Acumula si es par
    }
}

console.log("La suma de los pares es:", suma);