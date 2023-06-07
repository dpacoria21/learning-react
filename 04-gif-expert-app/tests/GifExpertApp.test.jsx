import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp"

describe('Testeando el GifExpertApp', () => {
    test('Deberia de agregar una nueva categoria',() => {

        const newCategory = 'Dragon Ball';

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);
        
        expect(screen.getByText(newCategory)).toBeTruthy();
    });

    test('Si se realiza 2 categorias iguales, no deberia cambiar nada', () => {
        const newCategory = 'Izuku Midoriya';
        const otherCategory = 'Bob Esponja';
        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        expect(screen.getAllByText(newCategory).length).toBe(1);

    });

    test('Si se realiza 2 categorias diferentes deberia de agregarlo', () => {
        const newCategory = 'Bob Esponja';
        const otherCategory = 'Rick y Morty';

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: otherCategory}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(6);

    })
})