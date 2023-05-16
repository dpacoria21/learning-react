import {getHeroesById, getHeroesByOwner} from './bases/default-export'

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroesById(4);
//         resolve(hero);
//         // reject('No se pudo encontrar al heroe');
//         // resolve();
//     }, 2000)
// });

// promise
//     .then((hero) => {
//     console.log(`el heroe ${hero.name}`);
//     })
//     .catch((err) => {
//         console.log(err, "here");
//     })

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroesById(id);
            if(!hero) reject(`No se pudo encontrar al heroe`);
            resolve(hero);
            // reject('No se pudo encontrar al heroe');
            // resolve();
        }, 2000)
    });

}

// Como se envia un callback y este resulta tener los mismos parametros que la promesa retornada, podemos solamente
// poner el callback y lo hara automaticamente
getHeroeByIdAsync(5)
    .then(console.log)
    .catch(console.warn);