let $boton = document.getElementById("boton");
console.log($boton);

let listaMascota="";
$boton.onclick=(e)=>{
   e.preventDefault();
   let nombre=document.getElementById("nombre");
   console.log(nombre.value);
   listaMascota=document.getElementById("mascotas").innerHTML=`<li>${nombre.value}</li>`+`<img src="https://placeimg.com/200/200/animals"></img>`+listaMascota;
}

// let $dark_check=document.getElementById("dark");
// let $divdark=document.getElementById("divdark");
// $dark_check.onchange=()=>{
//    if($dark_check.value){
//       $divdark.style.backgroundColor="#000"
//       $divdark.style.setProperty("color","#fff")
//    }

// }

//https://placeimg.com/200/200/animals