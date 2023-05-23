import { useState } from "react"

export const AddCategory = () => {

    let [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({target}) => setInputValue(target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e);
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