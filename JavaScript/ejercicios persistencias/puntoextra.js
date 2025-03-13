//pidele el nombre (prompt) y guardalo en la web storage
function init() {

    if (localStorage.getItem("usuario") == null) {
        let user = {}
        user.nombre = prompt("Introduce tu nombre");
        user.fondo = prompt("Introduce el color de fondo");
        user.fuente = prompt("Introduce el color de fuente");
        localStorage.setItem("usuario", JSON.stringify(user))
    } else {
        let user = JSON.parse(localStorage.getItem("usuario"));
        let div = document.createElement("div");
        div.innerHTML = `
            <h1>${user.nombre}, bienvenido a la pagina</h1>
            <p>El color de fondo es ${user.fondo}</p>
            <p>El color de fuente es ${user.fuente}</p>
        `
        let contenedor = document.getElementById("contenedor");
        contenedor.appendChild(div);
        contenedor.style.background = user.fondo;
        contenedor.style.color = user.fuente;
        document.body.style.background = user.fondo;
        document.body.style.color = user.fuente;
    
    }
}

