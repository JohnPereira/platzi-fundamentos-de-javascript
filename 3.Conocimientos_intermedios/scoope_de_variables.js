//scope: conjunto de variables y funciones al cual podemos
// acceder en una determinada linea de codigo

//closures: funciones que recuerdan el scope, el entorno en el cual fueron creadas
// y pueden acceder a todas las variables y funciones que pertenecen a ese scope pero con los
//valores que tienen esas variables y funciones al momentos de llamarlas

//scope:
//el scope tiene que ver en donde se definio esa variable o 
//funcion y como fue llamada
//scope global:

var nombre = 'Sacha';

/*
function saludar(){
    console.log(nombre);
}
*/

//scope local de la funcion(parametro):
function saludar(nombre){
    console.log(nombre);
}

saludar('javier');
saludar(`${nombre}`);
//scope es el contexto donde está la funcion, y donde javascript
//puede encontrar las variables, si nombre no esta dentro del
//metodo, javascript lo busca en el scope global


//*tambien dentro se puede modificar la variable de scope
//global dentro de scope local o scope de la funcion:
/*
function saludar(nombre){
    var nombre = 'eric';
    console.log(nombre);
}

//aqui se modifica, ya que no se define como una variable
//loca con const, var o let
function saludar(nombre){
    nombre = 'eric';
    console.log(nombre);
}

*/

/*javascript, cuando usa var, por ejemplo, una funcion con
un for dentro, con var i = 0, ese i queda definida en la primera
linea del metodo, y esto se logra definiedo una variable con var
si hacemos un console log del i despues del cierre del for
imprimirá de igual manera la variable i con el valor
que quedó al terminar el for, 

++para no contaminar el scope fuera del for en un metodo, en vez de
definir como var la variable i lo hacemos con let:
for(let i = 0; i < 10; i++)*/