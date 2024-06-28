import { useState } from "react";

export default function Attitude() {

    const [me, setMe] = useState({
        mood: "happy",
        weather: "sunny"
    }
    )

    const updateMood = () => {
        setMe(previousState => {
            return { ...previousState, mood: "excited" }
        });
    }

    const updateWeather = () => {
        setMe(previousState => {
            return { ...previousState, weather: "rainy" }
        });
    }


    return (
        <>
            <h1>I am feeling {me.mood} because it is {me.weather}!</h1>

            <button
                type="button"
                onClick={updateMood}
            >Woohooo!</button>
            <button
                type="button"
                onClick={updateWeather}
            >Forecast</button>
        </>);
}