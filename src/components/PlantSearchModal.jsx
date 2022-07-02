/* eslint-disable react/prop-types */
import React from 'react'
import {
  OuterModal, InnerModal, ModalContent,
  InnerContent, PrimaryButton, ViewTitle
} from '../../styles/styles.jsx'
import PlantsListView from './PlantsListView.jsx'

const PlantSearchModal = ({ addNewPlant, searchPlants, searchPlantModal }) => {
  return (
    <OuterModal>
      <InnerModal>
        <ModalContent>
          <ViewTitle>My Plants</ViewTitle>
          <PrimaryButton onClick={e => searchPlantModal(e)}>Close</PrimaryButton>
          <InnerContent>
            <PlantsListView addNewPlant={addNewPlant} searchPlants={searchPlants} searchPlantModal={searchPlantModal}/>
          <PrimaryButton onClick={e => searchPlantModal(e)}>Close</PrimaryButton>
          </InnerContent>
        </ModalContent>
      </InnerModal>
    </OuterModal>

  )
}

export default PlantSearchModal
