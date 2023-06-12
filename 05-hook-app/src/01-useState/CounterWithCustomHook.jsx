import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter } = useCounter();

    return (
        <>
            <div>Counter With Hook: {counter}</div>
            <hr />
            <button className="btn btn-primary">+1</button>
            <button className="btn btn-primary">Reset</button>
            <button className="btn btn-primary">-1</button>
        </>
    )
}
