const express = require('express')
const path = require('path')
require('dotenv').config()
const { searchMyPlants, searchPlants, postNewPlant } = require('./database')
// const { postPlant } = require('./controllers')

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public/')))

// get all plants related to session id
app.get('/myList', (req, res) => {
  return searchMyPlants(req.query.myPlants)
    .then((searchResults) => {
      res.send(searchResults)
    })
    .catch(err => console.error(err))
})

// get all plants related to search query
app.get('/search', (req, res) => {
  return searchPlants(req.query.searchString) // switched to req.params from req.query.query
    .then((searchResults) => {
      res.send(searchResults)
    })
    .catch(err => console.error(err))
})

// post to plants table
app.post('/', (req, res) => {
  return postNewPlant(req.body)
    .then((response) => {
      console.log(response)
      res.send(JSON.stringify(response))
    })
    .catch(err => console.log(err))
})

app.listen(process.env.SERVER_PORT, () => {
  console.log(`listening on port ${process.env.SERVER_PORT}`)
})
