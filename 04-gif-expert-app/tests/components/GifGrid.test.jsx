import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Testeando el GifGrid', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render(<GifGrid  category={category} />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));

    });

    test('Debe de mostrar items cuando se cargan las imagenes', () => {

        const data = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'https://holamundo.com/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://holamundo.com/Goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: data,
            isLoading: false,
        })

        render( <GifGrid category={category} /> )
        expect(screen.getAllByRole('img').length).toBe(2);

    })
})