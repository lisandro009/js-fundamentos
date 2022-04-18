

var nombre="Christian"


{
    let x=2 //la variable se declara en el contexto desde la linea de codigo 6 a la 7
}

//Aqui no se puede usar la variable x
//console.log(x) error

{
    var y=4 // la variable se declara en el contexto global
}
console.log(y) //4

//Aqui se puede usar la variable y

function contexto(){
    let nombre="Lisandro"
//Aqui se puede usar la variable nombre
    console.log(nombre);
}
//Aqui no se puede usar la variable nombre

const persona ={
    nombre :"Christian",
    saludar: function (){
        let nombre="chr"
        console.log(`Hola ${nombre}`)//imprime chr y no Christian
        console.log(`Hola ${this.nombre}`)//imprime Christian y no chr, llama al contexto donde se encuentra la funcion (persona)

    }
}

persona.saludar();

const otraPersona ={
    saludar:persona.saludar.bind(persona) //llama al metodo del objeto indicado (persona )
}

//otraPersona.saludar();