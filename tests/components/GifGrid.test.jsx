import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en gifgrid', () => { 

    const category='valorant';
    
    test('Debe mostrar el loading', () => { 

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        });

        render( <GifGrid category = { category }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

     });

     test('debe mostrar items cuando se cargan las imagenes de useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'abc',
                title: 'Valorant',
                url: 'https://localhost/valorant.png',
            },
            {
                id: '123',
                title: 'Jett',
                url: 'https://localhost/jett.png',
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        });
        
        render( <GifGrid category = { category }/> );
        expect( screen.getAllByRole('img').length ).toBe(2);

      });

 });