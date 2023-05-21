import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp', () => {
    test('Debe de hacer match con el snapshor', () => {

        const title = 'Hola, soy German Garmendia';

        render( <FirstApp title={ title } /> );

    });
});