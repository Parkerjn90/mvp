import styled from 'styled-components'

// ---------- Page Position ----------
const CenterContent = styled.div`
  width: 80%;
  margin: 0 auto;
  background: #fffdbb88;
  border-radius: 15px;
`
const InnerContent = styled.div`
  width: 90%;
  margin: 0 auto;
`
const EmptyDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 20px;
  clear: both;
`

const SmallEmptyDiv = styled.div`
  width: 90%;
  margin: 0;
  height: 0;
  clear: both;
`
const PlantContainer = styled.div`
  width: 100%;
`

const PlantInfo = styled.div`
  width: 100%;
  margin: auto;
`
const PhotoContainer = styled.div`
  width: 20%;
  float: left;
`

// ---------- Title Card ----------

const AppTitle = styled.h1`
  color: #0d2601;
  font-family: "Deepwood", sans-serif;
  font-size: 70px;
  font-weight: 200;
  margin: 0 auto;

`
const TitleBackground = styled.div`
  background: #8aa660;
  background: -moz-radial-gradient(center, ellipse cover, #8aa660 0%, #8aa660 18%, #2e5902 100%);
  background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, #8aa660), color-stop(18%, #8aa660), color-stop(100%, #2e5902));
  background: -webkit-radial-gradient(center, ellipse cover, #8aa660 0%, #8aa660 18%, #2e5902 100%);
  background: -o-radial-gradient(center, ellipse cover, #8aa660 0%, #8aa660 18%, #2e5902 100%);
  background: -ms-radial-gradient(center, ellipse cover, #8aa660 0%, #8aa660 18%, #2e5902 100%);
  background: radial-gradient(ellipse at center, #8aa660 0%, #8aa660 18%, #2e5902 100%);
  border-radius: 15px 15px 0 0;
  width: auto;
  text-align: center;
`

// ---------- Labels ----------
const PrimaryLabel = styled.label`
  color: #0d2601;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`
const SecondaryLabel = styled.label`
  color: #0d2601;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-right: 10px;
  display: block;
`

// ---------- Input Fields ----------
const SearchField = styled.input`
  width: 700px;
  max-width: 80%;
`
const AddPlantInput = styled.input`
  width: 500px;
  max-width: 80%;
`

// ---------- Buttons ----------
const PrimaryButton = styled.button`
  background: #8aa660;
  border-radius: 5px;
  color: #0d2601;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  margin: 5px;
`
const SecondaryButton = styled.button`
  background: #d89bf2;
  border-radius: 5px;
  color: #0d2601;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  margin: 5px;
`

const Button = styled.button`
  background: #d89bf2;
  border-radius: 5px;
  color: #0d2601;
  cursor: pointer;
  display: block;
  float: right;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  margin: 5px;
`

// ---------- View Titles ----------
const ViewTitle = styled.h2`
  color: #0d2601;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-decoration: underline;
`
// ---------- Plant Info ----------

const PlantName = styled.h3`
  color: #2e5901;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  display: inline-block;
  margin: 10px;
  margin-right: 20px;
`
const Species = styled.h4`
  color: #558c03;
  font-family: "MontserratI", sans-serif;
  font-weight: 200;
  display: inline-block;
  margin: 10px;
`
const Needs = styled.p`
  color: #2e5902;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  display: inline-block;
  margin: 10px;
`

// ---------- Modals ----------
const OuterModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #d89bfd88;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`
const InnerModal = styled.div`
  width: 700px;
  max-width: 80%;
  max-height: 90%;
  background-color: #fff;
  border: 5px solid #8aa660;
  border-radius: 5px;
  justify-content: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #2e5902;
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
`

const ModalContent = styled.div`
  padding: 0;
  margin: 10px auto;
  max-width: 90%;
  height: 90%;
  justify-content: center;

`
// ---------- Page Position ----------
const PhotoSquare = styled.div`
  height: 120px;
  width: 120px;
  border: 5px solid #2e5902;
`
const Photo = styled.img`
  width: 110px;
  height: 110px;
  object-fit: cover;
  border: 5px solid #8aa660;
`
Photo.defaultProps = { src: '' }

export {
  // ---------- Page Position ----------
  CenterContent,
  InnerContent,
  EmptyDiv,
  SmallEmptyDiv,
  PlantContainer,
  PlantInfo,
  PhotoContainer,
  // ---------- Title Card ----------
  AppTitle,
  TitleBackground,
  // ---------- Labels ----------
  PrimaryLabel,
  SecondaryLabel,
  // ---------- Input Fields ----------
  SearchField,
  AddPlantInput,
  // ---------- Buttons ----------
  PrimaryButton,
  SecondaryButton,
  Button,
  // ---------- View Titles ----------
  ViewTitle,
  // ---------- Plant Info ----------
  PlantName,
  Species,
  Needs,
  // ---------- Modals ----------
  OuterModal,
  InnerModal,
  ModalContent,
  // ---------- Page Position ----------
  PhotoSquare,
  Photo
}
