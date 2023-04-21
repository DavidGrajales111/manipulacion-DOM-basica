console.log("Hello, world");

let h1 = document.querySelector("h1");
let input1 = document.querySelector("#calculo1");
let input2 = document.querySelector("#calculo2");
let btn = document.querySelector("#btnCalcular")
let pResultado = document.querySelector("#resultado");

function btnOnClick(){
    let sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerText = "Resultado: " + sumaInputs;
}




// h1.innerHTML = "Patito <br> feo";
// h1.innerText = "Patito <br> feo";