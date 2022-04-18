$barra=document.querySelector(".progress_bar")

let porcentajeLleno=0;

let llenado=setInterval(() => {
    if(porcentajeLleno<=100){
        $barra.style.setProperty("width",`${porcentajeLleno}%`);
        porcentajeLleno+=1;
        
    }else{
        clearInterval(llenado)
    }
}, 1000);