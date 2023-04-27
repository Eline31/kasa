import data from '../../data/data.json'
import arrowleft from '../../assets/arrow_left.png'
import arrowright from '../../assets/arrow_right.png'
import styled from 'styled-components'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <BtnSlider
      OnClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
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

function Carrousel({ moveSlide, picture, alt }) {
  const { id } = useParams()
  const dataPlace = data.map((place) => place.id === { id })
  const [slideIndex, setSlideIndex] = useState(1)
  const nextSlide = () => {
    if (slideIndex < data.pictures.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === data.pictures.lenght) {
      setSlideIndex(1)
    }
  }
  const prevSlide = () => {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(data.pictures.length)
    }
  }
  return (
    <CarrouselContainer>
      <BtnSlide moveSlide={prevSlide} direction={'prev'} onClick={moveSlide}>
        {/* <img src={arrowleft} alt="Flèche indiquant la gauche" /> */}
      </BtnSlide>
      {data.pictures &&
        data.pictures.map((picture, index) => (
          <div
            key={`${id}-${index}`}
            // className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <img src={picture + `${picture}${index + 1}`} alt="Logement">
              {picture}
            </img>
          </div>
        ))}
      <BtnSlide moveSlide={nextSlide} direction={'next'}>
        {/* <img src={arrowright} alt="Flèche indiquant la droite" /> */}
      </BtnSlide>
    </CarrouselContainer>
  )
}

export default Carrousel

// function Survey() {
//   const { theme } = useTheme()
//   const { questionNumber } = useParams()
//   const questionNumberInt = parseInt(questionNumber)
//   const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
//   const nextQuestionNumber = questionNumberInt + 1
//   const { saveAnswers, answers } = useContext(SurveyContext)
// const [error, setError] = useState(null)

//   function saveReply(answer) {
//     saveAnswers({ [questionNumber]: answer })
//   }

//   const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
//   const { surveyData } = data

//   if (error) {
//     return <span>Il y a un problème</span>
//   }

//   return (
//     <SurveyContainer>
//       <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <QuestionContent theme={theme}>
//           {surveyData && surveyData[questionNumber]}
//         </QuestionContent>
//       )}
//       {answers && (
//         <ReplyWrapper>
//           <ReplyBox
//             onClick={() => saveReply(true)}
//             isSelected={answers[questionNumber] === true}
//             theme={theme}
//           >
//             Oui
//           </ReplyBox>
//           <ReplyBox
//             onClick={() => saveReply(false)}
//             isSelected={answers[questionNumber] === false}
//             theme={theme}
//           >
//             Non
//           </ReplyBox>
//         </ReplyWrapper>
//       )}
//       <LinkWrapper theme={theme}>
//         <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
//         {surveyData && surveyData[questionNumberInt + 1] ? (
//           <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
//         ) : (
//           <Link to="/results">Résultats</Link>
//         )}
//       </LinkWrapper>
//     </SurveyContainer>
//   )
