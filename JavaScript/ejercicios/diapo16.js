/*Ejercicio 1 */
function obtenStringEmpiezaConAs(str) {
    // Comprobamos si la palabra empieza con AS
    if (str.startsWith('As')) {
      return str;  // No se modifica si inicia con AS
    } else {
      return 'As' + str;  //Añade AS a la palabra
    }
  }
  
  // Ejemplos de uso
  console.log(obtenStringEmpiezaConAs('ASTerisco'));  // 'Asterisco'
  console.log(obtenStringEmpiezaConAs('TEroide'));    // 'Asteroide'
  console.log(obtenStringEmpiezaConAs(''));           // ''
  

/*Ejercicio 2 */
function eliminaCaracterPosicion(str, num) {
    // Comprobamos si el número es menor que la longitud del string
    if (num < str.length) {
      // Si es menor, devolvemos el string sin el carácter en la posición indicada
      return str.slice(0, num) + str.slice(num + 1);
    } else {
      // Si no es menor, devolvemos el string original
      return str;
    }
  }
  
  // Ejemplos de uso
  console.log(eliminaCaracterPosicion('murcielago', 2));  // Elimina la letra 'r' en la posición 2 
  console.log(eliminaCaracterPosicion('rinoceronte', 12));



/*Ejercicio 3 */
function intercambioletras(texto){
    if(texto.lenght > 0){
        return texto.slice(-1) + texto.slice(1, -1) + texto.slice(0, 1);
    }
    else{
        return "Falta texto";
    }
}

// Ejemplos de uso
console.log(intercambioletras("asdasdasd"))