import { useState } from "react";
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
 
    const [ categories, setCategories ] = useState(['One Punch']);

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
        
            <h1>GifExpertApp</h1>
            

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />



            {/* <button onClick={onAddCategory}>Agregar</button> */}
            
            { categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
            
        </>
    )
}