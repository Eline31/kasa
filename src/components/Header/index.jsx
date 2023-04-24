import logo from '../../assets/LOGO-1.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="Home-header">
      <img src={logo} className="Home-logo" alt="logo" />
      <nav>
        <ul>
          <Link to="/">Acceuil</Link>
          <Link to="/About">À propos</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
