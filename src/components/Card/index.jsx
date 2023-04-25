import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/Colors'

const CardContainer = styled.div`
  height: 340px;
  width: 340px;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    ${colors.primary} 65%,
    rgba(0, 0, 0, 0.8) 125%
  );
  box-sizing: border-box;
  padding: 10px;
  display: flex;
`

const CardImg = styled.img`
  object-fit: cover;
  width: 320px;
  border-radius: 10px;
  height: 213px;
`

const CardTitle = styled.h2`
  color: white;
  height: 84px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: start;
  justify-content: start;
`

function Card({ cover, title }) {
  return (
    <CardContainer>
      <Link to="/place/:id">
        <CardImg src={cover} alt="Intérieur d'un logement" />
        <CardTitle>{title}</CardTitle>
      </Link>
    </CardContainer>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Card
