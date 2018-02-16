let contador = 0;
function fibonacci(num) {
    //casos base
    if(num == 1) return 0;
    if(num == 2) return 1;
    contador++;
    console.log(contador);
    return fibonacci(num - 1) + fibonacci(num -2);
}

fibonacci(20);

//si hacemos esto mal:

function fibonacci(num) {

    return fibonacci(num - 1) + fibonacci(num -2);
}

fibonacci(3);

console.log('hola')

//siempre a la recursividad debemos indicarle cuando para
//en el caso anterior cuando es 1 o 2
//ya que a lo largo del proceso llegaran o bajaran a esos numeros
//si no ponemos eso, en este caso
//EL CONSOLE LOG JAMAS SE EJECUTARA, YA QUE LA FUNCION
//RECURSIVA ESTÁ LLENANDO EL STACK O LA PILA, Y COMO
//ES SINCRONO, JAMAS SALDRA DE ALLI