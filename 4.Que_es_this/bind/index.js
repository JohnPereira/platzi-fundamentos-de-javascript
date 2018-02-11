class Toggable {
    constructor(el){ //el de element
        //inicializar el estado interno
        this.el = el;
        this.el.innerHTML = 'Off';
        this.activated = false;
        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click',this.onClick);
        
        //this.el.addEventListener('click',this.onClick.bind(this));//evento y callback
        //si no ocuparamos this, se cae en la invocacion de toggabletext en on click, ya que estaria llegando el "this" de "el", por eso con bind tenemos
        //que enviar el this de la clase para que trabaje con ese
    }

    onClick(ev){
        console.log(this);
        //cambiar estado interno
        //llamar a toggleText
        this.activated = !this.activated;
        this.toggleText();
    }

    toggleText(){
        //cambiar el text
        this.el.innerHTML = this.activated ? 'On' : 'Off';
    }
}

const button = document.getElementById('boton');

const miBoton = new Toggable(button);

//bind no solo sirve para enviar contexto, tamnbien puede pasar parametros:
function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

//el primer paraametro de bind es el contexto, en este
//caso no lo enviaremos, pero enviaremos un parametro
//el cual sera el primero del metodo saludar, el cual
//seria el nombre, entonces al llamar al metodo
//saludarSachas solo pasamos el apellido por parametro, que seria el siguiente o segundo
//e imprimiria nombre y apellido
const saludarSachas = saludar.bind(null,"sacha"); //el primer parametro es quien va a ser this, y los siguientes los que correspondan a la funcion

saludarSachas('gomez'); 
//esto imprime, hola sacha gomez