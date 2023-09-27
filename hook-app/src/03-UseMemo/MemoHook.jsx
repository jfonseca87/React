import { useMemo, useState } from "react";
import { useCounter } from "../custom-hooks/useCounter"

const doHeavyProcess = (timesNumber = 100 ) => {
    for (let i = 0; i < timesNumber; i++) {
        console.log("Some process executed....");
    }

    return `${ timesNumber } iterations made`;
}


export const MemoHook = () => {
    const { counter, increment } = useCounter(4000);
    const [ show, setShow ] = useState(true);

    const memorizedValue = useMemo(() => doHeavyProcess(counter), [counter]);

    return (
        <>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

            <button 
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>
            <button 
                className="btn btn-outline-primary"
                onClick={ () => { setShow(!show) }}
            >
                Show / Hide { JSON.stringify(show) }
            </button>
        </>
    )
}