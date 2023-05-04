// import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.scss'

function Card({ cover, title }) {
  return (
    <div className="CardContainer">
      <img src={cover} alt="Intérieur d'un logement" />
      <h2>{title}</h2>
    </div>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Card
