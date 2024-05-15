function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let categoria = document.getElementById("categoria").value;
    let recetas = document.getElementById("recetas").value;
    let imagen = document.getElementById("imagen").value;
    let terminosChecked = document.getElementById("terminos").checked;

    if (nombre.trim() === '' || categoria.trim() === '' || recetas.trim() === '' || imagen.trim() === '' || !terminosChecked) {
        alert("Por favor, complete todos los campos y acepte los términos y condiciones.");
        return false;
    }

   
    alert("La información fue enviada correctamente. ¡Gracias!");
    return true;
}