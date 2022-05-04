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

var objetoEvento=document.getElementById("objeto-event");

objetoEvento.addEventListener("mouseover",e=>e.target.style.backgroud="yellow")
objetoEvento.addEventListener("mouseout",e=>e.target.style.border="2px solid black")
objetoEvento.addEventListener("click",e=>{
    console.log("asds")
    e.target.style.backgroud="light-blue"
})
