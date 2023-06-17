import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {

        const {width, height} = pRef.current.getBoundingClientRect();
        setBoxSize({
            width,
            height
        })
    }, [quote]);

    return (
        <blockquote 
            className="blockquote text-end"
            style={{display: 'flex'}}
        >
            <p ref={pRef} className="mb-1">{quote}</p>
            <br />
            <footer className="blockquote-footer">Diego Ivan</footer>
            <p> {JSON.stringify(boxSize)} </p>
        </blockquote>
    )
}