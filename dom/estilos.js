$elementoParrafo=document.querySelector("#parrafo");
console.log($elementoParrafo.getAttribute("style"));
//Acceder a un estilo en particular
console.log($elementoParrafo.style.color);

//Cambiar el valor de un estilo

$elementoParrafo.style.setProperty("background-color","#f32343")