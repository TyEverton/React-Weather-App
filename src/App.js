import React from 'react'

const api = {
  key: 'ab713336d4828b653c66db543e48f445',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="searchBox">
          <input type="text" className="searchBar" placeholder="Search..." />
        </div>
      </main>
    </div>
  )
}

export default App
