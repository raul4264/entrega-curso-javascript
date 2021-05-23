document.write("<h1> Encadenamiento de Bucles  </h>")
document.write("<h3> horas en los dias de la semana </h3>")
document.write("<br>");
var diaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for (var dia = 0; dia < diaSemana.length; dia++) { //bucle externo	 	 
    document.write(diaSemana[dia] + "<br>")

    for (var hora = 0; hora < 24; hora++) { //bucle interno	 	 
        if (hora !== 23) { document.write(hora + "h. ") } else { document.write(hora + "h." + "<br>") }
    }
}
/*......................................................*/
document.write("<hr>");
document.write("<br>");
document.write("<h3> Meses del año con su cantidad de dias (primer semestre)</h3>")
document.write("<br>");
var mesesYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
var diasMeses = [31, 28, 31, 30, 31, 30]
var limite = 0;
for (var mes = 0; mes < mesesYear.length; mes++) { //bucle externo	 	 
    document.write(mesesYear[mes] + "<br>")

    for (var dia = 1; dia <= diasMeses[limite]; dia++) { //bucle interno	 	 
        if (dia < diasMeses[limite]) { document.write(dia + " ") } else { document.write(dia + " " + "<br>") }
    }
    limite++;
}
document.write("<hr>");
document.write("<br>");