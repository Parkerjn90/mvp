/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import axios from 'axios'
import {
  PrimaryButton, SecondaryButton, ViewTitle, SecondaryLabel, AddPlantInput,
  OuterModal, InnerModal, ModalContent, Species
} from '../../styles/styles.jsx'
import { MdWaterDrop } from 'react-icons/md'
import { FiSun } from 'react-icons/fi'
import { RiSeedlingFill } from 'react-icons/ri'

const AddPlantModal = ({ addNewPlant, addPlantModal }) => {
  const userInfo = {}

  const submitHandler = (e) => {
    // e.preventDefault()
    console.log(userInfo)
    axios({
      method: 'post',
      url: '/',
      data: userInfo,
      contentType: 'application/json'
    })
      .then((res) => {
        console.log(res.data)
        console.log(res.data[0].id)
        localStorage.setItem(res.data[0].id, JSON.stringify(res.data[0].id))
        addNewPlant(res.data[0])
      })
      .catch((err) => {
        console.log('error')
        console.error(err)
      })
    addPlantModal()
  }

  const changeHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    userInfo[e.target.name] = e.target.value
    console.log(userInfo)
  }

  return (
    <>
      <OuterModal>
        <InnerModal>
          <ModalContent>
            <ViewTitle>Add A Plant</ViewTitle>
            <form>
              <SecondaryLabel htmlFor="plant">
                Plant:<br></br>
                <AddPlantInput type="text" name="plant" required onChange={changeHandler} />
              </SecondaryLabel>
              <SecondaryLabel htmlFor="species">
                Species:<Species>(if known)</Species><br></br>
                <AddPlantInput type="text" name="species" onChange={changeHandler} />
              </SecondaryLabel><br></br>
              <SecondaryLabel htmlFor="watering">
                <MdWaterDrop /> Watering Needs:<br></br>
                <AddPlantInput type="text-area" name="watering" required onChange={changeHandler} />
              </SecondaryLabel><br></br>
              <SecondaryLabel htmlFor="sunlight">
                <FiSun /> Sunlight Needs:<br></br>
                <AddPlantInput type="text" name="sunlight" required onChange={changeHandler} />
              </SecondaryLabel><br></br>
              <SecondaryLabel htmlFor="fertilizer">
                <RiSeedlingFill /> Fertilizer Needs:<br></br>
                <AddPlantInput type="text" name="fertilizer" onChange={changeHandler} />
              </SecondaryLabel><br></br>
              <SecondaryLabel htmlFor="username">
                <RiSeedlingFill /> Username:<br></br>
                <AddPlantInput type="text" name="username" onChange={changeHandler} />
              </SecondaryLabel><br></br>
              <PrimaryButton onClick={e => submitHandler(e)}>Add</PrimaryButton><SecondaryButton onClick={e => addPlantModal(e)}>Close</SecondaryButton>
            </form>
          </ModalContent>
        </InnerModal>
      </OuterModal>
    </>
  )
}

export default AddPlantModal
