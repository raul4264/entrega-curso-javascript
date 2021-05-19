var prueba = prompt("elija color rojo o azul");

if (prueba == "azul") {
    console.log("hola " + prueba);
}
if (prueba == "rojo") {
    console.log("hola " + prueba + " ...");
}
/*--------------------------------------------------*/
var ingreso = prompt("ingrese edad para ingresar a nuestro servicio de acompañantes..")
if (parseInt(ingreso) <= 18) {
    console.log("No puede ingresar. tenes que crecer primero..")
} else if (parseInt(ingreso) > 80) {
    console.log("Mejor anda a descansar..")
} else {
    console.log("Ingreso autorizado disfruta..")
}

/*--------------------------------------------------*/
var valorBoolean = 1 < 2;

if (valorBoolean) {
    console.log("verdadero")
} else {
    console.log("falso")
}
/*--------------------------------------------------*/
var nombre = prompt("ingrese nombre");
var apellido = prompt("ingrese apellido");
if (nombre != "" && apellido != "") {
    console.log(nombre + " es distinto de vacio y.." + apellido + " es distinto de vacio..");
} else {
    console.log("nombre o apellido vacios..");
}
/*--------------------------------------------------*/
var culpable = prompt("¿eres culpable? (si/no)"); // si, no

if (culpable == "si") {
    document.write("irás a la cárcel");
} else if (culpable == "no") {
    document.write("irás a casa");
} else {
    document.write("la documentación por favor");
}
document.write("...");

/*--------------------------------------------------*/

var topp = prompt("qué ingrediente quieres entre.. oreo,kitkat,brownie,lacasitos?..");
var precio = 0.00;
var helado = 1.90;
var precioFinal = 0.00;

if (topp == "oreo") {
    precio = 1;
} else if (topp == "kitkat") {
    precio = 1.50;
} else if (topp == "brownie") {
    precio = 0.75;
} else if (topp == "lacasitos") {
    precio = 0.95;
} else {
    document.write("no tenemos este ingrediente, lo sentimos. ");
    precio = 0;
}

precioFinal = helado + precio;
document.write("el helado cuesta " + precioFinal + " $");

/*--------------------------------------------------*/

var primerNumero = parseInt(prompt("ingresar primer numero"));
var segundoNumero = parseInt(prompt('ingresar segundo numero'));

if (primerNumero < segundoNumero) {
    console.log(primerNumero + " es menor que el " + segundoNumero);
} else if (primerNumero > segundoNumero) {
    console.log(primerNumero + " es mayor que el " +
        segundoNumero);


} else if (primerNumero == segundoNumero) {
    console.log(primerNumero + " es igual a " + segundoNumero);
}
/*--------------------------------------------------*/
var carritoDeHelados = ' ';
var estadoDeLaCasa = 'en llamas';

if (carritoDeHelados || estadoDeLaCasa === 'en llamas') {
    console.log('Debes salir de la casa rápidamente.');
} else {
    console.log('Es mejor que te quedes dentro de casa');
}