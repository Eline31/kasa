import arrowleft from '../../assets/arrow_left.png'
import arrowright from '../../assets/arrow_right.png'
import { useState, useEffect, useRef } from 'react'
import './Carrousel.scss'
import { Loader } from '../../utils/style/Atoms.jsx'

function Carrousel({ pictures }) {
  //Identification de la slide actuelle
  const [current, setCurrent] = useState(0)
  //Création du tableau d'images pour le carrousel
  const [imageSlider, setImageSlider] = useState([])
  //useState du loader
  const [isLoading, setIsLoading] = useState(false)
  //Création de références en fonction de la position de la slide
  const prevDiv = useRef(null)
  const currentDiv = useRef(null)
  const nextDiv = useRef(null)

  //Remplissage du tableau d'images grâce à la props "pictures"
  useEffect(() => {
    setIsLoading(true)
    pictures && setImageSlider(pictures)
    setIsLoading(false)
  }, [])

  //Fonction de gestion du roulement du carrousel vers la droite
  const nextSlide = () => {
    setIsLoading(true)
    // Ici on vérifie que les références ont bien été initialisées
    if (!currentDiv.current && !nextDiv.current) {
      return
    }
    //Ajout de classes aux div en fonction de leur position
    currentDiv.current.classList.add('slide-next')
    nextDiv.current.classList.add('slide-next')
    //Fait tourner le carrousel avec un décalage de 500ms pour permettre à l'animation de se terminer
    setTimeout(() => {
      if (current < imageSlider.length - 1) {
        setCurrent(current + 1)
      } else if (current === imageSlider.length - 1) {
        setCurrent(0)
      }
      //On supprime les classes créées précédemment
      currentDiv.current.classList.remove('slide-next')
      nextDiv.current.classList.remove('slide-next')
    }, 595)
    setIsLoading(false)
  }

  //Fonction de gestion du roulement du carrousel vers la gauche
  const prevSlide = () => {
    setIsLoading(true)
    if (!prevDiv.current && !currentDiv.current) {
      return
    }
    prevDiv.current.classList.add('slide-prev')
    currentDiv.current.classList.add('slide-prev')

    setTimeout(() => {
      if (current > 0) {
        setCurrent(current - 1)
      } else if (current === 0) {
        setCurrent(imageSlider.length - 1)
      }
      prevDiv.current.classList.remove('slide-prev')
      currentDiv.current.classList.remove('slide-prev')
    }, 595)
    setIsLoading(false)
  }

  //Fonction de récupération de l'image précédente
  const getPrev = () => {
    if (current === 0) {
      return imageSlider.length - 1
    }
    return current - 1
  }

  //Fonction de récupération de l'image suivante
  const getNext = () => {
    if (current === imageSlider.length - 1) {
      return 0
    }
    return current + 1
  }

  return (
    <div className="CarrouselContainer">
      {isLoading ? (
        <div className="LoaderWrapper">
          <Loader />
        </div>
      ) : (
        <>
          {imageSlider && (
            <>
              <div
                ref={prevDiv}
                className="imgContainer"
                style={{
                  left: `-100%`,
                  backgroundImage: `url(${imageSlider[getPrev()]})`,
                }}
              />
              <div
                ref={currentDiv}
                className="imgContainer"
                style={{
                  left: `0`,
                  backgroundImage: `url(${imageSlider[current]})`,
                }}
              />
              <div
                ref={nextDiv}
                className="imgContainer"
                style={{
                  left: `100%`,
                  backgroundImage: `url(${imageSlider[getNext()]})`,
                }}
              />
            </>
          )}
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
