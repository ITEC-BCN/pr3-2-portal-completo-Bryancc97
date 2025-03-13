const tvSamsung = {
  Nombre: "Tv Samsung 42",
  Categoria: "Televisores",
  Unidades: 4,
  Precio: 345.95
};
console.log(tvSamsung);
//Muestra el contenido de tvSamsung utilizando JSON
document.getElementById("tv").textContent = JSON.stringify(tvSamsung);

//Proceso inverso para que muestre solo los datos
document.getElementById("tvinversa").textContent = tvSamsung;
