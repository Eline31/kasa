import Place from '../../assets/Background_component.png'
import { Link } from 'react-router-dom'

function Card({ cover, title, location }) {
  return (
    <div>
      <Link to="/place/:id">
        <img src={cover} alt="Intérieur d'un logement" />
        <h2>{title}</h2>
        <p>{location}</p>
      </Link>
    </div>
  )
}

export default Card
