// import { useCounter } from "../hooks/useCounter";
// import { useFetch } from "../hooks/useFetch";

// import { LoadingQuote } from './LoadingQuote';
// import { Quote } from './Quote';

import {useCounter, useFetch} from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {quote, author} = !!data && data[0];

    console.log(data, isLoading, hasError);

    return (
        <>
            <h1>Hola a todos chiquitas</h1>
            <hr />

            {
                isLoading ? <LoadingQuote /> : <Quote quote={quote} />
            }

            <button disabled={isLoading} className="btn btn-primary" onClick={() => increment(1)}>
                Next quote
            </button>
        </>
    )
}