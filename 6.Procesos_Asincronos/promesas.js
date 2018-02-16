//para olvidar las request anidadas, con un callback, otro callback
//y otro callback y asi dependiendo de cuantas request necesitemos
//para esto estan las promesas

//las promesas tienen 3 estados:
//1.Pending
//2.Fullfiled : se completó exitosamente
//3.Rejected : se produjo un error y no se pudo completar

//las promesas son objetos:
/*

const promise = new Promise(function (resolve, reject){
    setTimeout(function(){
        //dentro de la funcion o promise hay que llamar a alguna de las dos
        //funciones "resolve" o "reject"
        reject(new Error('se produjo un error'))
    }, 1000);

});

promise
    .then(function(){

    })
    .catch(function(err){

    })
*/

//CON ESTO SOLUCIONAMOS EL CALLBACK HELL

function get(URL) {
    return new Promise((resolve, reject) => { //arrow function
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            const DONE = 4;
            const OK = 200;
            if(this.readyState == DONE){
                if(this.status == OK){
                    //todo ok
                    resolve(JSON.parse(this.responseText));
                } else {
                    //hubo un error
                    reject(new Error(`Se produjo un error al realizar el request: ${this.status}`));//this es xhr en este contexto o scope
                }
            }
        }

    xhr.open('GET',URL);
    xhr.send(null);
    });
}

//'https://swapi.co/api/people/1/'

function handleError(err){
    console.log(`Request failed: ${err}`);
}

let luke;

get('https://swapi.co/api/people/1/')
    .then(function(response){
        luke = response;
        return get(luke.homeworld);
    })
    .then(function(homeworld){ //el response anterior, salta un get, que lo podemos tomar en otro then
        luke.homeworld = homeworld;
        console.log(`${luke.name} nació en ${luke.homeworld.name}`);
    })
    .catch(function(err){
        return handleError(err);
    })
;

//la consola muestra en si la promesa que se creo junto con los log
//que pusimos
