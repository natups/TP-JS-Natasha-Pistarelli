// - Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal

let palabra = "alfajor";
let cantLetras = {}; // objeto vacio

for (let i = 0; i < palabra.length; i++) { // recorro el array segun la cant deletras de la palabra con "length"
    let letra = palabra[i];

    if (cantLetras[letra]) {
        cantLetras[letra]++; // si ya existe, sumo 1
    } else {
        cantLetras[letra] = 1; // si no existe, la agrego con 1
    }
}

// muestro el resultado
console.log(cantLetras);