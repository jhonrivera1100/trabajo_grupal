const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.addEventListener('DOMContentLoaded', () => {
    const email = document.getElementById('email');
    const contraseña = document.getElementById('password');
    const iniciar = document.getElementById('iniciar');

     // Define la URL de la página a la que deseas redirigir
    
let form =document.getElementById("formulario")
console.log(form)

    form.addEventListener("submit", () => {

        const micorreo = email.value.trim();
        const micontraseña = contraseña.value.trim();
        
        // Esto verifica si el correo y contraseña son correctas
        if (micorreo == 'inzandara@gmail.com' && micontraseña == '12345'){
            // Redirigir a mi pagina del carrito
            form.action="../TRIMESTRE5/carrito_compras/index.html"
            
        } 
        else {
            alert('incorrecto. Por favor, intenta de nuevo.');
        }

    });

});