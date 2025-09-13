// Guardar la carta en localStorage
function guardarCarta() {
 const mensaje = document.getElementById('mensaje-futuro').value;
 if (mensaje) {
 localStorage.setItem('cartaFuturo', mensaje);
 alert('¡Tu carta se ha guardado para el futuro!');
 } else {
 alert('Por favor, escribe un mensaje antes de guardar.');
}
}
function cargarCarta() {
 const mensajeGuardado = localStorage.getItem('cartaFuturo');
 if (mensajeGuardado) {
 document.getElementById('mensaje-futuro').value = mensajeGuardado;
 }
}

window.onload = function() {
 cargarCarta();

 iniciarContador();
};