/*const nombre = prompt("digite su nombre");
const apellido = prompt("digite su apellido");
const nombrecompleto = `bienvenido ${nombre} ${apellido} al repaso de java`;
const nomcom = document.querySelector('#texto');
nomcom.textContent= nombrecompleto;
console.log(nombrecompleto)

//objetos
const materia={
    nombre:'matematicas',
    profesional:'samuel',
    intensodad:'10h'

}

const materia1={
    nombre:'español',
    profesional:'samuel',
    intensodad:'10h',  
}
console.log(materia);
console.log(materia);
console.log(materia1);


const materia2={...materia}
console.log(materia2)
materia2.nombre='javascript'
materia2.profesional='cristian'
materia2.intensodad='6h'
//arreglos
const materias=['html', 'css','java'];
console.table(materias)

const materia1=['ciencias','español'];
console.table(materia1)
let profesores = [...materias];// para tener copia del mismo y solo cambias
profesores[0]='ciencias'
profesores[0]='matematicas'
console.log(profesores)

//
const numeros=[1,2,3,4,5];
let numeros1=[...numeros];
const numeros2=numeros1.map(function(numero){
return numero*2;
})
console.log(numeros2)
//funcion
function saludar(nombre){
    alert('hola'+ nombre);

}
function iniciosesion(saludo){
    let nombre= prompt('ingrss nombre');
    saludo(nombre);// es para que se lo comparta
}
iniciosesion(saludar)



//funcion
function iniciosesion(){
    let nombre= prompt('ingresa tu nombre');
    return `hola bienvenido, ${nombre}`;

}
alert (iniciosesion());
console.log(iniciosesion());
console.table(iniciosesion())




//la misma funcion anterior pero con funcion flecha
const iniciosesion1 =(nombre)=>{
    return `hola bienvenido ${nombre}`;

}
console.log(iniciosesion1(`lisbeth`))//el que esta en morado es argumento





// mas corta
const iniciosesion1 =(nombre)=>`hola bienvenido ${nombre}`;{
 

}
console.log(iniciosesion1(`lisbeth`))

//funcon flecha tradicional
const getuser=()=>{
    return[
        nombre1:'luisa',
        nombre2:'ana'
    ]
}
console.log(getuser())





//funcion de forma corta

const getuser=()=>
(
   {
        nombre1:'luisa',
        nombre2:'ana'
   }
)
console.log(getuser())
console.table(getuser())




//ejercicio de pasar de funcion normal a funcion flecha
 function getusuarioactivo(nombre){
    return{
        uid:'abcd',
        username:nombre
    }
 };
 const usuarioactivo= getusuarioactivo('lisbeth ceron')

console.log(usuarioactivo);

const getusuarioactivo=(nombre)=>
(
    {
        uid:'abcd',
        username:nombre
    }
)
const usuarioactivo= getusuarioactivo('lisbeth ceron')
console.log(usuarioactivo)
console.table(usuarioactivo)




//desestructuracion
const aprendiz1 ={
    nombre:'manuel',
    apellido:'camacho',
    edad:'28'
};

console.table(aprendiz1)
//aqu desestructura el objeto
const aprendiz ={
    nombre:'manuel',
    apellido:'camacho',
    edad:'28'
};
const { nombre,apellido,edad} = aprendiz
console.log(nombre,apellido,edad)
console.table(nombre)
console.table(apellido)
console.table(edad)




//desestructuracion en react es con funciones flecha


const aprendiz1 ={
    nombre:'manuel',
    apellido:'camacho',
    edad:'28'
};*/
/*
const returnaprendiz=(usuario)=>{
    const{nombre,apellido,edad}=aprendiz1
    console.table(nombre,edad,apellido);
}
returnaprendiz(aprendiz1)
//
const returnaprendiz=({nombre,apellido,edad})=>{
    console.table(nombre,edad,apellido)
}
returnaprendiz(aprendiz1)*/




//ejercicio
/*
const materias ={
    nombre:'matematicas',
    profesor:'juan',
    intensidad:'media'
}*/
/*
const returnmaterias=({nombre,profesor,intensidad, hora='3h'})=>{//se le grega una por defecto
    console.table(nombre,profesor,intensidad,hora)
}
returnmaterias(materias)





//desestructurar un objeto con returm

const usecontext=({nombre,profesor,intensidad,hora='3h'})=>{
    return {
        nombres:nombre,
        profesores:profesor,
        intensidades:intensidad,
        horas:hora,
        detalles:{
            raza:'blanco',
            altura:175
        }
    }
}
const {nombres,profesores,intensidades,detalles:{raza,altura}} = usecontext(materias)
console.log(nombres,profesores,intensidades)
console.log(raza,altura)



//desestructuracion de arreglos
const menores = ['andrwes','fernanada','maria']
console.log(menores)
console.log(menores[0])
console.log(menores[1])
console.log(menores[2])
const[ , ,men2]=menores;
console.log(men2)



//mismo ejercicio anterior pero en arreglos
const materias2=()=>{
    return['matematicas','juan','media']
}
const[pos1,pos2,pos3]=materias2();
console.log(pos1,pos2,pos3)





//otro ejercicio desestructurando consultar en chat para entender


const usestate=(nombre)=>{//aqui se lo iguala a un parametro llamado nombre
    return[nombre, () => {console.log('el usuario esta activo');}]//aqui es un return de arreglo hay dos posiciones una nombre y la otra es una funcion que no tiene ningun parametro y imprime el usuario..
}
const [nombre,setnombre]=usestate('andres');//aqui desestructura y se hace una constante o variable  entonces se abre llaves y el primero es nombre y el segundo set nombre y se le da = al usestate que es el que desestructura y a ese se le da un argumento que se llama andres
console.log(nombre);
setnombre();//aqui se llama la funcion que tiene el usuario esta activo no se lo llama con console.log*/





//EVENTOS
/*
console.log(1);
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('2');
});
console.log('3')

//eventos con el mouse
const nav= document.querySelector('.texto')
nav.addEventListener('click',()=>{
    console.log('diste click en el texto')
})

nav.addEventListener('mouseover', ()=>{
    console.log('estas sobre el texto'),
    nav.style.backgroundcolor='red'
})*/

//ejercicio de formulario

function validatemail(email) {
    // Lógica para validar el correo electrónico
    // Debe devolver true si es válido o false si no lo es.
    return true; // Cambia esto con la lógica de validación real
}
document.addEventListener('DOMContentLoaded',function(){
    const login= document.querySelector('#login')
    login.addEventListener("submit", function(event) {
     event.preventDefault()
     const email= document.querySelector('#email').value
     const password= document.querySelector('#password').value

     if(!validatemail(email)){
        alert("ingresa un correo electronico nuevo")
        return;
    
     }

     if (password.length<8){
        alert("la contraseña debe tener 8 caracteres")
        return ;
     }
     const userRole = determineuserole(email);
     color(userRole);
    });
});

    function determineuserole(email){
    if (email==="admin@example.com"){
        return "admin";
    }else{
        return"user"
    }

    }

  function color(userrole)  {
    if (userrole==="admin"){
        document.body.style.backgroundColor="red"
    }
  else{
    document.body.style.backgroundColor="blue"
  }
  }

//