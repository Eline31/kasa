import arrowleft from '../../assets/arrow_left.png'
import arrowright from '../../assets/arrow_right.png'
import { useState, useEffect } from 'react'
import './Carrousel.scss'
import { Loader } from '../../utils/style/Atoms.jsx'

function Carrousel({ pictures }) {
  const [current, setCurrent] = useState(0)
  const [imageSlider, setImageSlider] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    pictures ? setImageSlider(pictures) : setIsLoading(true)
    console.log(imageSlider)
  }, [])

  // const picture = imageSlider.map((index) => {
  //   return (
  //     <img
  //       src={imageSlider[currentIndex]}
  //       key={`${imageSlider[currentIndex]}-${index}`}
  //       alt="Carrousel d'images"
  //     />
  //   )
  // })

  const nextSlide = () => {
    if (current < imageSlider.length - 1) {
      setCurrent(current + 1)
    } else if (current === imageSlider.length - 1) {
      setCurrent(0)
    }
  }
  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1)
    } else if (current === 0) {
      setCurrent(imageSlider.length - 1)
    }
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     imageSlider[currentIndex]
  //   }, 5000)
  // }, [prevSlide, nextSlide])

  // console.log(imageSlider)
  //useEffect sur currentIndex ou useRef
  // useEffect(() => {
  //   return <img src={imageSlider[currentIndex]} alt="Carrousel d'images" />
  // }, [imageSlider[currentIndex]])
  //Appeler les images ici

  return (
    <>
      {isLoading ? (
        <div className="LoaderWrapper">
          <Loader />
        </div>
      ) : (
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
          {imageSlider &&
            imageSlider.map((image, index) => (
              <div
                key={index}
                className={
                  index === current
                    ? 'imgContainer imageOnDisplay'
                    : 'imgContainer imageOffDisplay'
                }
              >
                {index === current && (
                  <img src={image} alt="Carrousel d'images" />
                )}
              </div>
            ))}
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
        </div>
      )}
    </>
  )
}

export default Carrousel
