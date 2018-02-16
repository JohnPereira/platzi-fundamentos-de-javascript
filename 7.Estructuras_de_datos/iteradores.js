/*
function* fibonacci() {
    let a = 0, b = 1;

    while (true){
        let f = a;
        a = b;
        b = f + b;
        yield f; //va guardando y devuelve el valor y al llamarlo denuevo parte desde esta misma linea
    }

}
*/
function* fibonacci() {
    let a = 0, b = 1;

    while (true){
        let f = a;
        a = b;
        b = f + b;
        let reset = yield f; 
        if(reset) a = 0, b = 1
    }

}
/*
fibo.next()
{value: 3, done: false}
fibo.next()
{value: 5, done: false}
fibo.next(true)
{value: 0, done: false}
fibo.next(true)
{value: 0, done: false}
fibo.next(true)
{value: 0, done: false}
fibo.next()
{value: 1, done: false}
fibo.next()
{value: 1, done: false}done: falsevalue: 1__proto__: Object
fibo.next()
*/
/*
fibo
fibonacci {<suspended>}
__proto__
:
Generator
[[GeneratorStatus]]
:
"suspended"
[[GeneratorFunction]]
:
ƒ* fibonacci()
[[GeneratorReceiver]]
:
Window
[[GeneratorLocation]]
:
VM443:8
[[Scopes]]
:
Scopes[4]
*/
const fibo = {};
fibo[Symbol.iterator] = fibonacci

let i = 0;
for (let value of fibo){
    console.log(value);
    i++;
    if(i>20) break;
}


//cuando se usa yield, funciona como un return, y la segunda vez
//que se llama a la funcion nuevamente, parte desde el punto
//del yield que se ejecuto la primera vez