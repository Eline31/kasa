import logo from '../../assets/LOGO-1.svg'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
  padding: 40px 0px;
  height: 70px;
  min-height: 47px;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  margin: 20px 100px;
  a {
    max-height: 70px;
    max-width: 150px;
    padding: 0px !important;
  }
  div {
    width: 100%;
    text-align: end;
    a {
      padding-left: 40px !important;
    }
  }
  .active {
    text-decoration: underline;
  }
  @media only screen and (max-width: 1023px) {
    text-transform: uppercase;
    margin: 20px 20px 10px 20px;
    padding: 20px 0px;
    width: none;
    justify-content: space-between;
    a {
      width: 50%;
      padding-left: 10px;
      img {
        width: 80%;
      }
    }
    div {
      width: 50%;
      a {
        font-size: 0.9em;
        text-align: flex-end;
        padding-left: 10px !important;
      }
    }
  }
`

function Header() {
  const location = useLocation()

  return (
    <>
      <NavContainer className="Home-header">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className={location.pathname === '/' ? 'active' : ''}
          />
        </Link>
        <div>
          <StyledLink
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Accueil
          </StyledLink>
          <StyledLink
            to="/About"
            className={location.pathname === '/About' ? 'active' : ''}
          >
            À propos
          </StyledLink>
        </div>
      </NavContainer>
    </>
  )
}

export default Header
