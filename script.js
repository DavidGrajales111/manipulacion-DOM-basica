console.log("Hello, world");

let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let parrafito = document.getElementsByClassName("parrafito");
let pid = document.getElementById("pid");
let input = document.querySelector("input");

console.log(input.value); // El .value nos manda en consola el valor que este escrito en ese momento en el input

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = "Patito <br> feo";
h1.innerText = "Patito <br> feo";

console.log(h1.getAttribute("class"));
h1.setAttribute("class", "rojo");

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456";


let img = document.createElement("img");
img.setAttribute("src", "https://www.blender.org/wp-content/uploads/2013/04/gleb-alexandrov-sunrise-02-500x200.jpg");
console.log(img);

// pid.innerHTML = "";
pid.append(img);