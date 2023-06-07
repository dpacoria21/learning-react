import { useState } from "react"
import  PropTypes  from 'prop-types'

export const AddCategory = ({onNewCategory}) => {


    let [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => setInputValue(target.value);

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue);

        setInputValue('');

    }

    return (

        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}