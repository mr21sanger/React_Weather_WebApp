import { useEffect, useState } from 'react'
import Weathercard from './component/Weathercard'
function App() {

  let [inputCity, setInputCity] = useState("faridabad")
  let [tempInfo,setTempInfo] = useState({})

  // search button
  const search = async() => {
try {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=a0ff96742cde9c3f0a2a851b27c2f82d`
  let response=  await fetch(url);
  let data = await response.json()
  console.log(data)
   
  const {temp,humidity,pressure} = data.main;
  const {speed} = data.wind;
  const {name:city} = data
  const {country,sunset} = data.sys;
  const {main: weatherMood} = data.weather[0]
  
  const requiredInfo ={
    temp,
    city,
    humidity,
    pressure,
    speed,
    country,
    weatherMood,
    sunset
    }
    setTempInfo(requiredInfo);
  
} catch (error) {
  alert("Not Found")
}
  }

  useEffect(() => {
    search();
  }, [])

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        < div className='w-2/6 h-4/6 bg-gray-600 shadow-md rounded-lg border-2 border-black shadow-black'>

          {/* INPUT FIELD */}
          <div className="relative w-11/12 m-auto my-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="search" id="default-search"
              className="block w-full p-4 ps-10 text-sm font-semibold text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder='search'
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)} />
            <button
              className="text-white absolute end-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-600 font-medium rounded-lg text-sm px-4 py-2"
              onClick={() => search()}>Search</button>
          </div>

        <Weathercard tempInfo = {tempInfo}/>
        </div>
      </div>
    </>
  )
}

export default App
