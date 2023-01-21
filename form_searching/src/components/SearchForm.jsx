import React from 'react'
import { useState } from 'react'
import TableData from './TableData'

function SearchForm(props) {
  const keys = ['first_name', 'last_name', 'gender', 'country', 'city', 'email']
  const [search, setSearch] = useState('')
  const searchInfo = (data) => {
    return data.filter((info) => {
      return (
        // info.first_name.toLowerCase().includes(search) ||
        // info.email.toLowerCase().includes(search) ||
        // info.country.toLowerCase().includes(search)
        keys.some((key) => info[key].toLowerCase().includes(search))
      )
    })
  }

  return (
    <div className='searchform'>
      <input
        type='text'
        placeholder='search...'
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='searchform_data'>
        <TableData data={searchInfo(props.data)} />
      </div>
    </div>
  )
}

export default SearchForm
