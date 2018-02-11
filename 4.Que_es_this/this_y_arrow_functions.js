//contexto : this

class Persona {
    constructor(nombre, amigos = []){
        this.nombre = nombre;
        this.amigos = amigos || []; //si no es null o undefined le da amigos, sino le da el array vacio
        //return this; esto ya esta implicito
    }

    /*
    listarAmigos(){
        const _this = this; //se define aqui ya que dentro del foreach, this tiene solo el contexto de ese foreach y no el contexto de la clase Persona
        this.amigos.forEach(function(amigo){
            console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
        });
    }
    **/

    /*otra forma es usar el metodo bind(), el cual puede pasar
    un parametro de fuera de la funcion hacia dentro, en este
    caso el "this" 
    listarAmigos(){
        this.amigos.forEach(function(amigo){
            console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
        }.bind(this));
    }
    */
    /*otra forma es con arrow function, con esta, this toma el 
    valor que tiene el contexto fuera de la funcion*/
    listarAmigos(){
        this.amigos.forEach((amigo) => {
            console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
        });
    }

}

const sacha = new Persona('Sacha', ['Pedro','Juan','Pepe'])