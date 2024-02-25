//Selectores

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const URL_BASE = "http://localhost:3000/users"
//Eventos

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    logIn()
});

async function logIn(){
    const response = await fetch (`${URL_BASE}?email=${email.value}`);
    const data = await response.json();

    if(!data){
        console.error("Email no registrado")
        return;
    }

    if(data[0].password !== password.value){
        console.error("contraseña inválida");
        return;
    }

    window.location.href = "inicio.html"

}

