// let b1 = document.getElementById("b1")
// let b2 = document.getElementById("b2")
// let b3 = document.getElementById("b3")
// let b4 = document.getElementById("b4")
// let b5 = document.getElementById("b5")
// let b6 = document.getElementById("b6")
// let b7 = document.getElementById("b7")
// let b8 = document.getElementById("b8")
// let b9 = document.getElementById("b9")
// let b0 = document.getElementById("b0")

let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)){
        const boton = botones[key];
        boton.addEventListener("click", pintar)
        console.log(boton)

    }
}

function pintar(e){
    console.log(e.target.innerText)
    resultado.value= e.target.innerText
}

function operadores(e){
    let operador = e.target.innerText
    console.log(operador)
    if(operador == "=")
        igual()
    else 
        almacena_parametro(operador)
}

let prm1
let operacion
function almacena_parametro(){
    //prm1 = resultado.value
    parametros.push(resultado.value)
    eventos.push(resultado.value)
    resultado.value = ""
    operacion = prm
    eventos.push(operacion)
}

function igual(){
    //prm2 = resultado.value
    let variable = 0
    parametros.push(resultado.value)
    eventos.push(resultado.value)
    for (const key in parametros) {
        if (Object.prototype.hasOwnProperty.call(parametros, key)){
            const prm = parametros[key];
            if(operacion == "+")
                variable += parseInt(prm)
            if(operacion == "-")
                if(variable == null)
                    variable = parseInt(prm)
                else
                    variable -= parseInt(prm)
                
                variable -= parseInt(prm)
            if(operacion == "*")
                if(variable == null)
                    variable *= parseInt(prm)
                else
                    variable *= parseInt
            if(operacion == "/")
                variable /= parseInt(prm)
        }
    }
    resultado.value= variable
}

let parametros = []

