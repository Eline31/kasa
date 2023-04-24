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
`

const Logo = styled.img`
  height: 40px;
  padding: 20px;
`

const Right = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: white;
`

function Footer() {
  return (
    <FooterContainer>
      <Logo src={logo} alt="logo" />
      <Right>© 2020 Kasa. All rights reserved</Right>
    </FooterContainer>
  )
}

export default Footer
