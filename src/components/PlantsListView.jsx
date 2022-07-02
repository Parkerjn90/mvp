/* eslint-disable react/prop-types */
import React from 'react'
import PlantIndividualView from './PlantIndividualView.jsx'

const PlantsListView = ({ searchPlants }) => {
  return (
    <>
      {searchPlants.map((plant, i) => {
        return (<PlantIndividualView key={i} plant={plant} />)
      })}
    </>
  )
}

export default PlantsListView
