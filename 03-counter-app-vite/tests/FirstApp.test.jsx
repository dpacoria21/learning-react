import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    test('Debe de hacer match con el snapshor', () => {
        // Evaluar la forma de componente y que este no cambie
        // Toma una fotografia y luego la compara
        const title = 'Hola, soy German';
        const { container } = render(<FirstApp title={ title } />);  
        // console.log(container);
        expect(container).toMatchSnapshot();      

    });
    test('Debe de mostrar el titulo en un h1', () => {
        const title = 'Hola, soy German';
        const { container, getByText } = render( <FirstApp title={ title } /> );
        // getByText, busca un nodo por su contenido
        // console.log(getByText(title));
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title );
    })
});