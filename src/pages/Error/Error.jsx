import { Link, useRouteError } from 'react-router-dom'
import './Error.scss'

function Error({ message }) {
  const error = useRouteError()
  console.error(error)
  return (
    <div className="ErrorContainer">
      <h1>404</h1>
      <p>
        {message ? message : "Oups! La page que vous demandez n'existe pas."}
      </p>
      <Link className="BackHomepage" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
