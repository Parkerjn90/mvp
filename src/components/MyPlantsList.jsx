import React from 'react'
// import axios from 'axios'
import MyIndividualPlant from './MyIndividualPlant.jsx'
import { Button, EmptyDiv, SmallEmptyDiv } from '../../styles/styles.jsx'

// eslint-disable-next-line react/prop-types
const MyPlantsList = ({ myPlants }) => {
  return (
    <>
    {myPlants.map((plant) => {
      return <MyIndividualPlant key={plant.id} plant={plant}/>
    })}
    <SmallEmptyDiv></SmallEmptyDiv>
    <EmptyDiv></EmptyDiv>
    </>
  )
}

export default MyPlantsList
