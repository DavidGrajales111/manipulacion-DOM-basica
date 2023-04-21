let h1 = document.querySelector("h1");
let input1 = document.querySelector("#calculo1");
let input2 = document.querySelector("#calculo2");
let btn = document.querySelector("#btnCalcular");
let pResultado = document.querySelector("#resultado");


// De esta manera aqui directamente abajo con el evento .preventdefault hacemos que no se recargue la pagina por la etiqueta form para que no ejecute lo que se ejecutaria por defento, en este casi el recargar de la pagina.

// btn.addEventListener("click", btnOnClick);

// function btnOnClick(event){
//     console.log({event});
//     event.preventDefault();
//     let sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//     pResultado.innerText = "Resultado: " + sumaInputs;
// }


// De esta manera simplemente cambiamos el atributo de el ultimo button del form y le damos el valor de "button".

btn.addEventListener("click", btnOnClick);

function btnOnClick(event){
    // console.log({event});
    // event.preventDefault();
    let sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + sumaInputs;
}
