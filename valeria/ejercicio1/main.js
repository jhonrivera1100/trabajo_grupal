
/*
const nombre = prompt("Digite su nombre");
const apellido = prompt("Digite su apellido");
const texto = document.querySelector('#tex');
const nombrecompleto = `Bienvenido ${nombre} ${apellido} al repaso de java`;
texto.textContent = nombrecompleto;
console.log(nombrecompleto);*/


//funcion flecha ejercicio

//FORMA TRADICIONAL
/*
function getusuarioactivo (nombre){
return{
uid:'abcde',
username:nombre
}
};

const usuarioactivo = getusuarioactivo('valeria fernandez');
console.log(usuarioactivo)

//FORMA FLECHA

const getusuarioactivo1 = (nombre)=>
({
uid:'abcde',
username:nombre
});

const usuarioactivo1 = getusuarioactivo1("valeria fernandez");
console.log(usuarioactivo1);*/



//DESESTRUCTURACION 
/*
const aprendiz ={
    nombre:'valeria',
    edad:'18',
    apellido:'fernandez'
};

//forma tradicional con flecha

const retornaaprendiz = (usuario)=>{
const {noombre,edad,apellido}=aprendiz
console.table(noombre,edad,apellido);
}

retornaaprendiz(aprendiz);

//forma cencilla

const retornaaprendiz1 = ({nombre,edad,apellido})=>{
    console.table(nombre,edad,apellido);
}

retornaaprendiz1(aprendiz);*/



//DESESTRUCTURACION EJERCICIO
/*
const materias = {
nombre: "dibujo",
profesor:'valeria',
intensidad:'medio'
};


const materia = ({nombre,profesor,intensidad,duracion='1 mes'})=>{
    console.log(nombre,profesor,intensidad,duracion);
}

materia(materias);
*/

//otra forma
/*
const materias = {
nombre: "dibujo",
profesor: "valeria",
intensidad: "medio",
};

const usecontext=({nombre,profesor,intensidad, duracion='1 mes'})=>{
return {
nombre1: nombre,
profesor1: profesor,
intensidad1: intensidad,
duracion1:duracion,
detalles:{
raza:'blanco',
altura: 1.75
}
}
}

const{nombre1,profesor1,intensidad1,duracion1,detalles:{raza,altura}}=usecontext(materias);
console.log(nombre1,profesor1,intensidad1,duracion1);
console.log(raza,altura);*/


//ahora destructuren con areglos 
/*
const menores=['andres','fernanda','maria']
console.log(menores);
console.log(menores[0]);
console.log(menores[1]);
console.log(menores[2]);
const[ ,  , men2]=menores
console.log(men2);
*/


//asi
/*
const returnmateria =()=>{
return['dibujo','valeria','medio'];
}

const[pos1,pos2,pos3]=returnmateria();
console.log(pos1,pos2,pos3);
*/




//ejercicio
/*
const userstate=(nombre)=>{
return [nombre, ()=>{console.log('el usuario esta activo');}]
}

const [nombre,setnombre] = userstate('valeria fernandez');
console.log(nombre);
setnombre();*/





//EJERCICIO INICIO DE SESION 

function validatemail(email) {

    return true;
}

document.addEventListener('DOMContentLoaded', function () {
const login = document.querySelector('#login');
login.addEventListener('submit', function (event) {
event.preventDefault()
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;

if (!validatemail(email)){
alert("ingrese un correo valido");
return;
}


if (password.length<8) {
alert("la contraseña debe tener minimo 8 digitos");
return;
}


const userrol = determineuserole(email);
color(userrol);

});
});



function determineuserole(email){
if (email==="admin@gmail.com"){
return "admin";
}else{
return "user";
}
}

function color(userrol){
if(userrol==="admin"){
document.body.style.backgroundColor="blue"
}else{
document.body.style.backgroundColor = "red"; 
}
}



