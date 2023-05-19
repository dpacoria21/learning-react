import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Probando test con promesas', () => { 
    test('getHeroeByIdAsync obtiendo heroe con una promesa', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toStrictEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            })
            
    })
    test('getHeroeByIdAsync no se pudo encontrar el heroe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            })

    })
});