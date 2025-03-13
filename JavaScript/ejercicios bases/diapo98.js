notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]

//Calcula la nota media 
let media = notas.reduce((suma,nota) => suma+=nota)/notas.length

function reducev2(nota, suma){
    for(nota of notas){
        suma = suma + nota;
    }
    return suma; 
}

console.log(media) 

//Calcula la primera nota superior a 5
let notaSuperior5 = notas.find(nota => nota > 5)

console.log(notaSuperior5)

//Las notas son sobre 10, cambialas a sobre 20
let notasSobre20 = notas.map(nota => nota*2)

console.log(notasSobre20)