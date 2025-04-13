let n1 = 200;
let n2 = 356;
let n3 = 234;

let mayor = 0; // Inicializamos mayor en 0
let menor = 0; // Inicializamos menor en 0

// calcular el mayor
if (n1 > n2 && n1 > n3) {
    mayor = n1;  
} else if (n2 > n1 && n2 > n3) {
    mayor = n2;  
} else {
    mayor = n3;  
}

// calcular el menor
if (n1 < n2 && n1 < n3) {
    menor = n1;  
} else if (n2 < n1 && n2 < n3) {
    menor = n2;  
} else {
    menor = n3; 
}

console.log("El valor mayor es: " + mayor);
console.log("El valor menor es: " + menor);