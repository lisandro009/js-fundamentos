$barra=document.querySelector(".progress-bar");
$barra1=document.querySelector(".progress-bar1")
$barra2=document.querySelector(".progress-bar2")




function llenado(barra){
    let porcentajeLleno=0;

    return new Promise((resolve,reject)=>{
        console.log(barra)

        let llenado= setInterval(()=>{
            console.log(barra)

            if(porcentajeLleno<=100){
                barra.style.setProperty("width",`${porcentajeLleno}%`);
                porcentajeLleno+=1;
                
            }else{
                clearInterval(llenado)
                resolve()

            }
        }, 100);    
    })
    
}

async function funcionSincrona(){
    await llenado($barra);
    await llenado($barra1);
    await llenado($barra2);
}

funcionSincrona()

function mostrar(algo){
    document.getElementById("demo").innerHTML=algo;
}

function sumar(n1,n2){
    let suma =n1+n2;
    mostrar(suma);
}

sumar(1,2)