window.addEventListener('load', function() {

    var formulario, enviar;
    formulario = this.document.getElementById('formu1');
    enviar = this.document.getElementById('enviar1');

    enviar.addEventListener('click', function(ev) { //compruebo que no esten vacios los campos a enviar.

        var nombre, correo, mensaje;
        nombre = document.getElementById('nombre1');
        correo = document.getElementById('email1');
        mensaje = document.getElementById('mensaje1');

        if (nombre.value == "") {
            alert('No has escrito tu nombre.');
        }
        if (correo.value == "") {
            alert('No has escrito tu correo electrónico.');
        }
        if (mensaje.value == "") {
            alert('No has escrito ningún mensaje.');
        }

        if (nombre.value != "" && correo.value != "" && mensaje.value != "" && confirm("Pulsa aceptar si quieres enviar el formulario.")) {
            alert("El formulario ha sido enviado.");
        } else {
            ev.preventDefault(); //bloquea el evento submit si no cumple todos los parametros
            alert("El formulario NO ha sido enviado.");
        }

        

    })

})