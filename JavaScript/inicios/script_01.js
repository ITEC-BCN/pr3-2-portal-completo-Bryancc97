/*Funcion*/
function obraModal(missatge) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = missatge;
    modal.style.display = "flex";
}
/*Accede al elemento close modal*/
document.getElementById("close-modal").addEventListener('click', function () {
    const modal = document.getElementById("moda");
    modal.style.display = "none"
})
/*Evento ventana*/
window.addEventListener('load', function () {
    /*Utiliza  la funcion obramodal*/
    obraModal("Hola Mundo");
    this.document.getElementById("close-modal").addEventListener('click', function () {
        /*Creamos una constante nueva que pregunta el nombre y modifica el texto de hola mundo para añadir el nombre*/
        const nombre = prompt("Com et dius ?");
        console.log(nombre);
        if (nombre) {
            obraModal(`Hola, ${nombre}!`)
        }
    })
})

