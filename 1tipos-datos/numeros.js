//Declaracion
let numeroEntero = 12;
let numeroDecimal= 12.2091;
let numeroString= "4";// Los datos extraidos del dom vienen string

//Metodos

console.log(numeroDecimal.toFixed(1));//redondea

console.log(typeof numeroDecimal, typeof numeroString)

console.log(typeof parseInt(numeroString));


console.log(numeroDecimal+numeroEntero);
setTimeout(()=>{
console.log(typeof document.getElementById("n").value)

},3000)