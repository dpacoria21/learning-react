import { useState } from "react";
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
 
    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        // setCategories( categories );
        if(categories.some((cat) => cat.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories( [newCategory, ...categories] );
        // setCategories( [...categories, 'CSGO'] );
        // setCategories( cat => [...cat, 'CSGO'] )
    }


    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />


            {/* Listadodo de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { categories.map((category) => {
                    return <li key={category} >{category}</li>;
                }) }
                {/* <li>ABC</li>
                <li>123</li>
                <li>xyz</li> */}
            </ol>
        </>
    )
}