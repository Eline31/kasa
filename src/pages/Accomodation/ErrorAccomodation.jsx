import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ErrorAccomodation.scss'

function ErrorAccomodation() {
  const error = useRouteError()
  return (
    <div className="ErrorContainer">
      <h1>500</h1>
      <p>{error.message}</p>
      <Link className="BackHomepage" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default ErrorAccomodation
