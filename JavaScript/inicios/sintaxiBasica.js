let valor =  prompt("Ingresa un valor")

let i = 0; // Inicialización de la variable contador
// Condición: Mientras la variable contador sea menor de 5
while (i < 5) {
    console.log("Valor de i:", i);
    i = i + 1; // Incrementamos el valor de i
}

// for (inicialización; condición; incremento)
for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}
// doble contador
for (let i = 0, j = 5; i < 5; i++, j--) {
    console.log("Valor de i y j:", i, j);
}
console.log(valor);