import logo from '../../assets/LOGO.png'
import './Footer.scss'

function Footer() {
  return (
    <div className="FooterContainer">
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
