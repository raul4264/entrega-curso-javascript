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
var pregunta = prompt("ingresar su nombre");
var pregunta1 = prompt("ingresar su apellido");
alert("mi nombre completo es.." + " " + pregunta + " " + pregunta1 + " y tengo" + " " + edad + " " + "años");
var edad = prompt("ingrese su edad");
var nacimiento = prompt("ingrese año de nacimiento");
var edadCorregida = parseInt(edad)
var nacimientoCorregida = parseInt(nacimiento)
document.write("<br> ")
document.write("<h3>mi edad es de.." + edadCorregida + " y naci en.." + nacimientoCorregida + "</h3>")
var rotulo = "mi edad es de.." + edadCorregida + " y naci en.." + nacimientoCorregida;
alert(rotulo);