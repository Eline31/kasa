import arrowleft from '../../assets/arrow_left.png'
import arrowright from '../../assets/arrow_right.png'
import { useState, useEffect } from 'react'
import './Carrousel.scss'

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageSlider, setImageSlider] = useState([])

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

  useEffect(() => {
    setImageSlider(pictures)
  }, [])

  // console.log(imageSlider)
  //useEffect sur currentIndex ou useRef

  //Appeler les images ici

  return (
    <>
      <div
        className={
          'CarrouselContainer'
          // currentIndex === index
          //   ? 'CarrouselContainer animation'
          //   : 'CarrouselContainer'
        }
        // style={{ backgroundImage: `url(${pictures})` }}
        //Appeler le tableau en entier d'images - j'affiche currentIndex.
      >
        <div className="imgContainer">
          <img src={imageSlider[currentIndex]} alt="Carrousel d'images" />
        </div>
        {pictures.length > 1 && (
          <>
            <div className="Arrows">
              <button alt="Image précédente" onClick={prevSlide}>
                <img
                  src={arrowleft}
                  className="arrowLeft"
                  alt="Flèche indiquant la gauche"
                />
              </button>
              <button alt="Image suivante" onClick={nextSlide}>
                <img
                  src={arrowright}
                  className="arrowRight"
                  alt="Flèche indiquant la droite"
                />
              </button>
            </div>
            <p>
              {currentIndex + 1} / {pictures.length}
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default Carrousel
