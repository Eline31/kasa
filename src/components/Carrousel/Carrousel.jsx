import arrowleft from '../../assets/arrow_left.png'
import arrowright from '../../assets/arrow_right.png'
import { useState, useEffect } from 'react'
import './Carrousel.scss'
import { Loader } from '../../utils/style/Atoms.jsx'

function Carrousel({ pictures }) {
  //Identification de la slide actuelle
  const [current, setCurrent] = useState(0)
  //Création du tableau d'images pour le carrousel
  const [imageSlider, setImageSlider] = useState([])
  //useState du loader
  const [isLoading, setIsLoading] = useState(false)

  //Remplissage du tableau d'images grâce à la props "pictures"
  useEffect(() => {
    setIsLoading(true)
    pictures && setImageSlider(pictures)
    setIsLoading(false)
  }, [])

  //Fonction de gestion du roulement du carrousel vers la droite
  const nextSlide = () => {
    setIsLoading(true)
    if (current < imageSlider.length - 1) {
      setCurrent(current + 1)
    } else if (current === imageSlider.length - 1) {
      setCurrent(0)
    }
    setIsLoading(false)
  }

  //Fonction de gestion du roulement du carrousel vers la gauche
  const prevSlide = () => {
    setIsLoading(true)
    if (current > 0) {
      setCurrent(current - 1)
    } else if (current === 0) {
      setCurrent(imageSlider.length - 1)
    }
    setIsLoading(false)
  }

  return (
    <div className="CarrouselContainer">
      {isLoading ? (
        <div className="LoaderWrapper">
          <Loader />
        </div>
      ) : (
        <>
          {imageSlider &&
            imageSlider.map((image, index) => {
              return (
                <div className="imgContainer" key={`image-${index}`}>
                  <img
                    src={image}
                    alt="Carrousel d'images du logement"
                    className={index === current ? 'active' : ''}
                  />
                </div>
              )
            })}
          {imageSlider.length > 1 && (
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
                {current + 1} / {imageSlider.length}
              </p>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Carrousel
