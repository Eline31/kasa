import Card from '../../components/Card'
import data from '../../data/data.json'

function Home() {
  return (
    <div className="Home">
      {data.map((place, index) => (
        <Card
          key={`${place.id}-${index}`}
          cover={place.cover}
          title={place.title}
          location={place.location}
        />
      ))}
    </div>
  )
}

export default Home
