import logo from '../../../assets/LOGO-1.svg'
import { Link, useLocation } from 'react-router-dom'
import { StyledLink } from '../../../utils/style/Atoms'
import './Header.scss'

function Header() {
  const location = useLocation()

  return (
    <>
      <nav className="NavContainer">
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
      </nav>
    </>
  )
}

export default Header
