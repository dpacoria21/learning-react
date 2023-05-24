import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

import { useEffect, useState } from "react";


export const GifGrid = ({category}) => {   

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    // console.log(counter);

    return (
        <>
            <h3>{category}</h3>        
            <p>Hola Mundo</p>
            <div className="card-grid" >
                {images.map((image) => (
                    <GifItem key={image.id} {...image}/>
                ))}
            </div>
        </>
    )
}