(function(w){
    console.log("Primera Inmedity invoke function exutable")
    console.log(w);
})(window)//sirven para crear un ambito distinto al global

function ejemplo(funcion){
    let variable="dentro de la funcion";
    funcion(variable);
}

ejemplo(function(variable){
    console.log(variable)
    
})

