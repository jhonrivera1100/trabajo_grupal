const solicitardatosprofesor = ()=>({
    nombres:document.querySelector('#nombres').value,
    apellidos:document.querySelector('#apellidos').value,
    cedula:document.querySelector('#cedula').value,
    correo:document.querySelector('#correo').value,
    fechanacimiento:document.querySelector('#fechanacimiento').value,

}

)

const obtenerdatosmateria= ()=>({
    materia:document.querySelector('#nombremateria').value,
    intensidad:document.querySelector('#intensidadmateria').value,
})

const imprimirdatos =(datosprofesor,datosmateria)=>{
    console.log("---datos del padre--");
    console.log("nombres:"+datosprofesor.nombres);
    console.log("apellidos:"+datosprofesor.apellidos);
    console.log("cedula:"+datosprofesor.cedula);
    console.log("correo:"+datosprofesor.correo);
    console.log("fecha nacimiento:"+datosprofesor.fechanacimiento);
    console.log("---datos de la materia--");
    console.log("materia:"+datosmateria.materia);
    console.log("intensidad:"+datosmateria.intensidad);


} 
const formulario=document.querySelector('#formulario')
formulario.addEventListener("submit", function(event) {
    event.preventDefault()
    const datosprofesor=solicitardatosprofesor();
    const datosmateria=obtenerdatosmateria();
    imprimirdatos(datosprofesor,datosmateria)
    const fechaActual = new Date();
    // Obtener la fecha de nacimiento del formulario y convertirla a objeto Date
    const fechaNacimiento = new Date(datosprofesor.fechanacimiento);
    // Calcular la diferencia en años
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    if (edad <= 18) {
        alert("Eres menor de edad");
    } else {
        alert("Eres mayor de edad");
    }
})

//LOCALSTORAGE
localStorage.setItem('NOMBRE','LISBETH')

localStorage.setItem('materia','matematicas')
sessionStorage.setItem('profesores','ruben')

//arreglo
const materis={
    nombre:'matematicas',
    profesors:'javier'
}
const materiascadena=JSON.stringify(materis)

console.log(materiascadena)
localStorage.setItem('materia',materiascadena);

const profesor=['juan','pedro','luis']
localStorage.setItem('profesores',JSON.stringify(profesor))