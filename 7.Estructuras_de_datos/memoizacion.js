//con esto llamamos muchas menos veces al metodo recursivo y llena menos la pila considerablemente
function fibonacci(num, memoria = {}) { //memoria si no le mandamos nada, sera un objeto vacio
    if(memoria[num]) return memoria[num]
    if(num == 1) return 0;
    if(num == 2) return 1;
    
  
    return memoria[num] = fibonacci(num - 1,memoria) + fibonacci(num -2, memoria);
}

fibonacci(20);
