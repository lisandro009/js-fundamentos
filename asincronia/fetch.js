// fetch(url,parametros)
// .then((respuesta)=>{
//     console.log(`si la peticion se cumple ${respuesta}`)
// })
// .catch((error)=>{
//     console.log(`error ${error}`)
// })
// .finally(()=>{
//     console.log("Codigo que se ejecuta si o si")
// })

var url="https://jsonplaceholder.typicode.com/todos";

var parametros={
    method:'GET',
}

fetch(url,parametros)
.then((respuesta)=>{
    // respuesta.text(); para convertir a texto
    // respuesta.blob(); para convertir a formato de archivos multimedia
     return respuesta.ok?respuesta.json():Promise.reject(respuesta);
}).then((respuestaJson)=>{
    console.log(respuestaJson);
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Codigo que se ejecuta si o si")
})