// function saludar(nombre) {
//     alert('Hola ' + nombre);
//   }
  
//   function procesarEntradaUsuario(callback) {
//     var nombre = prompt('Por favor ingresa tu nombre.');
//     callback(nombre);
//   }
  
//   procesarEntradaUsuario(saludar);//sincrono

//sin callback
// var respuesta

// function sumar(sumando){

//     setTimeout(()=>{
//         console.log('Ejecutando suma')
//         respuesta=4+sumando;
        
//     },2000)
    
// }
// sumar(4);
// console.log(respuesta);

//Con callback
var respuesta

function sumar(sumando,callback){

    setTimeout(()=>{
        console.log('Ejecutando suma')
        respuesta=4+sumando;
        callback(respuesta);//ejecutando despues desumar
        
    },2000)
    
}

sumar(4,(respuesta)=>{//funcion callback
    console.log(respuesta);
   
})



//===========================================================

// var $barra=document.querySelector(".progress-bar"),
// $barra2=document.querySelector(".progress-bar1"),
// $barra3=document.querySelector(".progress-bar2");




// function cargando(barra,callback2){
//     let porcentajeLleno=0
//     setTimeout(()=>{//Espera que termine de cargar Para la ejecucion del proximo evento
//         let intervalo=setInterval(()=>{//Ejecuta cada0.05s lo que tenga dentro
//             console.log(barra)
        
//             if(porcentajeLleno<=100){
//                 barra.style.setProperty("width",`${porcentajeLleno}%`);
//                 porcentajeLleno+=1;
                
//             }else{
//         clearInterval(intervalo);//cuando llega a cero se

//             }
//         },50)
//         callback2(porcentajeLleno)

//     },5000)//Espera 5s para pasar a la siguiente linea de codigo(linea56), mientras se ejecuta el setinterval
    
// }

// cargando($barra,()=>{
//     cargando($barra2,()=>{
//         cargando($barra3,()=>{
    
//         })
//     })
// })