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