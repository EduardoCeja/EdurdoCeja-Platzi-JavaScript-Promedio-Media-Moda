/*********************************************Promedio****************************************************/

//Declaramos la variable lista con el array

let lista=[];

//Creacion de funcion que añadira los datos al array y los irá mostrando en la pantalla para que el usuario tenga una secuencian  

function buttonInputPromedio() {
    // obtenemos el dato del input y lo convertimos a número
    const numero = Number(document.getElementById("InputPromedio").value);

    // agregamos los números brindados por el usuario al aarray
    const anadirNumero = lista.push(numero);
    
    // Imprimimos en pantalla la lista que tiene el usuario para realizar el promedio
    const resultado = document.getElementById("listaUserP");
    resultado.innerText = `Tu lista actual tiene los siguientes números: ${lista}.  Si están bien, presiona el botón "Calcular Promedio".`;
}

function buttonPromedio() {
  
    const valorAcumulado = (acumulador, nuevoElemento) => acumulador + nuevoElemento;
    const promedioLista = lista.reduce(valorAcumulado) / lista.length;

    //imprimimos el resultado en pantalla
    const resultado = document.getElementById("resultadoPromedio");
    resultado.innerText = "El promedio es " + promedioLista;
}


/********************************************Mediana******************************************************/

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  function calcularMediana() {
  //Se captura los datos del html y se guardan los valores dentro de una variable
    const entradaMediana = document.getElementById("inputMediana");
    const medianaValue = entradaMediana.value;
  //Al ser un String los valores capturados, se procede a convertir el formato a Number 
    let arrayMediana = Array.from(medianaValue.split(","), Number);
  //Ordenamos los valores de la lista desordenada mediante el metodo sort() de menor a mayor
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);
  // console.log(listaOrdenada);
  // Hallamos la mitad de la cantidad de elemento de mi lista obtenida del HTML y lo redondeamos en caso sea decimal con la funcion parseInt()
    const mitadLista = parseInt(listaOrdenada.length / 2);
  // console.log(mitadLista);

  // Creamos la funcion esPar para verificar si la lista es par o impar
    function esPar(numerito) {
      if (numerito % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }

    let mediana;
  //Si la lista es par procedemos hallar la mediana mediante esta forma de lo contrario seguiriamos con el else
    if (esPar(listaOrdenada.length)) {
      const elemento1 = listaOrdenada[mitadLista - 1];
      const elemento2 = listaOrdenada[mitadLista];
  //Llamamos a la funcion calcularMediaAritmetica() con los elementos1 y elementos2 como parametros y lo guardamos como la variable mediana
      const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
      mediana = promedioElemento1y2;
    } else {
      mediana = listaOrdenada[mitadLista];
    }
    //Enviamos los resultados obtenidos a la pagina html para su visualizacion
    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerText = "La mediana es de: " + mediana;
  }


/***********************************************Moda********************************************************/

const listaModa = [1,2,3,1,2,3,4,2,2,2,1]

//Contar cuantas veces aparece cada numero en el array

//Se crea un objeto vacio para irlo rellenando con un metodo
const lista1Count = {};

//map() metodo que recorre todo el array listaModa
listaModa.map(
  function (elemento){
    if(lista1Count[elemento]){
      lista1Count[elemento] =  lista1Count[elemento] +1;
    } else {
    lista1Count[elemento] =1;
    }
  }
);

//Convertir el objeto a Array
//Utiliza la funcion .sort() para buscar y iterar por cada uno de los elementos y encontrar la posicion de nuestro array que mas veces el numero mas grande en lista1Count
const lista1Array = Object.entries(lista1Count).sort(
  function  (elementoA, elementoB){
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];
/*************************************Interaccion de la Moda en HTML********************************/

function calcularModa(){
   //Se captura los datos del html y se guardan los valores dentro de una variable
  const entradaModa = document.getElementById("inputModa");
  const modaValue= entradaModa.value
  //Al ser un String los valores capturados, se procede a convertir el formato a Number 
  let arrayModa = Array.from(modaValue.split(","),Number);

  //map() metodo que recorre todo el array listaModa
  const lista2Count={};
  arrayModa.map(
    function (elemento){
      if(lista2Count[elemento]){
        lista2Count[elemento] =  lista2Count[elemento] +1;
      } else {
      lista2Count[elemento] =1;
      }
    }
  );

//Convertir el objeto a Array
//Utiliza la funcion .sort() para buscar y iterar por cada uno de los elementos y encontrar la posicion de nuestro array que mas veces el numero mas grande en lista1Count
const lista2Array = Object.entries(lista2Count).sort(
  function  (elementoA, elementoB){
    return elementoA[1] - elementoB[1];
  }
);

const moda2 = lista2Array[lista2Array.length - 1];
const mostrarResultadoModa = document.getElementById("resultadoModa");

mostrarResultadoModa.innerText = `La moda es ${moda2[0]} `

}