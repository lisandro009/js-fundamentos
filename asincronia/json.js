const objetoJS={
    cadena:"cadena",
    numero:78,
    boolean:false,
    arreglo:[1,2,3],
    objeto:{
        letra:"a",
        numero:1
    },
    nulo:null,
}
console.log(objetoJS);
console.log(JSON.stringify(objetoJS));
console.log("{}"); // esto es texto aunque parezca un arreglo, en la cosola aparece en color negro
console.log(JSON.parse("{}")); //convierte el texto a formato de js
console.log(JSON.parse("[]")); 
console.log(123);
//console.log(JSON.parse("texto"));// muestra error ya que no se puede convertir un texto a texto de js es lo mismo
console.log(JSON.parse("null"));


console.log({})
console.log(JSON.stringify({}))
console.log(123);
console.log(JSON.stringify(123));

//objeto js a json
console.log({y:1,s:null})
console.log(JSON.stringify({y:1,s:null}))




