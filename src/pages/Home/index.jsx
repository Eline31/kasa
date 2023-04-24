import '../../Home.css'
import Card from '../../components/Card'
import data from '../../data/data.json'

function Home() {
  return (
    <div className="Home">
      {data.map((place) => (
        <Card
          key={`$place.id`}
          cover={place.cover}
          title={place.title}
          location={place.location}
        />
      ))}
    </div>
  )
}

export default Home
