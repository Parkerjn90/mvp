/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { InnerContent, EmptyDiv, PrimaryLabel, SearchField, PrimaryButton } from '../../styles/styles.jsx'

const SearchView = ({ searchPlantModal, searchForPlants }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const inputHandler = (e) => {
    console.log(e.target.value)
    setSearchQuery(e.target.value)
  }

  const searchHandler = (e) => {
    searchForPlants(searchQuery)
    searchPlantModal()
  }

  return (
    <InnerContent>
      <EmptyDiv></EmptyDiv>
      <PrimaryLabel htmlFor="search bar">
        Find a plan that&apos;s already been added:<br></br>
      <SearchField type="text" name="search bar" onChange={e => inputHandler(e)}/>
      <PrimaryButton onClick={e => searchHandler(e)}>Search</PrimaryButton>
      </PrimaryLabel>
    </InnerContent>
  )
}

export default SearchView
