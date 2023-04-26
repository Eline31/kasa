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

function Carrousel() {
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
      <img src={img} alt="test" />
      <button>
        <img src={arrowright} alt="Flèche indiquant la droite" />
      </button>
    </CarrouselContainer>
  )
}

export default Carrousel
