 //Usar el habla del navegador
 //let texto="Hola mundo";

 //const hablar=texto=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

 //hablar(texto);
 

 //console.log(document);//Api para manejar html con js

//  console.log(document.body);

// console.log(document.getElementsByClassName("parrafo"));
// console.log(document.getElementsByName("numero"));
// console.log(document.getElementsByTagName("form"));
// console.log(document.getElementById("drag"));
// console.log(document.querySelector(".parrafo"));

let parrafo2=document.getElementById("parrafo2");
parrafo2.name = "asdasd";
console.log(parrafo2.getAttribute("name"));

paises=["sv","usa","mx","esp"];
var lista=document.getElementById("paises");
var cadena="";
for (var index = 0; index < paises.length; index++) {
    cadena=lista.innerHTML=cadena+`<li>${paises[index]}</li>`;
    console.log(index);
}


// Generar un nuevo enlace
const nuevoEnlace = document.createElement("A");
 
// Agregar el href
nuevoEnlace.href = "https://google.com";
 
// Agregar el texto
nuevoEnlace.textContent = "Tienda Virtual";
 
// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");
 
// Agregarlo al Documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);


console.log(navegacion.style);

navegacion.style.background="black";





