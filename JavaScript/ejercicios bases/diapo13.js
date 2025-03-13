/*Ejercicio 1*/
function mayor (num1, num2){
    if(num1 > num2) {
        console.log(`${num1} es mayor que ${num2}`);
    } else if (num2 > num1){
        console.log(`${num2} es mayor que ${num1}`);
    } else {
        console.log (`Ambos numeros son iguales`);
    }
}
mayor(10, 20);

/*Ejercicio 2*/
/*Diferente forma para llamar al resultado*/
function multiplicar (a, b){
    let resultado = 0;
    for( let i = 0; i < b; i++){
        resultado += a;
    }
    return resultado;
}
console.log(multiplicar(5, 3));

/*Ejercicio 3*/
/*Re utilizamos la funcion anterior añadiendo
*el 3 argumento en la nueva funcion y llamandolo en el retur 
* + el resultado
*/

function multi3 (a, b, c){
    let resultadodos = multiplicar(a, b);
    return multiplicar(resultadodos, c);
}
console.log(multi3(2, 3, 4));

/*Ejercicio 4*/

function calcnota(a, b, c){
    let nota = (a + b + c) / 3;
    return nota.toFixed(1);
}
console.log(calcnota(5, 6, 8));

/*Ejercicio 5*/
function sumaCubos(numero) {
    // Convertir el número a una cadena para separar sus cifras
    let cifras = numero.toString().split('');
    
    // Calcular la suma de los cubos de las cifras
    let suma = cifras.reduce((acc, cifra) => acc + Math.pow(parseInt(cifra), 3), 0);
    
    return suma;
}

function encontrarNumerosConPropiedad() {
    let numeros = [];
    
    // Iterar desde 1 hasta 9999
    for (let i = 1; i < 10000; i++) {
        // Si la suma de los cubos de las cifras es igual al número
        if (sumaCubos(i) === i) {
            numeros.push(i);  // Añadir el número a la lista
        }
    }
    
    return numeros;
}

// Llamar a la función y mostrar los números encontrados
let numerosConPropiedad = encontrarNumerosConPropiedad();
console.log(numerosConPropiedad);


/*Ejercicio 6*/

function calcularCubo(numero) {
    // Verificar si el parámetro es un número
    if (isNaN(numero)) {
        alert("El valor ingresado no es un número.");
        return false;
    }

    // Verificar si el número es entero
    if (!Number.isInteger(numero)) {
        alert("El valor ingresado no es un número entero.");
        return false;
    }

    // Si todo está correcto, devolver el cubo del número
    return Math.pow(numero, 3);
}
console.log(calcularCubo(9));

