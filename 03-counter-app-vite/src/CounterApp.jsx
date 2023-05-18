import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState( value );

    const handlerAdd = () => {
        setCounter( counter + 1 );
        // setCounter( (c) => c+1 )
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handlerAdd }>
                +1
            </button>
        </>
    )
    
}

CounterApp.propTypes = {
    value: PropTypes.number,
}