import Card from '../../components/Card'
import data from '../../data/data.json'
import BgHome from '../../assets/Home.png'
import styled from 'styled-components'
import colors from '../../utils/style/Colors'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'

/**Section de contenus avec cartes logement */
const CardsContainer = styled.section`
  background: ${colors.secondary};
  border-radius: 25px;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(340px, 30%), 1fr));
  grid-gap: 2rem;
  justify-items: center;
  margin: 0px 100px 100px 100px;
  @media only screen and (max-width: 1023px) {
    margin: 0px 20px;
    justify-content: center;
    padding: 10px 0px;
    background: none;
  }
`

const CardLink = styled(Link)`
  text-decoration: none;
  &:hover {
    filter: drop-shadow(2px 3px 4px grey);
    opacity: 0.9;
  }
`

function Home() {
  const ids = data.map((data) => data.id)

  return (
    <>
      <Banner
        picture={BgHome}
        alt="Falaises"
        title="Chez vous, partout et ailleurs"
      />
      <CardsContainer>
        {data.map((place, index) => (
          <CardLink
            key={`${place.id}-Card`}
            to={ids.includes(`${place.id}`) ? `/place/${place.id}` : '/error'}
          >
            <Card
              key={`${place.id}-${index}`}
              cover={place.cover}
              title={place.title}
              location={place.location}
            />
          </CardLink>
        ))}
      </CardsContainer>
    </>
  )
}

export default Home
