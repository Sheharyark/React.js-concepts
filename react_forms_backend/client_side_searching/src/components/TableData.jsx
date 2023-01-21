import React from 'react'
import './TableData.css'

function TableData({ data }) {
  return (
    <table className='tableData'>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Country</th>
          <th>City</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.country}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableData
