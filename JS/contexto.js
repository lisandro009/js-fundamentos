const persona ={
    nombre :"Christian",
    saludar: function (){
        let nombre="jjjjj"
        console.log(`Hola ${this.nombre}`)
    }
}

persona.saludar();

const otraPersona ={
    saludar:persona.saludar.bind(persona)
}

otraPersona.saludar();