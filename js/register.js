//Selectores
const formRegister = document.getElementById("formRegister");
const nameUser = document.getElementById("nameUser");
const emailUser = document.getElementById("email");
const addressUser = document.getElementById("address");
const passwordUser = document.getElementById("password");
const confirmPasswordUser = document.getElementById("confirmPassword");
const btnSubmitForm = document.getElementById("btnSubmitForm");
const URL = "http://localhost:3000/users";


//Eventos 

formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
    agregarUsuario();
    // window.location = "login.html"
    
});


//Funciones

async function agregarUsuario(){
    await fetch(URL, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({
            name : nameUser.value,
            email: emailUser.value,
            address: addressUser.value, 
            password: passwordUser.value, 
            confirmPassword: confirmPasswordUser.value
        })
    })
}


