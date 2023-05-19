

test('Esta prueba no debe de fallar', () => {
    if(1 === 0) {
        throw new Error('Division entre 0 no es posible');
    }
})