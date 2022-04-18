let verdadero=true;
let falso=false;

//otra forma de declarar
let t= Boolean(true);

console.log(typeof verdadero);

//Valores que tienden a verdadero o falso
//https://developer.mozilla.org/es/docs/Glossary/Truthy
console.log(Boolean("a"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log("numero 12="+Boolean(12));


cadena="cadena";
//Para que se usa
if(cadena){
    // console.log("Cadena con contenido");
}

let numero=0;

if(numero){
    // console.log("Es diferente de 0");
}
