import { useState } from "react"
import { PropTypes } from "prop-types";

export const AddCategory=({onNewCategory})=>{
    const [inputValue, setinputValue] = useState('')
    const onInputChange=({target})=>{
        setinputValue(target.value);
    }
    
    const onSubmit=(event)=>{
        event.preventDefault();
        if (inputValue.trim().length<=1) {
            return
        }
        onNewCategory(inputValue.trim() );
        setinputValue('');
    }


    return(
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
            id="textbox"
            className="textbox"
            type="text"
            placeholder="Busca cualquier categoría de Gifs!"
            value={inputValue}
            onChange={ onInputChange }
        
            />
        </form>
    )

}

AddCategory.propTypes = {
   onNewCategory: PropTypes.func.isRequired,
}