import arrowleft from '../../assets/arrow_left.png'
import arrowright from '../../assets/arrow_right.png'
import { useState } from 'react'
import './Carrousel.scss'

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
    <div
      className="CarrouselContainer"
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
    </div>
  )
}

export default Carrousel
