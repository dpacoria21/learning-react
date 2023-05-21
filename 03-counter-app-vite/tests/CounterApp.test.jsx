import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp',() => {

    const initialValue = 10;

    test('Haciendo match con el snapshot', () => {
        const {container} = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar valor inicial de 100', () => {
        render(<CounterApp value={100}/>);
        // expect(screen.getByText(100)).toBeTruthy();
        // expect(screen.getByRole('heading', {level:2}).innerHTML).toContain('100')
        expect(+screen.getByRole('heading', {level: 2}).innerHTML).toBe(100);
    })
})