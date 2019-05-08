//Declaración de variables
var nombreUsuario = "";
var saldoCuenta = 4000;
var limiteExtraccion = 1000;
var valorAgua = 350;
var valorLuz = 210;
var valorInternet = 570;
var valorTelefono = 425;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function ingresarSuma(){
    var sumaDinero = prompt("Indique la cantidad");    
    sumaDinero = parseInt(sumaDinero);
    return sumaDinero;
}

function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("Ingrese el nuevo limite de extracción");
    nuevoLimite = parseInt(nuevoLimite);
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var sumaDinero = ingresarSuma();
    if(sumaDinero % 100 == 0){
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
    } else alert("Este cajero solo entrega billetes de 100");
}
    

function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var sumaDinero = ingresarSuma();
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
    var elegirServicio = prompt("Eliga el servicio que desea pagar:\n"
                               +"1- Agua\n"+"2- Teléfono\n"+"3- Luz\n"+"4- Internet")
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