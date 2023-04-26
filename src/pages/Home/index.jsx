import Card from '../../components/Card'
import data from '../../data/data.json'
import BgHome from '../../assets/Home.png'
import styled from 'styled-components'
import colors from '../../utils/style/Colors'
import Banner from '../../components/Banner'

/**Section de contenus avec cartes logement */
const CardsContainer = styled.section`
  background: ${colors.secondary};
  border-radius: 25px;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(340px, 30%), 1fr));
  grid-gap: 2rem;
  box-sizing: border-box;
  justify-items: center;
  margin: 0px 100px 100px 100px;
`

function Home() {
  return (
    <>
      <Banner
        picture={BgHome}
        alt="Falaises"
        title="Chez vous, partout et ailleurs"
      />
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
