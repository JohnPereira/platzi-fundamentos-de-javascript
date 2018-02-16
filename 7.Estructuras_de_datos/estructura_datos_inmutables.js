//importante para programacion funcional
//inmutabilidad de objetos
//operador de comparacion "===" sirve para comparar objetos

let sacha = {nombre : 'sacha', apellido: 'Lifszyc', edad: 26}
let otroSacha = sacha

/*
sacha === otroSacha
true
esto es por que ambos apuntan al mismo objeto sacha en "memoria"
*/
otroSacha.edad = 27;


function cumpleanos(persona){
    persona.edad++;
}

/*
cumpleanos(sacha)
undefined
otroSacha
{nombre: "sacha", apellido: "Lifszyc", edad: 28}
sacha
{nombre: "sacha", apellido: "Lifszyc", edad: 28}

se estan modificando los dos por igual<

la funcion tiene efecto en variables que no son locales a la funcion
como programador se debe evitar esto, evitar que se modifique otra variable 
del scope global

https://facebook.github.io/immutable-js/

para esto se hace q los objetos sean inmutables:
*/
let sacha = {nombre : 'sacha', apellido: 'Lifszyc', edad: 26}
let otroSacha = sacha

function cumpleanos(persona){
    const clone = Object.assign({}, persona)//este metodo recibe dos objeto, y el primero recibe todos los parametros del segundo
    clone.edad++;
    return clone;
}

const sachitaViejo = cumpleanos(sacha);