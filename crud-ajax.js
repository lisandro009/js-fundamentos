const d = document,
$table = d.querySelector(".crud-table"),
$tablecuerpo = d.querySelector(".cuerpo"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$temp = d.querySelector(".crud-template").content,
$fragment = d.createDocumentFragment();


//
const getAll=async (opc)=>{
    let {url, metodo,exito,sierror,datos} = opc;
    try {
        let respuesta = await fetch("http://localhost:8080/usuarios",{
            method:metodo,
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            //body:JSON.stringify(datos),
            });
            const enjson = await respuesta.json();
            console.log(enjson)
            if (!respuesta.ok) throw{status:respuesta.status,statusText:respuesta.statusText};
            enjson.forEach(element => {
                $temp.querySelector(".nombre").textContent = element.nombre;
                $temp.querySelector(".motivo").textContent = element.motivo;
                $temp.querySelector(".editar").dataset.id = element.id;
                $temp.querySelector(".editar").dataset.apellido = element.apellido;
                $temp.querySelector(".editar").dataset.name = element.nombre;
                $temp.querySelector(".editar").dataset.motivo = element.motivo;
                $temp.querySelector(".editar").dataset.email = element.email;
                $temp.querySelector(".eliminar").dataset.id = element.id;
                
                
                
                let $clone = d.importNode($temp,true);
                $fragment.appendChild($clone);
            });
            $table.querySelector("tbody").appendChild($fragment);
    } catch (error) {
        let mens=error.statusText||"Ocurrio un error";
        $table.insertAdjacentHTML("afterend", `<p><b>Error :${error.status}: ${mens}</p></b>`)
        console.error(error);
    }
   
        
}


d.addEventListener("DOMContentLoaded",getAll);

d.addEventListener("submit",async e =>{
    console.log(e)
    if (e.target===$form) {
        e.preventDefault();

        if (!e.target.id.value) {
            try {
            
            let respuesta = await fetch("http://localhost:8080/usuarios",{
                method:"POST",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset-utf-8'
                },
                body:JSON.stringify({
                    nombre:e.target.nombre.value,
                    apellido:e.target.apellido.value,
                    email:e.target.correo.value,
                    pass:e.target.password.value,
                    motivo:e.target.motivo.value
                }),
                });
                console.log(respuesta);
                //const enjson = await respuesta.json();
                
                if (!respuesta.ok) throw{status:respuesta.status,statusText:respuesta.statusText};
                location.reload();
                } catch (error) {
                    let mens=error.statusText||"Ocurrio un error";
                    $table.insertAdjacentHTML("afterend", `<p><b>Error :${error.status}: ${mens}</p></b>`)
                    console.log(error);
                }

        }else{//Actualizacion
            try {
                
                let respuesta = await fetch(`http://localhost:8080/usuario/${e.target.id.value}`,{
                method:"PUT",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset-utf-8'
                },
                body:JSON.stringify({
                    nombre:e.target.nombre.value,
                    apellido:e.target.apellido.value,
                    email:e.target.correo.value,
                    motivo:e.target.motivo.value
                }),
               
                });
                
                if (!respuesta.ok) throw{status:respuesta.status,statusText:respuesta.statusText};
                location.reload();
            } catch (error) {
                let mens=error.statusText||"Ocurrio un error";
                $table.insertAdjacentHTML("afterend", `<p><b>Error :${error.status}: ${mens}</p></b>`)
                console.log(error);
            }
        }
    }
    
   
});

d.addEventListener("click",async e=>{
    if(e.target.matches(".editar")){
        $title.textContent="Editar usuario";
        $form.nombre.value = e.target.dataset.name;
        $form.apellido.value = e.target.dataset.apellido;
        $form.correo.value = e.target.dataset.email;
        $form.motivo.value = e.target.dataset.motivo;
        $form.id.value= e.target.dataset.id;
    }
    if (e.target.matches(".eliminar")) {
        let eliminar = confirm(`Estas seguro de eliminar el usuario ${e.target.dataset.nombre}`);

        if (eliminar) {
            try {
                let respuesta = await fetch(`http://localhost:8080/usuarios/${e.target.dataset.id}`,{
                method:"DELETE",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json; charset-utf-8'
                },
                
               
                });
                
                if (!respuesta.ok) throw{status:respuesta.status,statusText:respuesta.statusText};
                location.reload();
            } catch (error) {
                let mens=error.statusText||"Ocurrio un error";
                $table.insertAdjacentHTML("afterend", `<p><b>Error :${error.status}: ${mens}</p></b>`)
                console.log(error)
            }
        }
    }
})
/*(()=>{
    

    fajax()
    async function getDatos(){

            enjson.forEach(el => {
                const fila= d.createElement("tr");
                const col = d.createElement("td");
                //const nom = d.createTextNode(`${el.nombre}`);
                //col.appendChild(nom);
                col.textContent = `${el.nombre}`;
                fila.appendChild(col);
                $fragment.appendChild(fila);
                //fila.innerHTML=`<td>ssss</td>`
            });
            $tablecuerpo.appendChild($fragment);
      
    }
    getDatos();
})();*/
