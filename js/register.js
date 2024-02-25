//Selectores
const formRegister = document.getElementById("form");
const nameUser = document.getElementById("nameUser");
const emailUser = document.getElementById("email");
const adressUser = document.getElementById("adress");
const passwordUser = document.getElementById("password");
const confirmPasswordUser = document.getElementById("confirmPassword");
const URL = "http://localhost:3000/users"


//Eventos 

formRegister.addEventListener("submit", (event) => {
    event.preventDefault();

    agregarUsuario();
    // window.location = "login.html"
    
});

async function agregarUsuario(){
    await fetch(URL, {
        method: "POST", 
        headers: {
            contentType: "application/json" 
        }, 
        body: JSON.stringify({
            name : nameUser.value,
            email: emailUser.value,
            adress: adressUser.value, 
            password: passwordUser.value, 
            confirmPassword: confirmPasswordUser.value
        })
    })
}


