
let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let numero3 = document.querySelector("#numero3");
let numero4 = document.querySelector("#numero4");
let numero5 = document.querySelector("#numero5");
let numero6 = document.querySelector("#numero6");
let numero7 = document.querySelector("#numero7");
let numero8 = document.querySelector("#numero8");

let botonCalcular = document.querySelector("#botonCalcular");

let resultadoSuma = document.querySelector("#resultadoSuma");
let resultadoResta = document.querySelector("#resultadoResta");
let resultadoMultiplicacion = document.querySelector("#resultadoMultiplicacion");
let resultadoDivision = document.querySelector("#resultadoDivision");

function clickAlBotonSuma() {
    let sumaInputs = parseInt(numero1.value) + parseInt(numero2.value);
    resultadoSuma.innerText = "Resultado: " + sumaInputs;
}

function clickAlBotonResta() {
    let restaInputs = parseInt(numero3.value) - parseInt(numero4.value);
    resultadoResta.innerText = "Resultado: " + restaInputs
}

function clickAlBotonMultiplicacion() {
    let multiplicacionInputs = parseInt(numero5.value) * parseInt(numero6.value);
    resultadoMultiplicacion.innerText = "Resultado: " + multiplicacionInputs;
}

function clickAlBotonDivision(){
    let divisionInputs = parseInt(numero7.value) / parseInt(numero8.value);
    resultadoDivision.innerText = "Resultado: " + divisionInputs;
}