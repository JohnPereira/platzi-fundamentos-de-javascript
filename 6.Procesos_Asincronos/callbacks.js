//parametros, function callback, tiempo en milisegundos
/*
setTimeout(function callback() {
    console.log('ya pasaron 3 segundos');
},3000);

console.log('hola');
*/
//el callback es una funcion pero que no se sabe
//exactamente cuando se va a ejecutar

/*
setTimeout(function callback() {
    console.log('ya pasaron 3 segundos');
},0);

console.log('hola');
*/
//ejecuta primero hola por la pila de ejecucion, ya que
//es sincrono, primero carga los metodos en primer plano
//a la pila, el callback entra a la cola de tareas
//luego de terminar la pila, pregunta si hay tareas en
//la cola de tareas

setTimeout(function callback() {
    console.log('A');
},1000);

//con esto generamos un cuello de botella, bloqueamos la cola de
//ejecucion
for(let i = 0; i < 999999999; i++){

}

console.log('B');

//las operaciones sincronas hay que reducirlas al minimo posible
//o sino hay que delegarlas a una funcion asincrona