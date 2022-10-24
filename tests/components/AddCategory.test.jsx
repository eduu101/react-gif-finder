import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => { 

    test('debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{target: {value: 'Valorant'}});
        
        expect( input.value ).toBe( 'Valorant' )
        screen.debug();
     });

 });