import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

import { useEffect, useState } from "react";


export const GifGrid = ({category}) => {   

    const {images, isLoading} = useFetchGifs(category); 
    // console.log(images, isLoading);
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, []);

    // console.log(counter);

    return (
        <>
            <h3>{category}</h3>        
            <div className="card-grid" >
                {images.map((image) => (
                    <GifItem key={image.id} {...image}/>
                ))}
            </div>
        </>
    )
}