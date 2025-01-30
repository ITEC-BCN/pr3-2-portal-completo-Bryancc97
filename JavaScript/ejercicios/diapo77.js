const tvSamsung = {
  Nombre: "Tv Samsung 42",
  Categoria: "Televisores",
  Unidades: 4,
  Precio: 345.95
};


// Lista de propiedades que debería tener un televisor
const propiedadesTelevisor = ["Resolucion", "Tamaño", "SmartTV", "HDMI", "USB", "WiFi"];
// Añadir características iterativamente
propiedadesTelevisor.forEach(propiedad => {
  if (!tvSamsung.hasOwnProperty(propiedad)) {
      const valor = prompt(`Introduce el valor para "${propiedad}":`);
      tvSamsung[propiedad] = valor || "default value"; // Si el usuario no introduce nada, se asigna "default value"
  }
});
// Método para mostrar toda la información del televisor
tvSamsung.mostrarInformacion = function () {
  let info = `<h2>Información del Televisor</h2>`;
  for (const [key, value] of Object.entries(this)) {
      if (typeof value !== 'function') {
          info += `<p><strong>${key}:</strong> ${value}</p>`;
      }
  }
  return info;
};

// Mostrar la información en el HTML
const informacionElement = document.getElementById('informacion');
informacionElement.innerHTML = tvSamsung.mostrarInformacion();