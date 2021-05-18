var edad = 57;

var nacimiento = 1964;
var actual = nacimiento + edad;
document.write("El año en curso es.." + actual);
document.write("<br> ")
document.write("<br> ")
document.write("mi edad es de.." + edad + " " + "y mi año de nacimiento es.." + nacimiento);
document.write("<br> ")
var nombre = "Raul";
var apellido = "Novas";
document.write("<br> ")
document.write("Mi nombre completo es.." + nombre + " " + apellido)
document.write("<br> ")
    /*   var pregunta = prompt("ingresar su nombre");
    var pregunta1 = prompt("ingresar su apellido");
    alert("mi nombre completo es.." + " " + pregunta + " " + pregunta1 + " y tengo" + " " + edad + " " + "años");
    var edad = prompt("ingrese su edad");
    var nacimiento = prompt("ingrese año de nacimiento"); 
     var edadCorregida = parseInt(edad)
    var nacimientoCorregida = parseInt(nacimiento)
    document.write("<br> ") 
    document.write("<h3>mi edad es de.." + edadCorregida + " y naci en.." + nacimientoCorregida + "</h3>")
var rotulo = "mi edad es de.." + edadCorregida + " y naci en.." + nacimientoCorregida;
 alert(rotulo); */
    *
    /--------------------------------clase 2--------------------------------------------------*/
var prueba = prompt("elija color rojo o azul");

if (prueba == "azul") {
    console.log("hola " + prueba);
}
if (prueba == "rojo") {
    console.log("hola " + prueba + " ...");
}
var ingreso = prompt("ingrese edad para ingresar a nuestro servicio de acompañantes..")
if (parseInt(ingreso) <= 18) {
    console.log("No puede ingresar. tenes que crecer primero..")
} else if (parseInt(ingreso) > 80) {
    console.log("Mejor anda a descansar..")
} else {
    console.log("Ingreso autorizado disfruta..")
}
var valorBoolean = 1 < 2;

if (valorBoolean) {
    console.log("verdadero")
} else {
    console.log("falso")
}
var nombre = prompt("ingrese nombre");
var apellido = prompt("ingrese apellido");
if (nombre != "" && apellido != "") {
    console.log(nombre + " es distinto de vacio y.." + apellido + " es distinto de vacio..");
} else {
    console.log("nombre o apellido vacios..");
}
var culpable = prompt("¿eres culpable? (si/no)"); // si, no

if (culpable == "si") {
    document.write("irás a la cárcel");
} else if (culpable == "no") {
    document.write("irás a casa");
} else {
    document.write("la documentación por favor");
}
document.write("...");

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