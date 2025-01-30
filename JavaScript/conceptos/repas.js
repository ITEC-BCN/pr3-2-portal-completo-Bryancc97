var nota = 10;
console.log("He realizado mi examen y ");
// Nota: Este ejemplo NO es equivalente al ejemplo anterior (leer abajo)
switch (nota) {
 case 10:
   calificacion = "Sobresaliente";
   break;
 case 9:
 case 8:
// tanto para 9 como para 8 entra aquí, luego con break no sigue evaluando.
   calificacion = "Notable";
   break;
 case 7:
 case 6:
   calificacion = "Bien";
   break;
 case 5:
   calificacion = "Suficiente";
   break;
 case 4:
 case 3:
 case 2:
 case 1:
 case 0:
   calificacion = "Insuficiente";
   break;
 default:
   // Cualquier otro caso
   calificacion = "Nota errónea";
   break;
}
console.log("He obtenido un: ", calificacion);

const alumno = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 25,
  curso: "Dam",
  schoolshooter: "Si",
  pentakill: 2
}
// Acceder a un valor de un objeto
console.log(alumno.nombre);
console.log(alumno.schoolshooter);
//alumno.schoolshooter = 2;
console.log(alumno.schoolshooter);

alumno.getInfo = function(){
  return 'El alumno ' + this.nombre + ' tiene ' + this.edad + ' años ' + ' es Scholshooter? ' + this.schoolshooter + ', consigui pentakill? ' + this.pentakill;
}
// uso
console.log(alumno.getInfo());