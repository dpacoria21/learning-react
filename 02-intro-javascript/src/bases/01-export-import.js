import { heroes } from '../data/heroe';


const getHeroesById = (id) => {   
    return heroes.find((heroe) => heroe.id === id);
}

const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}

console.log(getHeroesById(5));
console.log(getHeroesByOwner('DC'));
console.log(heroes);

