import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerContainer = styled.section`
  display: flex;
  position: relative;
  margin: 0px 0px 30px 0px;
  background: black;
  border-radius: 25px;
  max-height: 220px;
  border-box: box-sizing;
  h1 {
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
  }
  img {
    width: 100%;
    opacity: 0.7;
    object-fit: cover;
    border-radius: 25px;
  }
`

function Banner({ picture, alt, title }) {
  return (
    <BannerContainer>
      <h1>{title}</h1>
      <img src={picture} alt={alt} />
    </BannerContainer>
  )
}

Banner.protoType = {
  title: PropTypes.string,
  picture: PropTypes.string,
  alt: PropTypes.string,
}

export default Banner