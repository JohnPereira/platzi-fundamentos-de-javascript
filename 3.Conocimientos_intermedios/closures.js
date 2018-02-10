//funciones q recuerdan el scope o entorno donde fueron creadas
//y acceden a variables de dicho scope

function saludarFamilia(apellido){
    return function saludarMiembro(nombre){
        console.log(`hola ${nombre} ${apellido}`)
    }
}

const saludarGomez = saludarFamilia('Gomez');
const saludarPerez = saludarFamilia('Perez');

saludarGomez('Pedro');
saludarGomez('Juan');
saludarGomez('Diego');
saludarGomez('Laura');

saludarPerez('Javier');
saludarPerez('John');
saludarPerez('Maura');
saludarPerez('Gabriel');

function makePrefixer(prefijo){
    return function unirPalabra(palabra){
        console.log(`${prefijo}${palabra}`);
    }
}


const prefijoRe = makePrefixer("re");
prefijoRe("bueno");