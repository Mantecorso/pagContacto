window.addEventListener('load', function() {

    var formulario, enviar;
    formulario = this.document.getElementById('formu1');
    enviar = this.document.getElementById('enviar1');

    enviar.addEventListener('click', function(ev) { //compruebo que no esten vacios los campos a enviar.

        var nombre, correo, mensaje;
        nombre = document.getElementById('nombre1');
        correo = document.getElementById('email1');
        mensaje = document.getElementById('mensaje1');

/*         if (nombre.value == "") {
            alert('No has escrito tu nombre.');
            nombre.className  = 'error';
            nombre.focus();
        } else */ if (!nombre.checkValidity()) { // compruebo con javascript que cumple el patrón
            alert('El nombre no cumple los requisitos.');
            nombre.className  = 'error';
            if (nombre.validity.valueMissing) {
                alert("El nombre está vacio.");
            }
            if (nombre.validity.patternMismatch) {
                alert("No se admiten números ni símbolos.");
            }
            if (nombre.validity.tooLong) {
                alert("Nombre demasiado largo, máximo 35 caracteres.")
            }
        }/*  else if (correo.value == "") {
            alert('No has escrito tu correo electrónico.');
            correo.className = "error";
            correo.focus();
        } */ else if (!correo.checkValidity()) { // compruebo con javascript que cumple el patrón
            alert('Formato de email erróneo.');
            correo.className  = 'error';
            if (correo.validity.valueMissing) {
                alert("El email está vacio.");
            }
            if (correo.validity.patternMismatch) {
                alert("Comprueba que lleve @.");
            }

        } else if (mensaje.value == "") {
            alert('No has escrito ningún mensaje.');
            mensaje.className = "error";
            mensaje.focus();
        } else if (nombre.value != "" && nombre.checkValidity() && correo.value != "" && correo.checkValidity() && mensaje.value != "" && confirm("Pulsa aceptar si quieres enviar el formulario.")) {
            alert("El formulario ha sido enviado.");
        } else {
            ev.preventDefault(); //bloquea el evento submit si no cumple todos los parametros
            alert("El formulario NO ha sido enviado.");
        }
    })
})