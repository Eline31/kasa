import Card from '../../components/Card/Card.jsx'
import data from '../../data/data.json'
import BgHome from '../../assets/Home.png'
import Banner from '../../components/Banner/Banner.jsx'
import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
  const ids = data.map((data) => data.id)

  return (
    <>
      <Banner
        picture={BgHome}
        alt="Falaises"
        title="Chez vous, partout et ailleurs"
      />
      <section className="CardsContainer">
        {data.map((accomodation, index) => (
          <Link
            className="CardLink"
            key={`${accomodation.id}-Card`}
            to={
              ids.includes(`${accomodation.id}`)
                ? `/accomodation/${accomodation.id}`
                : '/error'
            }
          >
            <Card
              key={`${accomodation.id}-${index}`}
              cover={accomodation.cover}
              title={accomodation.title}
              location={accomodation.location}
            />
          </Link>
        ))}
      </section>
    </>
  )
}

export default Home
