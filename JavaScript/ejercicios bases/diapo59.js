/*Ejercicio 1*/
//Array creada al final

function arraysuma(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            suma += lista[i];
        }
        
    }
    return suma;
}
console.log(arraysuma([2, 5, 6, 7, 8, 9, 10, 4]));

//Array ya creada
let numeros = [2, 4, 5, 6, 7, 8, 3, 1, 10, 4]; //Resultado 34

function sumarPares() {
  let sumaTotal = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      sumaTotal += numeros[i];
    }
  }
  
  return sumaTotal;
}

console.log(sumarPares());


/*Ejercicio 2 */
function ordenDatos(datos) {

  let nombre = datos[5];
  let apellido = datos[0];
  
  //Notas convertidas a numeros 
  let notas = datos.slice(1, 5).map(Number);
  
  // Calcular la nota media 
  let sumaNotas = notas.reduce((acc, nota) => acc + nota, 0);
  let notaMedia = sumaNotas / notas.length;
  
  //Array Ordenada
  let resultado = [nombre, apellido, notaMedia];
  
  // Devolvemos el resultado separado por ','
  return resultado.join(',');
}

console.log(ordenDatos(["Rodriguez", "8", 9, '5', 4, 'Clara'])); 
console.log(ordenDatos(["apasdasd", "8", 9, '5', 4, 'nombrenombrenombre'])); 


/*Ejercicio 3 */
function filtroletra(letra){
    return letra.filter(letra=> !letra.toLowerCase().startsWith('z'));
}

console.log (filtroletra(["Bob", "Alex", "Zoello"]));
console.log (filtroletra(["León", "Zebra", "Gacela"]));
console.log (filtroletra(["Mercedes", "Bmw", "Audi", "Porche"]));
