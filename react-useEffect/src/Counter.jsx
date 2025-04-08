import { useState, useEffect } from 'react';

export default function Counter() {

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = () => {
        setCountx(countx + 1);
    }

    let incCounty = () => {
        setCounty(county + 1);
    }

    useEffect(() => {
        console.log("This is a side effect");
    }, [countx]);

    return (
        <>
            <h1>Counter App</h1>
            <h3>Count = {countx}</h3>
            <button onClick={incCountx}>+1</button>

            <br />

            <h1>Counter App</h1>
            <h3>Count = {county}</h3>
            <button onClick={incCounty}>+1</button>
        </>
    )
}