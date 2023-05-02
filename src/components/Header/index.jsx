import logo from '../../assets/LOGO-1.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import { useState } from 'react'

const NavContainer = styled.nav`
  padding: 40px 0px;
  height: 70px;
  min-height: 47px;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  margin: 0px 100px;
  img {
    max-height: 70px;
    max-width: 150px;
  }
  div {
    width: 100%;
    text-align: end;
  }
  .active {
    text-decoration: underline;
  }
  @media only screen and (max-width: 1023px) {
    text-transform: uppercase;
    margin: 30px 20px;
  }
`

function Header() {
  const [select, setSelect] = useState(false)
  const currentRoute = window.location.pathname

  return (
    <>
      <NavContainer className="Home-header">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={currentRoute === '/' ? 'active' : ''}
          />
        </Link>
        <div>
          <StyledLink
            to="/"
            onClick={() => setSelect(!select)}
            className={currentRoute === '/' ? 'active' : ''}
          >
            Accueil
          </StyledLink>
          <StyledLink
            to="/About"
            onClick={() => setSelect(!select)}
            className={currentRoute === '/About' ? 'active' : ''}
          >
            À propos
          </StyledLink>
        </div>
      </NavContainer>
    </>
  )
}

export default Header
