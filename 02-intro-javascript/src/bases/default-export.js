// import {heroes, owners} from './data/heroe'
import heroes, {owners} from '../data/heroe'


export const getHeroesById = (id) => {   
    return heroes.find((heroe) => heroe.id === id);
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}

// console.log(getHeroesById(5));
// console.log(getHeroesByOwner('DC'));
// console.log(owners);

