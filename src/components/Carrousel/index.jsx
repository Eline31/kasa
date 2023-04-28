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
  button {
    background: none;
    border: none;
    align-self: center;
    cursor: pointer;
    position: absolute;
    &:first-child {
      left: 20px;
      padding-left: 10px;
    }
    &:last-child {
      right: 20px;
      padding-right: 10px;
    }
  }
  p {
    align-self: flex-end;
    color: white;
    font-size: 18px;
    position: absolute;
    left: 50%;
  }
`

function BtnSlide({ direction, moveSlide }) {
  return (
    <button OnClick={moveSlide}>
      <img
        src={direction === 'next' ? arrowright : arrowleft}
        alt={
          direction === 'next'
            ? 'Flèche indiquant la droite'
            : 'Flèche indiquant la gauche'
        }
      />
    </button>
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
    <CarrouselContainer
      style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
    >
      {pictures.length > 1 && (
        <BtnSlide direction={'prev'} moveSlide={prevSlide} />
      )}
      <p>
        {currentIndex + 1}/{pictures.length}
      </p>
      {pictures.length > 1 && (
        <BtnSlide moveSlide={nextSlide} direction={'next'} />
      )}
    </CarrouselContainer>
  )
}

export default Carrousel

// Le gars a mis dans place <carrousel pictures={pictures}/>
