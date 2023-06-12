import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrease, reset } = useCounter();

    return (
        <>
            <div>Counter With Hook: {counter}</div>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(10)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrease(2)}>-1</button>
        </>
    )
}
