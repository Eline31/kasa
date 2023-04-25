import logo from '../../assets/LOGO-1.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
  padding: 40px 0px;
  width: 100%;
  height: 70px;
  min-height: 47px;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  img {
    max-height: 70px;
    max-width: 150px;
  }
  div {
    width: 100%;
    text-align: end;
  }
`

function Header() {
  return (
    <NavContainer className="Home-header">
      <Link to="/">
        <img src={logo} className="Home-logo" alt="logo" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/About">À propos</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
