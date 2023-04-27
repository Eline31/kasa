import data from '../../data/data.json'
import arrowleft from '../../assets/arrow_left.png'
import arrowright from '../../assets/arrow_right.png'
import styled from 'styled-components'
import img from '../../assets/Background_component.png'

const CarrouselContainer = styled.div`
  display: flex;
  position: relative;
  height: 410px;
  margin: 0px 100px;
  border-radius: 25px;
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
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
  }
`

function Carrousel({ picture, alt }) {
  console.log(data)
  return (
    <CarrouselContainer>
      <button>
        <img src={arrowleft} alt="Flèche indiquant la gauche" />
      </button>
      {/* {data.pictures &&
        data.pictures.map((picture, index) => (
          <img key={`${picture}-${index}`} src={picture} alt="Logement">
            {picture}
          </img>
        ))} */}
      <img src={picture} alt={alt} />
      <button>
        <img src={arrowright} alt="Flèche indiquant la droite" />
      </button>
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
