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
  padding: 10px;
  background-position: center;
  background-size: cover;
  button {
    background: none;
    border: none;
    align-self: center;
    cursor: pointer;
    position: absolute;
    &:first-child {
      left: 20px;
    }
    &:last-child {
      right: 20px;
    }
  }
  p {
    align-self: flex-end;
    color: white;
    font-size: 24px;
    position: absolute;
    left: 50%;
  }
`

function Carrousel({ pictures }) {
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
        <>
          <button alt="Image précédente" onClick={prevSlide}>
            <img src={arrowleft} alt="Flèche indiquant la gauche" />
          </button>
          <p>
            {currentIndex + 1}/{pictures.length}
          </p>
          <button alt="Image suivante" onClick={nextSlide}>
            <img src={arrowright} alt="Flèche indiquant la droite" />
          </button>
        </>
      )}
    </CarrouselContainer>
  )
}

export default Carrousel

// Le gars a mis dans place <carrousel pictures={pictures}/>
