/* eslint-disable no-sequences */
require('dotenv').config()
const { Pool } = require('pg')
const pool = new Pool({
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE
})

// query all plants that match query string
const searchMyPlants = (list) => {
  console.log(list)
  return pool.connect()
    .then((client) => {
      return client.query(`
      select * from public.plants
      where id in (${list})
      order by plantname;
      `)
        .then((result) => {
          client.release()
          return result.rows
        })
        .catch((err) => {
          client.release()
          return err
        })
    })
}

// query plants whose ids are related to given session ids
const searchPlants = (query) => {
  return pool.connect()
    .then((client) => {
      return client.query(`
      select * from public.plants pl where plantname ilike
    '%${query}%' or species ilike '%${query}%' order by plantname;
      `)
        .then((result) => {
          client.release()
          return result.rows
        })
        .catch((err) => {
          client.release()
          return err
        })
    })
}

// post new plant
const postNewPlant = ({ plant, species, watering, sunlight, username, fertilizer }) => {
  return pool.connect()
    .then((client) => {
      return client.query(`
      INSERT INTO public.plants(
        "plantname",
        "species",
        "watering",
        "sunlight",
        "fertilizer",
        "username")
        VALUES (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6
        ) RETURNING *;
      `, [plant, species, watering, sunlight, fertilizer, username])
        .then((result) => {
          client.release()
          return result.rows
        })
        .catch((err) => {
          client.release()
          return err
        })
    })
}
// save plant id with session id

// export functions
module.exports = {
  searchMyPlants,
  searchPlants,
  postNewPlant
}
