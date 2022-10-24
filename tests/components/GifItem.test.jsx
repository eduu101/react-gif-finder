import { GifItem } from "../../src/components/GifItem"
import { render,screen } from "@testing-library/react";

describe('Pruebas en <GifItem />', () => {
    
    const title = 'Valorant';
    const url   = 'https://playvalorant.com/';
    
    test('Debe hacer match con el snapshot', () => { 
        const container = render( <GifItem title={title} url={url} /> );
        expect( container ).toMatchSnapshot();

     });

     test('debe mostrar la imagen con el url y el alt indicado', () => {
        render( <GifItem title={title} url={url} /> );
        //screen.debug();
        //expect( screen.getByRole('img').src) .toBe( url );
        //console.log(screen.getByRole('img').src );

        const { src,alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

     });

     test('debe mostrar el titulo en el componente', () => { 

        render( <GifItem title={title} url={url} /> );
        expect( screen.getByText( title ) ).toBeTruthy();
        

      })
});