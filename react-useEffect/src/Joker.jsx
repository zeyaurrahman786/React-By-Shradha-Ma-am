import { useEffect, useState } from "react";

export default function Joker() {

    const [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let data = await response.json();
        // console.log(data); // Check the data structure in the console
        setJoke({ setup: data.setup, punchline: data.punchline });
    };

    useEffect(() => {
        // Define an async function inside useEffect
        const getFirstJoke = async () => {
            let response = await fetch(URL);
            let data = await response.json();
            // console.log(data); // Check the data structure in the console
            setJoke({ setup: data.setup, punchline: data.punchline });
        };

        getFirstJoke(); // Call the async function
    }, []); // Dependency array to run this effect only once when component mounts

    return (
        <div>
            <h1>Joker!</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getNewJoke}>Get a new joke</button>
        </div>
    );
}
