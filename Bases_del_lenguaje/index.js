//let de por si es una variable
let base = 6;
let altura = 7;
//variable que no puede cambiar, no se le puede dar otro valor
const num = 1;

/* funcion anonima, pero que nunca se podra llamar
function() {

}
*/
//distintas formas de definir funciones en javascript:
/*
function triangleArea(base, altura){
    console.log(`El area de un triangulo de base 
    ${base} y altura ${altura} es: ${base * altura / 2}`);
}
*/

/*
let triangleArea = function(base, altura){
    console.log(`El area de un triangulo de base 
    ${base} y altura ${altura} es: ${base * altura / 2}`);
}
*/
//arrow functions:
let triangleArea = (base, altura) => {
    console.log(`El area de un triangulo de base 
    ${base} y altura ${altura} es: ${base * altura / 2}`);
}