import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('GifItem testing', () => {
    const title = 'One Punch';
    const url = 'https://one-punch.com/saitama.jpg';
    test('Debe de regresar un arreglo de valores', () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // console.log(screen.getByRole('img').alt);
        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        const testTitle = screen.getByText(title);
        // console.log(testTitle);
        expect(testTitle).toBeTruthy();

    })
});