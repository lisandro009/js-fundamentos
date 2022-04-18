let contador =0;
while(contador <15){
    console.log(contador);
    contador+=1;
}

do {
    console.log(`Do while ${contador}`)
} while (contador <15);

for(a=0; a<8;a=a+2){
    console.log(`Bandera a ${a}`);
} 

objeto={
    "propiedad1":1,
    "propiedad2":"valor2",
    "sdasd": "valor"
}


//forin sirve para recorrer objetos literales y forin para recorrer objetos iterables.
for (const llave in objeto) {
    console.log( objeto[llave]);
}

cadena="abc def";

for (const elemento of cadena) {
    console.log(elemento)
}