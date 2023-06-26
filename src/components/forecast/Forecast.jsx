import React, { useState, useEffect } from 'react';
import {formatTimeStampToDate} from "../../helpers.js";

export default function Forecast ({ latitude, longitude }) {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const apiKey = '3b53a4c6df84676a4d70bd695f046c62'; // Replace with your OpenWeatherMap API key
                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=bg&appid=${apiKey}&units=metric`;
                const response = await fetch(url);
                const data = await response.json();
                setForecastData(data);
            } catch (error) {
                console.error('Error fetching forecast data:', error);
            }
        };

        fetchForecastData();
    }, [latitude, longitude]);

    if (!forecastData) {
        return <div>Loading forecast data...</div>;
    }

    const { list } = forecastData;

    // Group forecast data by day
    const groupedForecast = {};
    list.forEach((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000);
        const dateKey = forecastDate.toLocaleDateString('bg-BG');
        if (!groupedForecast[dateKey]) {
            groupedForecast[dateKey] = [];
        }
        groupedForecast[dateKey].push(forecast);
    });

    return (
        <div className={"bg-white p-4 shadow-sm border-gray-200 rounded-lg text-gray-500 mt-5"}>
            <h3 className={"pb-5 text-black font-bold"}>Времето за 5 дни</h3>
            {Object.entries(groupedForecast).map(([dateKey, forecasts]) => (
                <div key={dateKey}>
                    <h3 className={"font-bold"}>{dateKey}</h3>
                    <div className={"flex items-center py-5"}>
                        {forecasts.map((forecast) => (
                            <div key={forecast.dt}>
                                <span className={"text-sm"}>
                                    <img src={`https://openweathermap.org/img/wn/${forecast && forecast?.weather[0].icon}.png`} width="50" height="50" />
                                    {new Date(forecast.dt * 1000).toLocaleTimeString(['bg-BG'], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
