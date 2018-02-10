//en javascript no existen las clases, pero estan los prototipos
function Punto (x, y) {
    this.x = x;
    this.y = y;
}

Punto.prototype.moverEnX = function moverEnX(x) {
    this.x += x;
}

Punto.prototype.moverEnY = function moverEny(y) {
    this.y += y;
}

Punto.prototype.distancia = function distancia(p) {
    const x = this.x - p.x;
    const y = this.y - p.y;
    return Math.sqrt(x * x + y * y);
}
//this hace referencia al objeto que javascript está creando
//es decir, al hacer new y crear el Punto, Punto es this
//es el contexto en si
const p1 = new Punto(0, 4);

const p2 = new Punto(3, 0);
    

console.log(p1.distancia(p2))//distancia p1 con respecto p2
console.log(p2.distancia(p1))
p1.moverEnX(10);
console.log(p1.distancia(p2))
p2.moverEnY(-4);
console.log(p1.distancia(p2))

//el objeto del que todos heredan es object

//creaacion: new Punto(x,y);