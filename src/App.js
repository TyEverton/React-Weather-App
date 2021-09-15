import React from 'react'

const api = {
  key: 'ab713336d4828b653c66db543e48f445',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {
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
    <div className="app">
      <main>
        <div className="searchBox">
          <input type="text" className="searchBar" placeholder="Search..." />
        </div>
        <div className="locationBox">
          <div className="location">Pleasant Grove, US</div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weatherBox">
            <div className="temp">
              60°f
            </div>
            <div className="weather">Sunny</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
