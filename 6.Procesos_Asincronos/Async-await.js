//await espera ejecucion de promesas pero igual siguen funcionando los eventos
//de pila de js y cuando el await responde, continua con el codigo

//transpilarlo por babel ya que esto es de ECMAScript 2016:
async function getLuke(){
    try{
        const response = await fetch('https://swapi.co/api/people/1/');
        const luke = await response.json();
        const responseHomeWorld = await fetch(luke.homeworld)
        luke.homeworld = await responseHomeWorld.json();
        console.log(`${luke.name} nació en ${luke.homeworld.name}`);
    }
    catch(error){
        handleError(error);
    }
}
