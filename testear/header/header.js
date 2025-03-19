document.addEventListener("DOMContentLoaded", function() {

    console.log("entre");
    // Crear el header dinámicamente
    let header = document.createElement("header");
    header.classList.add("text-center");

    let img = document.createElement("img");
    img.src = "https://danieldaniel123456789.github.io/aeris/aeris.png";  // Ruta completa de la imagen
    img.alt = "Logo";

    // Agregar la imagen al header
    header.appendChild(img);

    // Insertar el header en el contenedor
    document.getElementById("header-container").appendChild(header);
});
