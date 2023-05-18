import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState( value );

    const handlerAdd = () => {
        setCounter( counter + 1 );
        // setCounter( (c) => c+1 )
    }
    
    const handlerMinus = () => {
        setCounter( counter - 1 );
    }

    const handlerReset = () => {
        setCounter ( value );
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handlerAdd }>
                +1
            </button>

            <button onClick= { handlerMinus }>
                -1
            </button>

            <button onClick={ handlerReset }>
                Reset
            </button>
        </>
    )
    
}

CounterApp.propTypes = {
    value: PropTypes.number,
}