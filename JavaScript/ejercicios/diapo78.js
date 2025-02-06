const tvSamsung = {
    Nombre: "Tv Samsung 42",
    Categoria: "Televisores",
    Unidades: 4,
    Precio: 345.95
  };

  // Lista de propiedades que debería tener un televisor
  const propiedadesRequeridas = [
    "Resolucion",
    "TipoPantalla",
    "SmartTV",
    "HDMI",
    "USB",
    "Garantia"
];

// Función para añadir propiedades al objeto
function añadirPropiedades() {
    propiedadesRequeridas.forEach(propiedad => {
        if (!(propiedad in tvSamsung)) {
            // Si la propiedad no existe, se le pide al usuario que ingrese un valor
            let valor = prompt(`Introduce el valor para la propiedad "${propiedad}" (valor por defecto: "default value"):`);
            // Si el usuario no introduce un valor, se asigna el valor por defecto
            tvSamsung[propiedad] = valor ? valor : "default value";
        }
    });
}

// Llamar a la función para añadir propiedades
añadirPropiedades();

// Mostrar la información del televisor en la página
const tvInfoDiv = document.getElementById('tvInfo');
for (const [key, value] of Object.entries(tvSamsung)) {
    tvInfoDiv.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
}