import logo from '../../assets/LOGO-1.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
  padding: 40px 100px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HeaderLogo = styled.img`
  height: 70px;
`

function Header() {
  return (
    <NavContainer className="Home-header">
      <Link to="/">
        <HeaderLogo src={logo} className="Home-logo" alt="logo" />
      </Link>
      <div>
        <ul>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/About">À propos</StyledLink>
        </ul>
      </div>
    </NavContainer>
  )
}

export default Header
