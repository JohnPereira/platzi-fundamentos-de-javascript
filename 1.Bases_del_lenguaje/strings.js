function platzom(str) {
    let translation = str;
    //si la palabra termina en "ar" se le quitan esos dos caracteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2); //desde 0 hasta 2 caracteres antes del final
    }

    //si la palabra inicia con "Z" se le añade pe al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guion al medio
    const length = translation.length;
    if (length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length /2));
        const secondHalf = translation.slice(Math.round(length /2));
        translation = `${firstHalf}-${secondHalf}`;
    }

    //si la palabra es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra
    //intercalando mayusculas y minusculas
    const reverse = (str) => str.split('').reverse().join(''); //divide, los da vuelta y luego los une
    function minMay(str) {
        const length = str.length;
        let translation = '';
        let capitalize = true;
        for (let i = 0; i < length; i++) {
            const char = str.charAt(i);
            // ? si se cumple : si no
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize; //se invierte el boleeano
        }
        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}

console.log(platzom("programar"));
console.log(platzom("zorro"));
console.log(platzom("zarpar"));
console.log(platzom("abecedario"));
console.log(platzom("sometemos"));