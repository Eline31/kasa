import arrowleft from '../../assets/arrow_left.png'
import arrowright from '../../assets/arrow_right.png'
import styled from 'styled-components'
import { useState } from 'react'

const CarrouselContainer = styled.div`
  display: flex;
  position: relative;
  height: 410px;
  margin: 0px 100px;
  border-radius: 25px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
`

const BtnSlider = styled.button`
  button:first-child {
    position: absolute;
    left: 20px;
    background: none;
    border: none;
    padding-left: 10px;
    align-self: center;
    cursor: pointer;
  }
  button:last-child {
    position: absolute;
    right: 20px;
    background: none;
    border: none;
    padding-right: 10px;
    align-self: center;
    cursor: pointer;
  }
`

function BtnSlide({ direction, moveSlide }) {
  return (
    <BtnSlider OnClick={moveSlide}>
      <img
        src={direction === 'next' ? arrowright : arrowleft}
        alt={
          direction === 'next'
            ? 'Flèche indiquant la droite'
            : 'Flèche indiquant la gauche'
        }
      />
    </BtnSlider>
  )
}

function Carrousel({ pictures }) {
  // const { id } = useParams()
  // const dataPlace = data.find((place) => {
  //   if (place.id === id) {
  //     return { place }
  //   } else {
  //     return "Aucun logement correspondant à cet ID n'a été trouvé"
  //   }
  // })

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0)
    }
  }
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1)
    }
  }
  return (
    <CarrouselContainer>
      {pictures.length > 1 && (
        <BtnSlide direction={'prev'} moveSlide={prevSlide}>
          {/* <img src={arrowleft} alt="Flèche indiquant la gauche" /> */}
        </BtnSlide>
      )}
      {pictures.map((picture) => (
        <>
          <img src={picture[currentIndex]} alt="Logement" />
          <p>
            {currentIndex + 1}/{pictures.length}
          </p>
        </>
      ))}
      {pictures.length > 1 && (
        <BtnSlide moveSlide={nextSlide} direction={'next'}>
          {/* <img src={arrowright} alt="Flèche indiquant la droite" /> */}
        </BtnSlide>
      )}
    </CarrouselContainer>
  )
}

export default Carrousel

// Le gars a mis dans place <carrousel pictures={pictures}/>
