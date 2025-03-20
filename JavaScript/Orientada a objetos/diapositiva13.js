class TarjetaCredito {
    //Propiedades privadas
    #numtarjeta;
    #numpin;
    #activa;
    #saldo;
    //Propiedades publicas 
    nombre;
    fechacad;
constructor(nombre, fechacad,) {
        this.nombre = nombre;
        this.fechacad = fechacad;
        this.#numtarjeta = "1324654D";
        this.#numpin = "1234";
        this.#activa = false;
        this.#saldo = 0;
    };

activa(){
    this.#activa = true;
    console.log ('La tarjeta ${this.#numtarjeta} esta activa');
}
anular(){
    this.#activa = false;
}

consultarsaldo(){
    console.log('El saldo de la tarjeta ${this.#numtarjeta} es ${this.#saldo}');
}




}
