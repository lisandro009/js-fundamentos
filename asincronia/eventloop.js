


function funcionSetTimeout(orden){
    return new Promise((resolve,reject)=>{
        variable=false,
        setTimeout(function timeout() {
        console.log(orden);
        }, 2000);
        
        if(variable){
            resolve();
        }else{
            reject("No se completo la peticion ajax");
        }
    })
}

funcionSetTimeout("1").then(()=>{

    return funcionSetTimeout("2")
}).then(()=>{
    funcionSetTimeout("3")
}).catch(e=>{
    console.log(e)
})





