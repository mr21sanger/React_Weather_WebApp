import React, { useEffect, useState } from 'react'
import Other from './other'

function Weathercard({ tempInfo }) {

    let [weatherState, setWeatherState] = useState("")
    const {
        temp,
        weatherMood,
        city,
        country,
        speed,
        humidity,
        pressure,
        sunset
    } = tempInfo;

    // SUNSET TIME

    let sunSetTime = new Date(sunset * 1000);
    let hour = sunSetTime.getHours()
    let min = sunSetTime.getMinutes()
    if (min < 10) {
        min = `0${sunSetTime.getMinutes()}`
    }
    if (hour < 10) {
        hour = `0${sunSetTime.getHours()}`
    }
    const sunTime = `${hour}:${min}`

    // UPDATE WEATHERMOOD IMAGE

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds": setWeatherState("wi wi-cloudy")
                    break;
                case "Clear": setWeatherState("wi wi-night-clear")
                    break;
                case "Sunny": setWeatherState("wi wi-day-sunny")
                    break;
                case "Haze": setWeatherState("wi wi-day-haze")
                    break;
                case "Rain": setWeatherState("wi wi-rain")
                    break;
                case "Smoke": setWeatherState("wi wi-smoke")
                    break;
                case "Snow": setWeatherState("wi wi-snow")
                    break;

                default: setWeatherState("wi wi-celsius")
                    break;
            }
        }
    }, [weatherMood])

    return (
        <>
            {/* WEATHER */}
            <div className='grid grid-cols-2 content-center grid-flow-row-dense  gap-y-2 gap-x-0 place-items-center px-4  w-full h-5/6'>
                <div className='bg-gray-500 shadow-sm shadow-black text-center border-2 flex justify-center items-center border-black h-48 w-56 rounded-md'>
                    <i className={`${weatherState} text-8xl`}></i>
                </div>
                <div className='bg-gray-500 shadow-sm font-mono shadow-black flex flex-col gap-2 justify-center items-center text-justify border-2 border-black h-48 w-56 rounded-md'>
                    <h1 className='text-5xl  text-white font-semibold'>{temp}°C</h1>
                    <h2 className='text-4xl font-semibold'>{weatherMood}</h2>
                    <p className='text-lg'>{city},{country}</p>
                </div>

                {/* DATE-BOX */}
                <div className='bg-gray-500 shadow-sm font-mono shadow-black flex flex-col gap-2 justify-center items-center text-justify border-2 border-black h-48 w-56 rounded-md'>
                    <h1 className='text-6xl'>date</h1>
                </div>

                {/* OTHER ATMOSPHERE BOX */}
                <div className='bg-gray-500 shadow-sm font-mono shadow-black grid grid-cols-2 place-items-center content-center gap-2 px-2 border-2 border-black h-48 w-56 rounded-md'>
                    <Other classes="wi wi-sunset" detail={sunTime} name="Sunset" />
                    <Other classes="fa-solid fa-wind" detail={speed} name="Wind" />
                    <Other classes="wi wi-humidity" detail={humidity} name="Humidity" />
                    <Other classes="wi wi-rain" detail={pressure} name="Pressure" />
                </div>
            </div>
        </>
    )
}

export default Weathercard
