import React from 'react'

function TableData(props) {
  return (
    <table>
      <tbody>
        <tr>
          <th>first_Name</th>
          <th>Last_Name</th>
          <th>email</th>
          <th>Gender</th>
          <th>country</th>
          <th>city</th>
        </tr>

        {props.data.map((personInfo) => {
          return (
            <tr key={personInfo.id}>
              <td>{personInfo.first_name}</td>
              <td>{personInfo.last_name}</td>
              <td>{personInfo.email}</td>
              <td>{personInfo.gender}</td>
              <td>{personInfo.country}</td>
              <td>{personInfo.city}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableData
