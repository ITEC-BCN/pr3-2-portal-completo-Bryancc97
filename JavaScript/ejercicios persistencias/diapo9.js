//pidele el nombre (prompt) y guardalo en una cookie, si la cookie existe lee la cookie y saludalo por el nombre
function init() {
    var nombre = prompt("Introduce tu nombre");
    document.cookie = "nombre=" + nombre;
    if(document.cookie != ""){
        var cookie = document.cookie;
        var arrayCookie = cookie.split("=");
        alert("Hola " + arrayCookie[1]);
    }
}
init();












/*document.cookie = "nombre=Juan";
document.cookie = "apellido=Perez";
function alertCookie(){
    alert(document.cookie);
}
alertCookie();

function init() {
    if(document.cookie !=""){
        alertCookie()
    }else {
        document.cookie = "nombre=Juan";
        document.cookie = "apellido=Perez";
    }

}

console.log(document.cookie);*/