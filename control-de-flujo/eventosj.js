const consola = function(){
    console.log('desde archivo js')
}

const evento=document.getElementById('evento');

evento.onclick = console.log('un solo evento')


const eventMultiple=document.getElementById('event-multiple');

function manejador(){
    alert('addeventlistener')
}

eventMultiple.addEventListener("click", manejador);
eventMultiple.addEventListener("click",()=> console.log('consola'));