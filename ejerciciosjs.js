function calculoCaracteres(cadena){
    this.cadena=cadena;
    console.log(cadena.length);
}

calculoCaracteres("hola")

function repetir(cadena,veces){
    for (let index = 0; index < veces; index++) {
        console.log(cadena);
        
    }

}

repetir("hola",4);

function cortar(cadena, separador){
    console.log(cadena.split(separador))
}

cortar("hola mundo"," ")