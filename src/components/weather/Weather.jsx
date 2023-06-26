import React, { useState, useEffect } from 'react';
import {config} from "localforage";
import {formatTimeStampToDate} from "../../helpers.js";

export default function Weather({ latitude, longitude }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = '3b53a4c6df84676a4d70bd695f046c62';
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=bg&appid=${apiKey}&units=metric`;
                const response = await fetch(url);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [latitude, longitude]);

    if (!weatherData) {
        return <div>Loading weather data...</div>;
    }

    const { name, main, weather, coord, dt } = weatherData;

    return (
        <div className={"bg-white p-4 shadow-sm border-gray-200 rounded-lg text-gray-500"}>
            <p className={"text-xl text-amber-500"}>{formatTimeStampToDate(dt)}</p>
            <div className={"flex items-center"}>
                <img src={`https://openweathermap.org/img/wn/${weather && weather[0].icon}.png`} width="50" height="50" />
                <p className={"text-xl font-bold"}>{main?.temp} °C</p>
            </div>
           <p className={"text-sm"}>Усеща се като: {main?.feels_like} °C, <span className={"capitalize"}>{weather[0].description}</span></p>
        </div>
    );
};
