//spread operator (operador de propagacion)
/*
El operador de propagación spread operator permite que una
expresión sea expandida en situaciones donde se
esperan múltiples argumentos (llamadas a funciones)
o múltiples elementos (arrays literales).
*/
/*
function suma(...argumentos){
    console.log(argumentos);
}

suma(4,8,12,8954,7);
suma(4,8,12,8954,7,2,3,45);
suma(false,8,12,"8954",7);
*/
/*
function suma(...numeros){
    let acum = 0;
    for (let i = 0; i < numeros.length; i++) {
        acum += numeros[i];
    }
    return acum;
}
*/
function suma(...numeros){
    return numeros.reduce(function(acum,numero){
        acum += numero
        return acum;
    },0);
}

/*
function dobles(...numeros){
    const resultado = []
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * 2);
    }
    return resultado;
}
*/
const dobles = (...numeros) =>  numeros.map(numero  => numero * 2);
    //arrow function no requiere poner return, lo hace automatico


//filter
/*
function pares(...numeros){
    const resultado = []
    const length = numeros.length;
    for (let i = 0; i < length; i++) {
        const numero = numeros[i];
        if (numero % 2 == 0){
            resultado.push(numero);
        }
    }
    return resultado;
}
*/

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0); //arrow function

suma(4,8,12,8954,7,9);