// Obtener el elemento del menú
const menu = document.querySelector('.container-menu');

// Agregar un evento de clic al elemento del menú
menu.addEventListener('click', function() {
    // Alternar la clase 'clicked' en el menú cuando se hace clic en él
    this.classList.toggle('clicked');
});