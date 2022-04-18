var barra= document.querySelector(".barra");
var porcentaje=0;
var intervalo=setInterval(function(){
    console.log(porcentaje)
    if(porcentaje<=100){
        
        barra.style.setProperty("width",`${porcentaje}%`);
        porcentaje+=0.5;
    }else{
        clearInterval(intervalo);
    }

},250)

var barra2= document.querySelector(".barra2");
var porcentaje2=0;
var intervalo2=setInterval(function(){
    if(porcentaje2<=100){
        
        barra2.style.setProperty("width",`${porcentaje2}%`);
        porcentaje2+=0.5;
    }else{
        clearInterval(intervalo2);
    }

},250)