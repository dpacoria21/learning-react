import { useState } from "react"

export const AddCategory = (props) => {

    const {onNewCategory} = props;

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