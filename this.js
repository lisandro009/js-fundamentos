var palabra="hola";
this.nombre="jose";

function contextoDeFuncion(){
    // this.juego="Cod";
    let dejar="Let";
    var variable="var";
    console.log(dejar,variable);

    {
        let dejarEnBloque="let en bloque"; //esta variable existe solo en elbloque de {}
        var variableEnBloque="variable en bloque";

        console.log(dejarEnBloque,variableEnBloque);
    }

    console.log(variableEnBloque);
    // console.log(dejarEnBloque); da error porque la variable dejarEnBloque solo existe en {}
 

}

contextoDeFuncion();
console.log('================this===================');


const objeto={
    juego:"royal",
    palabra:"otra",
    funcion:function(){ //Contexto del objeto
        console.log(this);
    },
    funcionFlecha:()=>{
        console.log(this);//Contexto global

    }
}

objeto.funcion();
objeto.funcionFlecha();

