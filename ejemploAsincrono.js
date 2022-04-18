//Ejmplo de promesas en javascript
function carga (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            dias=["Lunes","Martes","miercoles","Jueves","Viernes"];
            console.log(dias);
            if(dias.length>0){
                resolve()
            }else{
                reject();
            }
        },2000);
       
    })
    
}

 carga().then(()=>{
     let lista=document.getElementById("dias");
     let listaDeDias="";

     if(dias.length>0){
     for (var dia of dias) {
        listaDeDias=lista.innerHTML=listaDeDias+`<li>${dia}</li>`;
     }
     }else{
         lista.innerHTML=`<li>Los datos no se han cargado</li>`
 }
}).catch(()=>{
     console.log("No se han cargado los datos");
 })
funcionAsincrona();
// async function funcionAsincrona(){
//    await carga();
//    let lista=document.getElementById("dias");
//    let listaDeDias="";

//    if(dias.length>0){
//    for (var dia of dias) {
//        listaDeDias=lista.innerHTML=listaDeDias+`<li>${dia}</li>`;
//   }
//   }else{
//       lista.innerHTML=`<li>Los datos no se han cargado</li>`
//  }
// }



//Ejemplo de peticion ajax

// const peticion = async () => {
//     const response =  fetch('https://jsonplaceholder.typicode.com/users/3');
//     const data =  response.json();
//     return data;
// }
// const data = peticion();
// data.then(console.log)