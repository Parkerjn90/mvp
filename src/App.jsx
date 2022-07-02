import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/styles.css'
import { CenterContent, EmptyDiv } from '../styles/styles.jsx'
import TitleCard from './components/TitleCard.jsx'
import SearchView from './components/SearchView.jsx'
import MyPlantsView from './components/MyPlantsView.jsx'
import AddPlantModal from './components/AddPlantModal.jsx'
import PlantSearchModal from './components/PlantSearchModal.jsx'

const App = () => {
  const [openAdd, setOpenAdd] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const [myPlants, setMyPlants] = useState([])
  const [searchPlants, setSearchPlants] = useState([])

  const addPlantModal = (e) => {
    // e.preventDefault()
    setOpenAdd(!openAdd)
  }

  const searchPlantModal = (e) => {
    // e.preventDefault()
    setOpenSearch(!openSearch)
  }

  const addNewPlant = (plant) => {
    const plantList = myPlants
    plantList.push(plant)
    setMyPlants(plantList)
  }

  const searchForPlants = (search) => {
    axios.get('/search', { params: { searchString: search } })
      .then((result) => {
        setSearchPlants(result.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const setMyList = (list) => {
    axios({
      method: 'get',
      url: '/myList',
      contentType: 'application/json',
      params: { myPlants: list }
    })
      .then((result) => {
        setMyPlants(result.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    let localPlants = []
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        localPlants.push(localStorage[key])
      }
    }
    localPlants = localPlants.join()
    setMyList(localPlants)
  }, [])

  return (
    <CenterContent>
      <TitleCard />
      <SearchView searchPlantModal={searchPlantModal} searchForPlants={searchForPlants}/>
      <MyPlantsView myPlants={myPlants} addPlantModal={addPlantModal} />
      {openAdd && <AddPlantModal addNewPlant={addNewPlant} addPlantModal={addPlantModal} />}
      {openSearch && <PlantSearchModal addNewPlant={addNewPlant} searchPlants={searchPlants} searchPlantModal={searchPlantModal} />}
      <EmptyDiv></EmptyDiv>
    </CenterContent>
  )
}

export default App
