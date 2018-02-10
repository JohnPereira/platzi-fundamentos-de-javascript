const nombre = 'sacha'
const dias = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]

function correr() {
    const min = 5;
    const max = 15;
    return Math.floor(Math.random() * (max - min)) + min;
}

let totalKms = 0;
for (let i = 0; i < dias.length; i++) {
    const kms = correr();
    totalKms += kms;
    console.log(`El dia ${dias[i]} ${nombre} corrio ${kms} kms`);
}
const promedioKms = totalKms /dias.length;
console.log(`En promedio, ${nombre} corrio ${promedioKms} kms`);