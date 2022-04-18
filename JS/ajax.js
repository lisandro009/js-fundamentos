(()=>{
    const xhr= new XMLHttpRequest(),
    $xhr= document.getElementById("xhr");
    
    $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange",e =>{
        if(xhr.readyState!==4) return;
        
        //console.log(xhr);

        if(xhr.status>=200&&xhr.status<300){
            //console.log("exito");

            let json=JSON.parse(xhr.responseText);

            //console.log(json);
            json.forEach(e => {
                const $li = document.createElement("li");
                $li.innerHTML = `${e.name}-- ${e.username}-- ${e.phone}`;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        }else console.error("Error en la peticion")
    });
    xhr.open("get","https://jsonplaceholder.typicode.com/users/");

    xhr.send();
})();

(()=>{
    const $toFectch=document.getElementById("fetchOl");
    $fragment=document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users/")
    .then((res)=>{
        console.log(res);
        
        return res.ok?res.json():Promise.reject(res);
    }).then((json)=>{
        //console.log(json);
        
        json.forEach(elemento =>{
            const $li =document.createElement("li");
            $li.innerHTML =`${elemento.name}--${elemento.username}--${elemento.phone}`
            $fragment.appendChild($li);
        })
        $toFectch.appendChild($fragment);
    }).catch(e=>{
        console.log(e);
        let message=e.statusText||"Ocurrio un error"
        $toFectch.innerHTML=`${e.status} ${message}`;
    })
})();

(()=>{
    console.log("---------Fetch-Async----------")
    const $toFectchAsync=document.getElementById("fetch-async");
    $fragment=document.createDocumentFragment();
    async function obtenerDatos(){
        try {
            let resp = await fetch("https://jsonplaceholder.typicode.com/users/"),
            json= await resp.json();
            console.log(resp);
            console.log(json);
            if(!resp.ok) throw {status:resp.status,statusText:resp.statusText} //Corta el flujo y lo reenvia al catch
            json.forEach(elemento =>{
                const $li =document.createElement("li");
                $li.innerHTML =`${elemento.name}--${elemento.username}--${elemento.phone}`
                $fragment.appendChild($li);
            })
            $toFectchAsync.appendChild($fragment);
        } catch (error) {
            let mens=error.statusText||"Ocurrio un error";
            $toFectchAsync.innerHTML=`Error :${error.status}: ${mens}`;
        }
    }
    obtenerDatos();
})();

(()=>{
    console.log("---------AXIOS----------")
    const $elementoAxios=document.getElementById("axios");
    $fragment=document.createDocumentFragment();
    axios
    .get("https://jsonplaceholder.typicode.com/usrs/")
    .then((res)=>{
        let json=res.data;
        json.forEach(elemento =>{
            const $li =document.createElement("li");
            $li.innerHTML =`${elemento.name}--${elemento.username}--${elemento.phone}`
            $fragment.appendChild($li);
        })
        $elementoAxios.appendChild($fragment);
    })
    .catch(e=>{
        let mens=e.response.statusText||"Ocurrio un error";

        console.log("catch",e);
        $elementoAxios.innerHTML=`Error ${e.response.status}: ${mens}`
    })
    .finally(()=>{

    })
})();

(()=>{
    console.log("---------AXIOS----------")
    const $elementoAxiosAsync=document.getElementById("axios-async");
    $fragment=document.createDocumentFragment();
    

    async function getData(){
        try {
            let resp= await axios.get("https://jsonplaceholder.typicode.com/users/");
            let json = await resp.data;

            json.forEach(elemento =>{
                const $li =document.createElement("li");
                $li.innerHTML =`${elemento.name}--${elemento.username}--${elemento.phone}`
                $fragment.appendChild($li);
            })
            $elementoAxiosAsync.appendChild($fragment);
        } catch (error) {
            
        }finally{

        }
    }
    getData();
})();




