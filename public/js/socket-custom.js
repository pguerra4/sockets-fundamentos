var socket = io();

//Los on son para escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Paulino',
    mensaje: 'Hola Prro'
}, function(resp) {
    console.log('Respuesta server ', resp);
});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});