

async function  fetchAsync(){
    var url="https://jsonplaceholder.typicode.com/todos";

    var parametros={
        method:'GET',
    }
    try {
        let respuesta = await fetch(url,parametros);
        let respuestaJS= await respuesta.json();
        if(respuesta.ok) {
            console.log(respuestaJS)
        }else throw {status:respuesta.status,statusText:respuesta.statusText} //Corta el flujo y lo reenvia al catch
    } catch (error) {   
        let mens=error.statusText||"Ocurrio un error";
        console.log(`Error :${error.status}: ${mens}`)
    }
}

fetchAsync()



    