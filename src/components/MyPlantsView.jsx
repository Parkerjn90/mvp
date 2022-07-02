/* eslint-disable react/prop-types */
import React from 'react'
import MyPlantsList from './MyPlantsList.jsx'
// Modal goes here
import { InnerContent, PrimaryButton, ViewTitle } from '../../styles/styles.jsx'

const MyPlantsView = ({ myPlants, addPlantModal }) => {
  return (
    <InnerContent>
      <ViewTitle>My Plants</ViewTitle>
      <MyPlantsList myPlants={myPlants}/>
      <PrimaryButton onClick={addPlantModal}>Add A Plant</PrimaryButton>
    </InnerContent>
  )
}

export default MyPlantsView
