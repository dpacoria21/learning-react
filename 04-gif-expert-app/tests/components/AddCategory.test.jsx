import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing in AddCategory.jsx', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => {}} />);
        // screen.debug();
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={(onNewCategory)} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        screen.debug();
        expect(input.value).toBe('');
        
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {

        const inputValueEmpty = '';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValueEmpty}});
        fireEvent.submit(form);

        expect(input.value).toBe(inputValueEmpty);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();


    })
});