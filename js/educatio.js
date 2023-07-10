// Obtener elementos del DOM
var modal = document.getElementById("modal");
var btnOpenModal = document.getElementById("openModal");
var closeModal = document.getElementsByClassName("close")[0];

// Abrir modal
btnOpenModal.addEventListener("click", function() {
  modal.style.display = "block";
});

// Cerrar modal al hacer clic en la "x"
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", function(event) {

  if (event.target == modal) 
    modal.style });

