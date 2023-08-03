const obtenerDatosDocente = () => ({
  Nombre: document.querySelector("#Nombre").value,
  Apellido: document.querySelector("#Apellido").value,
  Cedula: document.querySelector("#Cedula").value,
  Correo: document.querySelector("#Correo").value,
  Fnacimiento: document.querySelector("#Fnacimiento").value,
});

const obtenerDatosMateria = () => ({
  Nombre_materia: document.querySelector("#Nombrem").value,
  Intensidad: document.querySelector("#Intensidad").value,
});

const mostrarDatos = (datosDocente, datosMateria) => {
  console.log("-------Datos del Docente------");
  console.log("Nombre: " + datosDocente.Nombre);
  console.log("Apellido: " + datosDocente.Apellido);
  console.log("Numero_cedula: " + datosDocente.Cedula);
  console.log("Correo: " + datosDocente.Correo);
  console.log("Fecha_nacimiento: " + datosDocente.Fnacimiento);
  console.log("-------Datos de la Materia------");
  console.log("Nombre_materia: " + datosMateria.Nombre_materia);
  console.log("Intensidad: " + datosMateria.Intensidad);
const fechaNacimiento = new Date(datosDocente.Fnacimiento);
const edadMilisegundos = Date.now() - fechaNacimiento.getTime();
const edadAnios = new Date(edadMilisegundos).getFullYear() - 1970;
console.log("Edad: " + edadAnios);
edadAnios < 18 && alert("Debes ser mayor de edad para enviar el formulario.");
};



const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const datosDocente = obtenerDatosDocente();
  const datosMateria = obtenerDatosMateria();
  mostrarDatos(datosDocente, datosMateria);
  
});
/*
localStorage.setItem('valeria','dibujo');
sessionStorage.setItem("valeria", "dibujo");*/