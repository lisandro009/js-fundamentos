const arreglo= [];

const arreglo2=[5,false, [2,"cadena"], "cadena",2.12]
console.log(arreglo2);

//push para agregar elemento al array al final de los elemntos

arreglo.push("elemento nuevo")

console.log(arreglo)
//quita el ultimo elemento
arreglo.pop();

console.log(arreglo)

// permite ejecutar una funcion por cada elemento del arreglo

let dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
let lista="";
dias.forEach(function(elemento){
    lista=document.getElementById("lista").innerHTML=lista+"<li>"+elemento+"</li>";
})

