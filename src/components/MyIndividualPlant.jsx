/* eslint-disable react/prop-types */
import React from 'react'
import moment from 'moment'
import {
  PlantName, Species, Needs, SmallEmptyDiv,
  PlantContainer, PlantInfo
} from '../../styles/styles.jsx'
import { MdWaterDrop } from 'react-icons/md'
import { FiSun } from 'react-icons/fi'
import { RiSeedlingFill } from 'react-icons/ri'

const MyIndividualPlant = ({ plant }) => {
  return (
    <PlantContainer>
      <PlantInfo>
        <PlantName>{plant.plantname}</PlantName>
        {plant.species ? <Species>{plant.species}</Species> : <Species>unknown</Species>}
        <SmallEmptyDiv></SmallEmptyDiv>
        <Needs><MdWaterDrop /> {plant.watering}</Needs>
        <Needs><FiSun /> {plant.sunlight}</Needs>
        {plant.fertilizer && <Needs><RiSeedlingFill /> {plant.fertilizer}</Needs>}
        <SmallEmptyDiv></SmallEmptyDiv>
        <Needs>user: {plant.username}</Needs>
        <Needs>posted {moment(plant.created_at).fromNow()}</Needs>
      </PlantInfo>
      {/* <PhotoContainer>
        <PhotoSquare>
          <Photo src='/images/purple_flowers.jpeg' alt='[plant name goes here]'/>
        </PhotoSquare>
      </PhotoContainer> */}
    </PlantContainer>
  )
}

export default MyIndividualPlant
