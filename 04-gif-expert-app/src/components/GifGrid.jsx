import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";


export const GifGrid = ({category}) => {   


    const [counter, setCounter] = useState(10);
    useEffect(() => {
        getGifs(category);
    }, []);

    // console.log(counter);

    return (
        <>
            <h3>{category}</h3>        
            <p>Hola Mundo</p>
            <button onClick={() => setCounter(counter+1)}>+1</button>
        </>
    )
}