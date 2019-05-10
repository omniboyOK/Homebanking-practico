//Declaración de variables
var nombreUsuario = "";
var saldoCuenta = 4000;
var limiteExtraccion = 1000;
var valorAgua = 350;
var valorLuz = 210;
var valorInternet = 570;
var valorTelefono = 425;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoDeSeguridad = 1111;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
//Funcion para retener dinero de la cuenta si el codigo de seguridad esta mal ingresado
function retenerDinero(){
    saldoCuenta = 0;
    alert("Codigo incorrecto. Su dinero ha sido retenido por cuestiones de seguridad");
}

//Funcion para consultar una suma de dinero determinada por el usuario
function consultarSuma(){
    var sumaDinero = prompt("Indique la cantidad");    
    if(isNaN(sumaDinero)){
        return sumaDinero;
    } else alert("El valor ingresado no es valido"); 
}

//Función para sustraer un valor de la cuenta
function restarSuma(sumaDinero, tipoExtraccion, servicio){
    var saldoAnterior = saldoCuenta;
//Si la suma de dinero no supera al saldo de la cuenta, evalua el caso
    if((sumaDinero <= saldoCuenta)){
        switch(tipoExtraccion){
            case "extraccion" :
                if(sumaDinero % 100 == 0){
                    if(sumaDinero <= limiteExtraccion){
                    saldoCuenta -= sumaDinero;
                actualizarSaldoEnPantalla();
                alert("Usted extrajo: " + sumaDinero 
                    + "\nSu saldo anterior: " + saldoAnterior
                    + "\nSu saldo actual: " + saldoCuenta);
                    } else alert("Usted ha superado el limite de extracción");
                } else alert("Este cajero solo entrega billetes de 100");                
                break;

            case "pagarServicio" :
                saldoCuenta -= sumaDinero;
                alert("Usted pagó el servicio "+ servicio 
                    + "\nSu saldo anterior: " + saldoAnterior
                    + "\nDinero descontado: " + sumaDinero
                    + "\nSu saldo actual: " + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            case "transferir" :
                var cuentaIngresada = prompt("Ingresar cuenta a transferir");
                if(cuentaIngresada == cuentaAmiga1 || cuentaIngresada == cuentaAmiga2){
                    saldoCuenta -= sumaDinero;
                    actualizarSaldoEnPantalla();
                    alert("Transferencia exitosa");
                }else alert("Solo puede transferir a una cuenta amiga");
        }
    }else{
        alert("La cuenta no posee fondos suficientes");
    }
}
//Función para ingresar un valor a la cuenta
function ingresar(){
    
}

function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("Ingrese el nuevo limite de extracción");
    if(nuevoLimite != null){
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
    }
}

function extraerDinero() {
    var sumaDinero = consultarSuma();
    restarSuma(sumaDinero, "extraccion");
}

function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var sumaDinero = consultarSuma();
    if(sumaDinero != null){
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
    var sumaDinero = 0;
    var servicio;
    var elegirServicio = prompt("Eliga el servicio que desea pagar:\n"
                               +"1- Agua\n"+"2- Teléfono\n"+"3- Luz\n"+"4- Internet");
    switch(elegirServicio){
        case "1" : 
        sumaDinero = valorAgua;
        servicio = "Agua";
        break;
        return sumaDinero, servicio;
        case "2" : 
        sumaDinero = valorTelefono;
        servicio = "Telefono";
        break;
        case "3" : 
        sumaDinero = valorLuz;
        servicio = "Luz";
        break;
        case "4" : 
        sumaDinero = valorInternet;
        servicio = "Internet";
        break;
        default : alert("El servicio seleccionado no existe");
        servicio = null;
    };
    if(servicio != null){
        restarSuma(sumaDinero, "pagarServicio", servicio);
    }
}

function transferirDinero() {
    var sumaDinero = consultarSuma();
    restarSuma(sumaDinero, "transferir");

}

function iniciarSesion() {
    nombreUsuario = prompt("Ingresa el nombre de tu usuario");
    codigoIngresado = prompt("Ingresa el codigo de seguridad" + "\n(Para testing = 1111)");
    if(codigoIngresado != codigoDeSeguridad){
        retenerDinero();
    }
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