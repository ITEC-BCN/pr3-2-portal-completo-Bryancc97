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