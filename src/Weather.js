import axios from "axios";
import { useState } from "react";

export const Weather = () => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState([])
    const [message, setMessage] = useState("")
    const handleOnChange = event => {
        setCity(event.target.value)
    }
    const date = new Date().toLocaleDateString()
    const handleSubmit = event => {
        event.preventDefault()
        axios.get(process.env.REACT_APP_WEATHER_HOST, {params:{q: city, appid: process.env.REACT_APP_WEATHER_API_KEY, units:"imperial"}})
            .then(response => {
                const weatherExists = weather.some(w => w.name == response.data.name)
                if (!weatherExists) {
                    setWeather([...weather, response.data])
                    setMessage("")
                } else{
                    setMessage("City already exists")
                }
            })
            .catch(error => setMessage(error.response.statusText))
    }
    return (
    <div>
      <form className="w-1/3 ml-10" onSubmit={handleSubmit}>   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input onChange={handleOnChange} class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by cities for weather..." required></input>
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
    </form>
    
    {message && 
        <div role="alert" className="w-1/3 ml-10">
            <div class="bg-yellow-600 text-white font-bold rounded-t px-4 py-2">
                Alert
            </div>
            <div class="border border-t-0 border-gray-400 rounded-b bg-gray-100 px-4 py-3 text-red-700">
                <p>{message}.</p>
            </div>
        </div>
    }
    <div className="flex justify-left">
    {weather && weather.map(w => (
           
     <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100 border m-10">
        <div className="text-center">
            <h2 className="text-xl font-semibold">{w.name}</h2>
            <p className="text-sm dark:text-gray-400">{date}</p>
        </div>
        <h2 className="text-3xl">{w.main.temp}°</h2>
        <img src={`http://openweathermap.org/img/w/${w.weather[0].icon}.png`}/>
        <div className="mb-2 text-xl font-semibold">H:{Math.round(w.main.temp_max)}°
            <span className="mx-1 font-normal">/</span>L:{Math.round(w.main.temp_min)}°
        </div>
        <p className="dark:text-gray-400">{w.weather[0].description}</p>
    </div>
    ))
    }
    </div>
    </div> 

    )
}

export default Weather