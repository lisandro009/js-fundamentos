function obtenerListado(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let arreglo=[]
            if(arreglo.length>0){
                console.log(arreglo);
                resolve(arreglo)
            }else
            {
               reject()
            }
        },2000)
    })
}

obtenerListado().then((arreglo)=>{
    console.log(`arreglo ${arreglo}`)
    return obtenerListado();
}).then(arreglo =>{
    console.log(`arregle 2 ${arreglo}`)
}).catch(err=>console.error("error "+err))