import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06 desestructuracion', () => {
    test('get usContext de un usuario', () => {
        const testMarine = {
            clave: 3241,
            nombre: 'Diego',
            edad: 34,
        }
        const testContext = usContext(testMarine);
        expect(testContext).toStrictEqual({
            nombreClave: testMarine.clave,
            anios: testMarine.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        })
    })
})