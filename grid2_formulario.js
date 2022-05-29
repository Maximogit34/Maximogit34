
const nombre = document.getElementById("fullName")
const email = document.getElementById("userMail")
const pass = document.getElementById("userPassword")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warning += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warning += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warning += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warning
    }else{
        parrafo.innerHTML = "Enviado"
    }
})