var url="https://jsonplaceholder.typicode.com/todo";
axios.get(url)
.then((respuesta)=>{
    console.log(respuesta);
    console.log(respuesta.data)
})
.catch((error)=>{
    console.log("Ocurrion un error "+error.response.status);
})