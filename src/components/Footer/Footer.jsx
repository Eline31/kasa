import logo from '../../assets/LOGO.png'
import styled from 'styled-components'

const FooterContainer = styled.div`
  height: 200px;
  background: black;
  color: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 40px;
  }
  p {
    font-weight: 500;
    font-size: 24px;
    color: white;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  )
}

export default Footer
