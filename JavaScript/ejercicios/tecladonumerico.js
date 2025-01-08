/* Version Ivan numerico creado numero por numero
//cogemos el div donde insetrar el resto de div's
let divContenedor = document.getElementById('contenedor');
//Creamos div's y añadimos valor + Class
let botonNum1 = document.createElement('div');
botonNum1.innerHTML = '1';
botonNum1.className="botonNumero";
let botonNum2 = document.createElement('div');
botonNum2.innerHTML = '2';
botonNum2.className="botonNumero";
let botonNum3 = document.createElement('div');
botonNum3.innerHTML = '3';
botonNum3.className="botonNumero"
let botonNum4 = document.createElement('div');
botonNum4.innerHTML = '4';
botonNum4.className="botonNumero";
let botonNum5 = document.createElement('div');
botonNum5.innerHTML = '5';
botonNum5.className="botonNumero";
let botonNum6 = document.createElement('div');
botonNum6.innerHTML = '6';
botonNum6.className="botonNumero";
let botonNum7 = document.createElement('div');
botonNum7.innerHTML = '7';
botonNum7.className="botonNumero";
let botonNu8 = document.createElement('div');
botonNu8.innerHTML = '8';
botonNu8.className="botonNumero";
let botonNum9 = document.createElement('div');
botonNum9.innerHTML = '9';
botonNum9.className="botonNumero";

// Actualizamos HTML
divContenedor.appendChild(botonNum1);
divContenedor.appendChild(botonNum2);
divContenedor.appendChild(botonNum3);
divContenedor.appendChild(botonNum4);
divContenedor.appendChild(botonNum5);
divContenedor.appendChild(botonNum6);
divContenedor.appendChild(botonNum7);
divContenedor.appendChild(botonNu8);
divContenedor.appendChild(botonNum9);
*/

/* Version 2 Ainara creacion numeros con bucles  */
const contenedor = document.getElementById("contenedor");

for(let i = 1; i <= 9; i++){
let botonTeclado = document.createElement('p');
botonTeclado.innerHTML = i;
botonTeclado.className = "botonNumero";
contenedor.appendChild(botonTeclado)
}