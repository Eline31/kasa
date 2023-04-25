import Card from '../../components/Card'
import data from '../../data/data.json'
import BgHome from '../../assets/Home.png'
import styled from 'styled-components'
import colors from '../../utils/style/Colors'

/**Bannière de haut de page */
const Title = styled.h1`
  color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  font-weight: 500;
  font-size: 2.5em;
  margin: 0px;
  padding: 20px;
  box-sizing: border-box;
`

const ImgBG = styled.img`
  width: 100%;
  opacity: 0.7;
  object-fit: cover;
  border-radius: 25px;
`

const Banner = styled.section`
  display: flex;
  position: relative;
  margin: 0px 0px 30px 0px;
  background: black;
  border-radius: 25px;
  max-height: 220px;
  border-box: box-sizing;
`

/**Section de contenus avec cartes logement */
const CardsContainer = styled.section`
  background: ${colors.secondary};
  border-radius: 25px;
  width: 100%;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(340px, 30%), 1fr));
  grid-gap: 2rem;
  box-sizing: border-box;
  justify-items: center;
`

function Home() {
  return (
    <>
      <Banner>
        <Title>Chez vous, partout et ailleurs</Title>
        <ImgBG src={BgHome} alt="Falaise" />
      </Banner>
      <CardsContainer>
        {data.map((place, index) => (
          <Card
            key={`${place.id}-${index}`}
            cover={place.cover}
            title={place.title}
            location={place.location}
          />
        ))}
      </CardsContainer>
    </>
  )
}

export default Home
