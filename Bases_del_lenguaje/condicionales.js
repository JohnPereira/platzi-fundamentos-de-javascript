const starWars7 = 'Star Wars: El ultimo jedi';
const pgStarWars = 13;

const nameSacha = 'Sacha';
const ageSacha = 26;

const nameSanti = 'Santi';
const ageSanti = 12;

function canWatchStarWars7(name, age) {
    if(age >= pgStarWars){
        alert(`${name} puede pasar a ver ${starWars7}`);
    }else{
        alert(`${name} no puede pasar a ver ${starWars7}`)
    }
}

canWatchStarWars7(nameSacha, ageSacha);
canWatchStarWars7(nameSanti, ageSanti);