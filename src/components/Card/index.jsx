import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Card
