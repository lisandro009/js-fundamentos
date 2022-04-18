// definicion de clases

class Animal{
    constructor(nombre, genero){
        this.nombre=nombre;
        this.genero=genero
    }

    comer(){
        console.log("Estoy comiendo");
    }
    
}

//como instanciar

const perro= new Animal("Dogi",",macho")

console.log(perro.comer);
//Objetos 