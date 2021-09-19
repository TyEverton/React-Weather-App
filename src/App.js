import React, { useState } from 'react'

const api = {
  key: 'ab713336d4828b653c66db543e48f445',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (event) => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setQuery('')
        })
    }
  }

  const dateBuilder = (d) => {
    // let months = [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'June',
    //   'July',
    //   'August',
    //   'September',
    //   'October',
    //   'November',
    //   'December',
    // ]
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]

    let day = days[d.getDay()]
    let date = d.getDate()
    // let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${year}`
    // ${month}
  }

  return (
    <div className="app">
      <main>
        <h1 className="header">Get Current Weather</h1>
        <div className="searchBox">
          <input
            type="text"
            className="searchBar"
            placeholder="Enter city name..."
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div className="results">
            <div className="locationBox">
              <div>
                <div className="location">{weather.name}</div>
                {/* <div className="date">{dateBuilder(new Date())}</div> */}
                <div className="weatherBox">
                  <div className="weather">
                    {weather.weather[0].main}
                    {/* <img src='http://openweathermap.org/img/w/${item.icon}.png' /> */}
                  </div>
                  <div className="temp">{Math.round(weather.main.temp)}°F</div>
                  <br />
                  <div className="feelsLike">
                    Feels like {weather.main.feels_like.toFixed(0)}°
                  </div>
                  <div className="tempMax">
                    H: {weather.main.temp_max.toFixed(0)}°
                  </div>
                  <div className="tempMin">
                    L: {weather.main.temp_min.toFixed(0)}°
                  </div>
                  <img />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  )
}

export default App
