import React from 'react'
import SearchForm from './components/SearchForm'
import data from './data/MOCK_DATA.json'
function App() {
  return (
    <div>
      <SearchForm data={data} />
    </div>
  )
}

export default App
