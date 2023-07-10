/*
const x= document.querySelector('.card');
console.log(x);*/


//busca por id
/*
const x= document.getElementById('formulario');
console.log(x);
*/
//muestra todas las clases de .card
/*
const x = document.querySelectorAll('.card');
console.log(x);  */

//muestra texto de la busqueda
/*
const x = document.querySelector('.contenido-hero h1');
console.log(x.innerHTML);*/

//este es para cambiar el contenido
/*
const x = document.querySelector('.contenido-hero h1').textContent = "nuevo contenido";

const x = document.querySelector('.hacer h2').textContent = "aqui voy a pioner nuevo texto"; */

//este es un juego para cambiar contenido expesifico
/*
const x= prompt("intrduzca que rol es 1-3");

if (x==1){
    const s = document.querySelector('.contenido-hero h1').textContent = "Bienvenido Maestro";

}
else if (x==2){
    const s = document.querySelector('.contenido-hero h1').textContent = "Bienvenido maquina";

}
else if (x==3){
    const s = document.querySelector('.contenido-hero h1').textContent = "Bienvenido jugador";
}
else if (x < 1 && x > 3 || x!==parseInt){
    alert ("no se puede esa opcio")
}*/
//esta es para cambiar bien sea color o tipo de letra
/*
const titulo = document.querySelector('h1');

titulo.style.backgroundColor = 'red';
titulo.style.fontFamily = 'nunito';
*/
//añadir clase
/*
const x = document.querySelector('.card');
console.log(x);
console.log(x.classList);
x.classList.add('nueva clase');*/
/*
const navegacion= document.querySelector('.navegacion');


console.log(navegacion);


console.log(navegacion.childNodes);

console.log(navegacion.children);
/*
//cambiar imagen 
const card= document.querySelector('.card');
card.children[0].src= 'img/hacer3.jpg';
*//*
//este es el padre este desde el hjo al padre
console.log(navegacion.parentElement.parentElement)
//este lo toma del padre al hijo
console.log(navegacion.childElementCount)
*//*
//esto es para crear
const enlace = document.createElement('A');
enlace.elementn= 'SENA';
enlace.href = 'http://www.sena.edu.co';
enlace.target = '_blank';

console.log(enlace);

const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace);

navegacion.insertBefore (enlace);

function alerta (   ) {
    alert('hola estas entrando al sena ')
}
*/
/*

const x = prompt("intrduzca que rol es 1-3");
const navegacion = document.querySelector('.navegacion');

const cards = document.querySelector('.card')


if (x==1){
    navegacion.firstElementChild.textContent = 'Maestro'
    navegacion.children[1].textContent = 'Aprendices'
    navegacion.children[2].textContent = 'Calificaciones'
    navegacion.lastElementChild.textContent = 'Historial'
    //-----------------------------------------------------------------------------------------
    const s = document.querySelector('.contenido-hero h1').textContent = "¡Bienvenido Maestro! Es hora de brindar una clase";
    //-----------------------------------------------------------------------------------------
    const a = document.querySelector('.hacer h2').textContent = "Estas son las clases que tienes pendientes:";

    //-----------------------------------------------------------------------------------------
    const d = document.querySelector('.hospedaje h2').textContent = "Estos son los mejores instructores del mes:";

    //-----------------------------------------------------------------------------------------
    const e = document.querySelector('.hospedaje p').textContent = "DANILO MARTINEZ:";

   // const titu = document.querySelector('card.children[1].card.children[1]').textContent= "como va todo"
    //-----------------------------------------------------------------------------------------
   
    //card.children[1].card.children[2].textContent= "como va todo"
console.log(navegacion.firstChild)
navegacion.firstElementChild.textContent= "cuaqlquiercosa"
    
    
    
}
else if (x==2){
    navegacion.firstElementChild.textContent = 'Profesores'
    navegacion.children[1].textContent = 'Materias'
    navegacion.children[2].textContent = ''
    navegacion.lastElementChild.textContent= ''
  
    //-----------------------------------------------------------------------------------------
    const s = document.querySelector('.contenido-hero h1').textContent = "¡Bienvenido Aprendiz! Que esperas para solicitar una clase";
    //-----------------------------------------------------------------------------------------
    const a = document.querySelector('.hacer h2').textContent = "Clases programadas:";

    //-----------------------------------------------------------------------------------------
    const d = document.querySelector('.hospedaje h2').textContent = "Estos son los mejores instructores del mes:";
    //-----------------------------------------------------------------------------------------
    const e = document.querySelector('.hospedaje p').textContent = "JHON JAIR DIAZ:";
    //-----------------------------------------------------------------------------------------
}
else if (x==3){
    navegacion.firstElementChild.textContent = 'Bienvenido a la plataforma'
    navegacion.children[1].textContent = ''
    navegacion.children[2].textContent = ''
    navegacion.lastElementChild.textContent= ' '
    //-----------------------------------------------------------------------------------------
    const s = document.querySelector('.contenido-hero h1').textContent = "¡Bienvenido! Que esperas para reforzar tu aprendizaje ";
    //-----------------------------------------------------------------------------------------
    const a = document.querySelector('.hacer h2').textContent = "Conoce mas de nosotros:";
    //-----------------------------------------------------------------------------------------
    const d = document.querySelector('.hospedaje h2').textContent = "Estos son los mejores instructores del mes:";
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
}
else if (x < 1 && x > 3 || x!==parseInt){
    
    alert ("no se puede esa opcion")
}
*/
/*

const parrafo1 = document.createElement ('p');
parrafo1.textContent="aprendiz adso";
parrafo1.classList.add ('concierto');
parrafo1.classList.add('categoria');

const parrafo2 = document.createElement ('p');
parrafo2.textContent="aprendiz adso";
parrafo2.classList.add ('concierto');
parrafo2.classList.add('categoria');


const parrafo3 = document.createElement ('p');
parrafo3.textContent="aprendiz adso";
parrafo3.classList.add ('concierto');
parrafo3.classList.add('categoria');






const info = document.createElement('div');
info.appendChild (parrafo1);
info.appendChild (parrafo2);
info.appendChild (parrafo3);


const contenedor = document.querySelector('.hacer .contenedor-cards');

*/
/*
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


btnFlotante.addEventListener('click'.() =>[
    alert('diste click');
])*/

// Obtener el botón y el modal
var button = document.getElementById("myButton");
var modal = document.getElementById("myModal");

// Obtener el elemento de cierre del modal
var close = document.getElementsByClassName("close")[0];

// Cuando el usuario haga clic en el botón, abrir el modal
button.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en el elemento de cierre, cerrar el modal
close.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cerrarlo también
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
