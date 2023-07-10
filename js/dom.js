// En este video estaremos viendo como seleccionar un elemento por su ID, recuerda los ID's solo se deben utilizar uno con ese mismo nombre por documento...
/*
const formulario = document.getElementById('formulario');
console.log(formulario);

// Si no exist eestará vacio

const noExiste = document.getElementById('no-existe');
console.log(noExiste);

// Añadir un ID 2 veces, seleccionara el primero que encuentre...

// Existen otro par de selectores que hoy en día son los más comunes, tienen una sintaxis muy similar a la de CSS, así que vamos viendolos en el siguiente clase... */

// Obtener referencias a los elementos del DOM
var btnAbrirModal = document.getElementById("btnAbrirModal");
var miModal = document.getElementById("miModal");
var cerrarModal = document.getElementsByClassName("cerrar-modal")[0];

// Función para abrir el modal
function abrirModal() {
  miModal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModalFunc() {
  miModal.style.display = "none";
}

// Asignar eventos a los elementos
btnAbrirModal.addEventListener("click", abrirModal);
cerrarModal.addEventListener("click", cerrarModalFunc);
window.addEventListener("click", function (event) {
  if (event.target == miModal) {
    cerrarModalFunc();
  }
});
//-----------------------------------------------------------------------------------------------------------------------


const navegacion = document.querySelector('.navegacion');
let estudiante = document.querySelector("#btn-estudiante");
let docente = document.querySelector("#btn-docente");
let administrador = document.querySelector("#btn-administrador");
let ini_sec = document.querySelector("#btnAbrirModal");
let tit_1= document.querySelector(".titulo");
let tit_h2= document.querySelector(".tit_h2");
let buscador_1= document.querySelector("#busqueda");
let cat_est = document.querySelector("#cat_est");
let cat_pro1 = document.querySelector("#cat_pro1");
let cat_pro2 = document.querySelector("#cat_pro2");
let cat_pro3 = document.querySelector("#cat_pro3");
let info1 = document.querySelector("#info1");
let info2 = document.querySelector("#info2");
let info3 = document.querySelector("#info3");
let info4 = document.querySelector("#info4");
let descri1 = document.querySelector("#descri1");
let descri2 = document.querySelector("#descri2");
let descri3 = document.querySelector("#descri3");
let descri4 = document.querySelector("#descri4");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let conocemas = document.querySelector("#conocemas");
let conoceh3 = document.querySelector("#conoceh3");
let email = document.getElementById("email");
let password = document.getElementById("password");


let boton = document.getElementById("boton")
boton.addEventListener("click",()=> {
    // -------AQUI HAGO CAMBIOS PARA ADMINISTRADOR
    if (email.value === "administrador123" && password.value === "A12345") {
       alert("Bienvenido Administrador")
       miModal.style.display = "none";
       tit_1.textContent="¡Genial! Bienvenido Administrador"
        tit_h2.textContent="Estas son las clases programadas del dia:"
        navegacion.firstElementChild.textContent = 'Inicio'
        navegacion.children[1].textContent = 'Clases'
        navegacion.children[2].textContent = 'Perfil'
        ini_sec.style.display="none"
        buscador_1.placeholder="Busca a una persona en especial"
        cat_est.textContent = "Samuel Viveros"
        cat_pro1.textContent = "Aida Noris Salazar"
        cat_pro2.textContent = "Sthefanny Rodriguez"
        cat_pro3.textContent = "Omar Viveros"
        info1.children[1].textContent = "Precio de la clase: $30000 por dos horas"
        info2.children[1].textContent = "Precio de la clase: $50000 por tres horas"
        info3.children[1].textContent = "Precio de la clase: $25000 por una hora"
        info4.children[1].textContent = "Precio de la clase: $45000 por dos horas"
        descri1.textContent = "Esta clase va a ser brindada por el docente Isnel Riascos"
        descri2.textContent = "Esta clase va a ser brindada por la docente Lidia Maria Obando"
        descri3.textContent = "Esta clase va a ser brindada por el docente Frader Daniel Viveros"
        descri4.textContent = "Esta clase va a ser brindada por la docente Deisi Lorena Viveros"
        img1.src = "img/per_8.jpg"
        img2.src = "img/per_12.jpg"
        img3.src = "img/per_11.jpg"
        img4.src = "img/per_10.jpg"
        conocemas.textContent = "Descarga nuesta aplicación movil en App Store"
        conoceh3.textContent = "Tienes el mando de todo, usalo con cuidado"
        document.querySelector(".hero").style.backgroundImage= "url('img/edu_5.jpg')";
    } 
    //--------AQUI HAGO CAMBIOS DE ESTUDIANTE
    else if(email.value==="estudiante123" && password.value === "E12345"){
    alert("bienvenido estudiante");
    tit_1.textContent="Bienvenido Estudiante es hora de que solicites una clase!"
        tit_h2.textContent="Estos docentes se postularon a tu solicitud"
        navegacion.firstElementChild.textContent = 'Inicio'
        navegacion.children[1].textContent = 'Solicitar'
        navegacion.children[2].textContent = 'Clases'
        ini_sec.style.display= "none"
        buscador_1.placeholder= "Escoge la materia que necesitas"
        cat_est.textContent = "Docente"
        cat_pro1.textContent = "Docente"
        cat_pro2.textContent = "Profesora"
        cat_pro3.textContent = "Profesora"
        info1.children[1].textContent = "Frader Daniel Viveros"
        info2.children[1].textContent = "Fabio Ancizar Viveros"
        info3.children[1].textContent = "Deisi Lorena Viveros"
        info4.children[1].textContent = "Lidia Maria"
        descri1.textContent = "Acepto"
        descri2.textContent = "por $30.000 te acepto la clase"
        descri3.textContent = "Puedes cambiar la hora a las 14:00"
        descri4.textContent = " Acepto"
        img1.src = "img/per_7.jpg"
        img2.src = "img/per_8.jpg"
        img3.src = "img/per_1.jpg"
        img4.src = "img/per_11.jpg"
        conocemas.textContent = "Descarga nuestra aplicacion movil en la App Store" 
        document.querySelector(".hero").style.backgroundImage= "url('img/edu_2.jpg')";
    miModal.style.display = "none";
    }

    //----- AQUI HAGO CAMBIOS DE DOCENTE 
    else if (email.value==="docente123" && password.value==="D12345"){
      miModal.style.display = "none";
      tit_1.textContent="Bienvenido Docente que esperas para postularte!"
        tit_h2.textContent="Estas son las solicitudes de clases que hay en linea, ¡POSTULATE!"
        navegacion.firstElementChild.textContent = 'Inicio'
        navegacion.children[1].textContent = 'Postularse'
        navegacion.children[2].textContent = 'Clases'
        ini_sec.style.display="none"
        buscador_1.placeholder="Busca una clase que has brindado"
        cat_est.textContent = "Sthefanny Ibarra"
        cat_pro1.textContent = "Cristian Martinez"
        cat_pro2.textContent = "Sofia Ramirez"
        cat_pro3.textContent = "Deisi Viveros"
        info1.children[1].textContent = "Necesito una clase de Matematicas"
        info2.children[1].textContent = "Necesito una clase de Lengua castellana"
        info3.children[1].textContent = "Clase de Ingles"
        info4.children[1].textContent = "Necesito una clase de calculo integral"
        descri1.textContent = "$30.000 por 2h, Presencial, 22/07/2023"
        descri2.textContent = "$25.000 por 1h, Virtual, 03/07/2023"
        descri3.textContent = "$45.000 por 2h, Virtual, 29/06/2023"
        descri4.textContent = "50.000 por 3h, presencial, 29/06/2023"
        img1.src = "img/per_11.jpg"
        img2.src = "img/per_10.jpg"
        img3.src = "img/per_4.jpg"
        img4.src = "img/per_12.jpg"
        conocemas.textContent = "Docente, descarga nuestra aplicacion en App Store"
        conoceh3.textContent = "Este aplicativo te permite generar entradas extras enseñando lo que sabes" 
        document.querySelector(".hero").style.backgroundImage= "url('img/edu_3.jpg')";
    }
    
      else {
      location.href='http://127.0.0.1:5500/13-DOM%20(1)/registro.html';
      //alert("Correo electrónico o contraseña incorrectos");
    }
  });




  
  


     



  
 