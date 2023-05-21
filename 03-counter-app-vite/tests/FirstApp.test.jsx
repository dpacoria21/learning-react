import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    test('Debe de hacer match con el snapshor', () => {

        const title = 'Hola, soy German Garmendia';
        const { container, getByText } = render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title );

    });
});