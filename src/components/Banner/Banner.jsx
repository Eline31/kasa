import styled from 'styled-components'
import PropTypes from 'prop-types'
// import './Banner.scss'

const BannerContainer = styled.section`
  display: flex;
  position: relative;
  margin: 0px 100px 30px 100px;
  background: black;
  border-radius: 25px;
  max-height: 220px;
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
  }
  img {
    width: 100%;
    opacity: 0.7;
    object-fit: cover;
    border-radius: 25px;
  }
  @media only screen and (max-width: 1023px) {
    margin: 0px 20px 10px 20px;
    height: 110px;
    border-radius: 10px;
    h1 {
      font-size: 1.7em;
      justify-content: flex-start;
      line-height: 1;
      padding-right: 70px;
    }
    img {
      border-radius: 10px;
    }
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
