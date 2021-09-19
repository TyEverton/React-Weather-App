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
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
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
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className='app'>
      <main>
        <div className='searchBox'>
          <input
            type='text'
            className='searchBar'
            placeholder='Search...'
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div className='results'>
            <div className='locationBox'>
              <div>
                <div className='location'>{weather.name}</div>
                <div className='date'>{dateBuilder(new Date())}</div>
                <div className='weatherBox'>
                  <div className='temp'>{Math.round(weather.main.temp)}°f</div>
                  <br />
                  <div className='feelsLike'>
                    Feels like {weather.main.feels_like}
                  </div>
                  <div className='tempMax'>
                    Highest of the day {weather.main.temp_max}
                  </div>
                  <div className='weather'>{weather.weather[0].main}</div>
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
