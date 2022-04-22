/*Promedio*/

//Declaramos la variable lista con el array

let lista=[];

//Creacion de funcion que añadira los datos al array y los irá mostrando en la pantalla para que el usuario tenga una secuencian  

function buttonInputPromedio() {
    // obtenemos el dato del input y lo convertimos a número
    const numero = Number(document.getElementById("InputPromedio").value);

    // agregamos los números brindados por el usuario al aarray
    const anadirNumero = lista.push(numero);
    
    // Imprimimos en pantalla la lista que tiene el usuario para realizar el promedio
    const resultado = document.getElementById("listaUser");
    resultado.innerText = `Tu lista actual tiene los siguientes números: ${lista}.  Si están bien, presiona el botón "Calcular Promedio".`;
}

function buttonPromedio() {
  
    const valorAcumulado = (acumulador, nuevoElemento) => acumulador + nuevoElemento;
    const promedioLista = lista.reduce(valorAcumulado) / lista.length;

    //imprimimos el resultado en pantalla
    const resultado = document.getElementById("resultadoPromedio");
    resultado.innerText = "El promedio es " + promedioLista;
}


