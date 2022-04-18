console.log("Prototipos")

//funcion constructora

function Animal(nombre,genero){
    this.nombre=nombre;
    this.genero=genero;
    this.sonar=function(){ // para que forme parte del constructor se pone this
        console.log("Hago sonidos")
    }
}

//Instanciar animal

const perro = new Animal("lucky","macho");

console.log(perro);

//Para que los metodos no se repitan cada vez que se cree un objeto se debe agregar al prototypo global y asi liberar memoria

function Vegetal(nombre,color){
    this.nombre=nombre;
    this.color=color;
    // this.comer=function(){ // para que forme parte del constructor se pone this, si es una funcion flecha no se puede ya que el this de esta es el objeto windows
    //     console.log("Comer vegetal")
    // }
}

Vegetal.prototype.comer=function(){
    console.log("Comer vegetal")
}


const zanahoria= new Vegetal("zanahoria","anaranjado");

zanahoria.comer();