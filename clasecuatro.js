function iniciar() {
    var boton = document.getElementById('grabar');
    boton.addEventListener('click', nuevoitem, false);
    mostrar();
}

function nuevoitem() {
    var clave = document.getElementById('clave').value;
    var valor = document.getElementById('texto').value;
    sessionStorage.setItem(clave, valor);
    mostrar();
    document.getElementById('clave').value = '';
    document.getElementById('texto').value = '';
}

function mostrar() {
    var cajadatos = document.getElementById('cajadatos');
    cajadatos.innerHTML = '<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
    for (var f = 0; f < sessionStorage.length; f++) {
        var clave = sessionStorage.key(f);
        var valor = sessionStorage.getItem(clave);
        cajadatos.innerHTML += '<div>' + clave + ' - ' + valor + '<br><button onclick="eliminar(\'' + clave + '\')">Eliminar</button></div>';
    }
}

function eliminar(clave) {
    if (confirm('Está Seguro?')) {
        sessionStorage.removeItem(clave);
        mostrar();
    }
}

function eliminarTodo() {
    if (confirm('Está Seguro?')) {
        sessionStorage.clear();
        mostrar();
    }
}
window.addEventListener('load', iniciar, false)


/**...........jquery......................... */

$(document).ready(function() {




    $("#flip").click(function() {
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function() {
        $("#panel").stop();
    });

    $("#dos").click(function() {
        $("div").animate({ right: '200px' });
    });
    // $('#java').slideToggle('slow');
    $('#java').on('click', function() {
        $('#java').css('background-color', 'black');
    })
    $("#tres").click(function() {
        // $('#java').slideToggle('slow');
        $("#rule").delay("slow").slideToggle('slow');
        $("#java").delay("slow").slideToggle('slow');

    });


    /*  $.ajax('social.html', {

         success: function(respuesta) {
             $('.lateral').append($(respuesta))

         } 

     })*/

    $.get('social.html', function(respuesta) {
        $('.lateral').append($(respuesta))
    })



    $("#usuarios").click(function() {
        $("main").fadeIn('slow')
        $.getJSON('https://randomuser.me/api/?results=500')
            .then(function(respuesta) {

                respuesta.results.forEach(function(persona) {
                    console.log(persona.picture.thumbnail);
                    $('<img>')
                        .attr('src', persona.picture.thumbnail)
                        .appendTo('.contenido');
                });



            });
    });


});
/**....................................................... */



/* $(document).ready(function() {


    var ocultar = $("#ocultar");
    var mostrar = $("#mostrar");
    var toggle = $("#toggle");
    var elemento = $("#elemento");

    ocultar.click(function() {
        elemento.hide(1000);
    });

    mostrar.click(function() {
        elemento.show(1000);
    });

    toggle.click(function() {
        elemento.toggle(1000);
    });

    $('#boton3').on('click', function() {
        $('#contenido h6').toggleClass('display-3');
    });

    $('#boton3').on('click', function() {
        $('#cajaformulario').toggleClass('display-3');
    });

}); */