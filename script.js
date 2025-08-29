function cambiarTitulo() {
  let titulo = document.getElementById("titulo");
  titulo.textContent = "Este es un nuevo título: Programación Web";
}

function cambiarEstiloDescripcion() {
  let subtitulo = document.getElementById("subtitulo");
  let texto = document.getElementById("texto-descripcion");

  subtitulo.style.color = "darkred";
  texto.style.color = "purple";
  texto.style.fontWeight = "bold";
}

function agregarImagen() {
  let contenedor = document.getElementById("contenedor-imagen");

  if (contenedor.innerHTML === "") {
    let img = document.createElement("img");
    img.src = "imagen.png";
    img.alt = "Imagen del libro";
    img.style.marginTop = "15px";
    img.style.borderRadius = "10px";
    img.style.maxWidth = "100%";
    contenedor.appendChild(img);
  }
}

function cambiarLayout() {
  let contenido = document.getElementById("contenido").querySelector(".grid");
  if (contenido.style.display === "block") {
    contenido.style.display = "grid";
    contenido.style.gridTemplateColumns = "repeat(2, 1fr)";
  } else {
    contenido.style.display = "block";
  }
}
