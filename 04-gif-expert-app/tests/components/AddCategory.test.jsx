import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing in AddCategory.jsx', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}} />);
        // screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});
        expect(input.value).toBe('Saitama');

    });
});