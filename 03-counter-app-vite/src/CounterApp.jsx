
import PropTypes from 'prop-types';

export const CounterApp = ( {value} ) => {

    const handlerAdd = (e) => {
        value++;
        console.log(value);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            <button onClick={ handlerAdd }>
                +1
            </button>
        </>
    )
    
}

CounterApp.propTypes = {
    value: PropTypes.number,
}