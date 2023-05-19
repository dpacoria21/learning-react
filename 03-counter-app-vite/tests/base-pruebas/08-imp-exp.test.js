import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    test('Obtener heroe por Id', () => {

        const testHeroe = getHeroeById(4);

        expect(testHeroe).toStrictEqual({
            id: 4,
            name: 'Flash',
            owner: 'DC'
        });

    });

    test('Obtener undefined al no encontrar al heroe', () => {

        const testHeroe = getHeroeById(10);

        expect(testHeroe).toStrictEqual(undefined);

    });

    test('getHeroesByOwner debe regresar heroes de DC', () => {

        const testHeroes = getHeroesByOwner('DC');
        
        expect(testHeroes).toStrictEqual(heroes.filter(heroe => heroe.owner === 'DC'));
        
    });
    
    test('getHeroesByOwner debe regresar heroe de Marvel', () => {
        
        const testHeroes2 = getHeroesByOwner('Marvel');
    
        expect(testHeroes2).toStrictEqual(heroes.filter(heroe => heroe.owner === 'Marvel'));

    });

})