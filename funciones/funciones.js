imprimir(); //antes
function imprimir() {
  console.log("hola mundo");
  //console.log(this);
}

imprimir(); //despues

//funcion expresada
//Esta funcion no puede ser invocada antes de la funcion
const funcion = function () {
  console.log("Funcion expresada en donde se asigna la funcion a la variable");
};

//funciones flecha

const flecha = () => {
  console.log("permiten dejar mas expresada en codigo las funciones");
};

const sinParentesis = (parametro) =>
  console.log(
    `Si solo tiene una linea de codigo el retorno es implicito ${parametro}`
  );

const ventana = () => console.log(this);

ventana();

//this hace referencia al contexto donde se usa
