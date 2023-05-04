import PropTypes from 'prop-types'
import './Banner.scss'

function Banner({ picture, alt, title }) {
  return (
    <secion className="BannerContainer">
      <h1>{title}</h1>
      <img src={picture} alt={alt} />
    </secion>
  )
}

Banner.protoType = {
  title: PropTypes.string,
  picture: PropTypes.string,
  alt: PropTypes.string,
}

export default Banner
