const nacimiento = new Date(1995,6-1,19);
const hoy = new Date();
const tiempo = hoy - nacimiento;
const tiempoEnSegundos = tiempo / 1000;//por que hay mil milisegundos
const tiempoEnMinutos = tiempoEnSegundos / 60;
const tiempoEnHoras = tiempoEnMinutos / 60;
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(),nacimiento.getDate());

const diasSemana = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
]

console.log(diasSemana[proximo.getDay()])