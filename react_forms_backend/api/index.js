import express from 'express'
const app = express()
import { Users } from './users.js'
import cors from 'cors'

app.use(cors())

app.get('/', (req, res) => {
  const { q } = req.query

  const keys = ['first_name', 'last_name', 'email', 'gender', 'country', 'city']

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    )
  }

  q ? res.json(search(Users).slice(0, 100)) : res.json(Users.slice(0, 100))
})

app.listen(5000, () => console.log('API is working!'))
