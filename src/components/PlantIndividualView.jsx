/* eslint-disable react/prop-types */
import React from 'react'
import moment from 'moment'
import {
  PlantName, Species, Needs, SmallEmptyDiv, SecondaryButton,
  PlantContainer, PlantInfo
} from '../../styles/styles.jsx'
import { MdWaterDrop } from 'react-icons/md'
import { FiSun } from 'react-icons/fi'
import { RiSeedlingFill } from 'react-icons/ri'

const PlantIndividualView = ({ addNewPlant, plant, searchPlantModal }) => {
  const onClickHandler = (e) => {
    e.preventDefault()
    localStorage.setItem(plant.id, plant.id)
    searchPlantModal(e)
  }

  return (
    <PlantContainer>
      <PlantInfo>
        <PlantName>{plant.plantname}</PlantName>
        {plant.species ? <Species>{plant.species}</Species> : <Species>unknown</Species> }
        <SecondaryButton id={plant.id} onClick={e => onClickHandler(e)}>Add to My Plants</SecondaryButton>
        <SmallEmptyDiv></SmallEmptyDiv>
        <Needs><MdWaterDrop />{plant.watering}</Needs>
        <Needs><FiSun />{plant.sunlight}</Needs>
        {plant.fertilizer && <Needs><RiSeedlingFill />{plant.fertilizer}</Needs>}
        <SmallEmptyDiv></SmallEmptyDiv>
        <Needs>user: {plant.username}</Needs>
        <Needs>posted {moment(plant.created_at).fromNow()}</Needs>
      </PlantInfo>
    </PlantContainer>
  )
}

export default PlantIndividualView
