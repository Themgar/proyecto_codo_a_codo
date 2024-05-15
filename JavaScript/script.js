function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let recetas = document.getElementById("recetas").value;
    let imagen = document.getElementById("imagen").value;

    if (nombre.trim() == '' || categoria.trim() == '' || recetas.trim() == '' || imagen.trim() == '') {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    return true;
}