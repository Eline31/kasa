import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './ErrorAccomodation.scss'

function ErrorAccomodation() {
  let error = useRouteError()
  console.error(error)
  return (
    <div className="ErrorContainer">
      <h1>500</h1>
      <p>Oups! L'accomodation que vous demandez n'existe pas.</p>
      <Link className="BackHomepage" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default ErrorAccomodation
