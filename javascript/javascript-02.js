let resultado = document.getElementById("resultado");
let botones = document.getElementsByTagName("button");

let valorAnterior = "";
let operacionActual = null;

// Recorremos los botones para asignar eventos
for (let boton of botones) {
    if (boton.id === "eq") {
        boton.addEventListener("click", calcular);
    } else if (boton.id === "lim") {
        boton.addEventListener("click", limpiar);
    } else if (boton.classList.contains("operador")) {
        boton.addEventListener("click", prepararOperacion);
    } else {
        boton.addEventListener("click", agregarNumero);
    }
}

function agregarNumero(e) {
    resultado.value += e.target.innerText;
}

function prepararOperacion(e) {
    valorAnterior = resultado.value;
    operacionActual = e.target.innerText;
    resultado.value = ""; // Limpiamos la pantalla para el segundo número
}

function limpiar() {
    resultado.value = "";
    valorAnterior = "";
    operacionActual = null;
}

function calcular() {
    if (operacionActual === null || valorAnterior === "") return;

    let p1 = parseFloat(valorAnterior);
    let p2 = parseFloat(resultado.value);
    let final = 0;

    switch (operacionActual) {
        case "+": final = p1 + p2; break;
        case "-": final = p1 - p2; break;
        case "*": final = p1 * p2; break;
        case "/": 
            final = p2 !== 0 ? p1 / p2 : "Error"; // Evitar división por cero
            break;
    }

    resultado.value = final;
    operacionActual = null; // Reiniciamos la operación
}