//objetos globales o objeto global
//window.nombre = 'john';
//window.apellido = 'pereira';
const sacha = {
    nombre: 'sacha',
    apellido: 'gomez'
}

/*
function saludar(alguien, veces) {
    console.log(veces);
    for (let i = 0; i < veces; i++){
        
        //console.log(`hola ${this.nombre} ${this.apellido}`);
    }
}
*/
//cuando se llama un metodo por bind o call, no es necesario
//definir la funcion indicandole la variable que será this
//ya que lo hace internamente, lo que si, cuando se invoca
//a .bind o .call, el primer parametro es el this que
//utiizará la funcion
function saludar(veces) {
    for (let i = 0; i < veces; i++){  
        console.log(`hola ${this.nombre} ${this.apellido}`);
    }
}
//saludar.bind(sacha, 3);
////////////////saludar.call(sacha, 3);

//la diferencia entre usar bind y call, es que bind devuelve en si
//una funcion, en la consola al invocar al metodo con bind
//nos devolverá el codigo de la funcion
//para llamar y ejecutar al metodo, utilizamos "call"

//tambien tenemos "apply", el cual los parametros del metodo
//despues de definir el contexto o quien será this, se
//envian en un arreglo
saludar.apply(sacha,[3]);
//saludar.apply(sacha,[3,'no',true]); //esto si el metodo saludar tuviese mas parametros