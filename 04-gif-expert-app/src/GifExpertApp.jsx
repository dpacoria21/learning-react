import { useState } from "react";

export const GifExpertApp = () => {
 
    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        // setCategories( categories );
        setCategories( categories.concat('CSGO') );
        // setCategories( [...categories, 'CSGO'] );
        // setCategories( cat => [...cat, 'CSGO'] )
    }

    console.log(categories);

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listadodo de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                { categories.map((category) => {
                    return <li key={category} >{category}</li>;
                }) }
                <li>ABC</li>
                <li>123</li>
                <li>xyz</li>
            </ol>
        </>
    )
}