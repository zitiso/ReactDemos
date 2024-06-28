import { useState } from "react";

export default function Attitude() {
    const [mood, setMood] = useState("happy");
    const [weather, setWeather] = useState("sunny");



    return (
        <>
            <h1>I am feeling {mood} because it is {weather}!</h1>


            <button
                type="button"
                onClick={() => setMood("excited")}
            >Woohooo!</button>
            <button
                type="button"
                onClick={() => setWeather("stormy")}
            >Forecast</button>
        </>
    );
}