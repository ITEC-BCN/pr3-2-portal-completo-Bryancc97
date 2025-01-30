const tvSamsung = {
    nombre: "Tv Samsung 42",
    categoria : "Televisores",
    unidades: 4,
    precio: 345.95
}
tvSamsung.getImporte = function(){
    return 'Unidades: ' + this.unidades + ', precio/u: ' + this.precio + ', importe total: ' + this.unidades * this.precio;
  }

tvSamsung.getImporte2 = function(){
    return this.unidades * this.precio;
  }
const importeTotalElement = document.getElementById('importe-total'); // Acceder al elemento HTML
importeTotalElement.textContent = tvSamsung.getImporte2();

console.log(tvSamsung.getImporte()); 
console.log(tvSamsung.getImporte2());
 