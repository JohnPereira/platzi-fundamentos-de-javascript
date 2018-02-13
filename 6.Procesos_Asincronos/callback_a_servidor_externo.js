//https://swapi.co/
//https://swapi.co/api/people/1/

function get(URL, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        const DONE = 4;
        const OK = 200;
        if(this.readyState == DONE){
            if(this.status == OK){
                //todo ok
                //primer parametro es el error, si no hay entonces es null
                callback(null, JSON.parse(this.responseText));
            } else {
                //hubo un error
                callback(new Error(`Se produjo un error al realizar el request: ${this.status}`));//this es xhr en este contexto o scope
            }
        }
    }

    xhr.open('GET',URL);
    xhr.send(null);

}

//'https://swapi.co/api/people/1/'

function handleError(err){
    console.log(`Request failed: ${err}`);
}

get('https://swapi.co/api/people/1/',function onResponse(err, luke){
    if(err) return handleError(err);
    
    get(luke.homeworld, function onHomeWorldResponse(err, homeworld){
        if(err) return handleError(err);

        luke.homeworld = homeworld;
        console.log(`${luke.name} nació en ${luke.homeworld.name}`);
    });
});

//los callback van quedando en proceso de cola (task queue), entonces
//los procesos que estan en pila se siguen ejecutando mientras que
//por otro plano se ejecutan las colas

//******************************************** */
//el primer parametro de un callback de una request, la comunidad definió
//que fuera el error, y si solo es error, tendra ese parametro y 
//no hay segundo parametro,
//si devuelve un status 200 se agrega un segundo parametro despues
//del error el cual es la data devuelta por la API
/************************************ */