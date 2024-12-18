console.log("Script cargado con async.");
alert("Este es un script cargado con async.");

/**
 * El script se descarga en paralelo al HTML.
El navegador ejecuta el script tan pronto como termina de descargarse, lo que podría interrumpir el renderizado del HTML.
Es impredecible si el contenido HTML se renderiza antes o después del script.
 */