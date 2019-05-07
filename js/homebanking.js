//Declaración de variables
var nombreUsuario = "";
var saldoCuenta = 4000;
var limiteExtraccion = 1000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("Ingrese el nuevo limite de extracción");
    nuevoLimite = parseInt(nuevoLimite);
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var sumaDinero = prompt("Indique una cantidad a retirar");
    sumaDinero = parseInt(sumaDinero);
    if(sumaDinero == Number(sumaDinero) && (sumaDinero <= limiteExtraccion)) 
    {
        if((sumaDinero <= saldoCuenta))
        {
            saldoCuenta -= sumaDinero;
        actualizarSaldoEnPantalla();
        alert("Usted extrajo: " + sumaDinero 
              + "\nSu saldo anterior: " + saldoAnterior
              + "\nSu saldo actual: " + saldoCuenta);
        } else
        {
            alert("La cuenta no posee fondos suficientes");
        }
    } else 
    {
        alert("Usted ha superado el limite de extracción");
    }
}

function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var sumaDinero = prompt("Indique una cantidad a ingresar");
    sumaDinero = parseInt(sumaDinero);
    if(sumaDinero == Number(sumaDinero)){
        saldoCuenta += sumaDinero;
        actualizarSaldoEnPantalla();
        alert("Usted deposito: " + sumaDinero 
              + "\nSu saldo anterior: " + saldoAnterior
              + "\nSu saldo actual: " + saldoCuenta);
    } else {
        alert("El valor ingresado no es valido");
    }
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {
    nombreUsuario = prompt("Ingresa el nombre de tu usuario");
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}