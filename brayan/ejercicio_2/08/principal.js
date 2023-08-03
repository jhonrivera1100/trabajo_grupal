/*const  formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();//previene el comportaminto por defecto del submit - recarga
    console.log(evt.target.action);

})*/
/*const nombre = document.querySelector ('#nombre').value;
const apellido = document.getElementById ('apellido').value;
const correo = document.getElementById ('correo').value;
const cedula = document.getElementById ('ncedula').value;
const nacimiento = document.getElementById('fechanacimiento').value;
const materia = document.getElementById ('materia').value;
const horas = document.getElementById ('horas').value;


function datos (){

const nombre = document.querySelector ('#nombre').value;
const apellido = document.querySelector ('#apellido').value;
const correo = document.querySelector ('#correo').value;
const cedula = document.getElementById ('ncedula').value;
const nacimiento = document.getElementById('fechanacimiento').value;
const materia = document.getElementById ('materia').value;
const horas = document.getElementById ('horas').value;

console.log ('este es el nombre'+ nombre);
console.log ('este es el apellido'+ apellido);
console.log ('este es el correo'+ correo);
console.log ('esta es el apellido'+ cedula);
console.log ('este es el nacimiento'+ nacimiento);
console.log ('este es el apell'+ materia);
console.log ('este es el apellido'+ horas);


};*/

const datosdocentes= ( ) => ({

        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        cedula: document.getElementById('cedula').value,
        fechanacimiento: document.getElementById('fechanacimiento').value,

});

const datosclase = () => ({
    materia: document.querySelector ('#materia').value,
    horas: document.querySelector ('#horas').value,

});

const final = (docente, clase) => {
    console.log ("Datos del docente");
    console.log ("nombre:" + docente.nombre);
    console.log ("Apellido:"+ docente.apellido);
    console.log ("Numero de cedula:"+ docente.cedula);
    console.log("Fecha de nacimiento:"+ docente.fechanacimiento);
    
    console.log("Datos de materia");

    console.log ("Materia que imparte:" + clase.materia);
    console.log ("Horaras impartidas:" + clase.horas);


};

 const formulario = document.querySelector("#formulario");
if (fechanacimiento.value >= '2005-08-02'){

    alert ("es mayor")
}
 formulario.addEventListener("submit",(event) => {
    event.preventDefault();
    const docente= datosdocentes();
    const clase = datosclase();
    final (docente, clase);
 });
/*

 const edad = document.querySelector('fechanacimiento');
 
edad1.addEventListener("submit", () => {

    if (edad=< 03/08/2005)
});*/

localStorage.setItem('fechanacimiento', 22012005);