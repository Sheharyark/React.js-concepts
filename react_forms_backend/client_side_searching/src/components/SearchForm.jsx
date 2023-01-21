import { useState, useEffect } from 'react'
import TableData from './TableData'
import axios from 'axios'
import './SearchForm.css'

function SearchForm() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`)
      setData(res.data)
    }
    if (query.length === 0 || query.length > 2) fetchData()
  }, [query])

  return (
    <div className='searchForm'>
      <input
        className='searchForm__input'
        placeholder='Search...'
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div>{<TableData data={data} />}</div>
    </div>
  )
}

export default SearchForm
