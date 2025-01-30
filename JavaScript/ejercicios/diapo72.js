const tvSamsung = {
    nombre: "Tv Samsung 42",
    categoria : "Televisores",
    unidades: 4,
    precio: 345.95
}
tvSamsung.getImporte = function(){
    return 'Unidades: ' + this.unidades + ', precio/u: ' + this.precio + ', importe total: ' + this.unidades * this.precio;
  }

console.log(tvSamsung.getImporte()); 
