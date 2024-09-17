import { useState } from "react";

export default function () {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const [joke, setJoke] = useState({});

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    return (
        <div className="flex flex-col items-center justify-center text-white font-semibold text-xl gap-2">
            <h2 className="w-3/4 text-center border-2 bg-gradient-to-r from-yellow-600 to-red-600 rounded px-4 py-2">Laughter is a valuable tool for maintaining good physical and mental health</h2>
            <div className="bg-red-400 border-1 rounded text-white font-semibold text-2xl text-center w-3/4 py-4">
                <h1>{joke.setup}</h1>
                <h1>{joke.punchline}</h1>
            </div>

            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-lime-600 rounded text-xl font-semibold text-white" onClick={getNewJoke}>Get Joke</button>
        </div>
    )
}