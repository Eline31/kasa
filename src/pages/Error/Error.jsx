import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 100px;
  h1 {
    font-size: 288px;
    font-weight: 700;
    margin: 0px;
  }
  p:first-of-type {
    font-size: 36px;
    margin: 0px 0px 100px 0px;
  }
`

const BackHomepage = styled(Link)`
  font-size: 18px;
  text-decoration: underline;
  margin: 100px 0px 50px 0px;
`

function Error() {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <BackHomepage to="/">Retourner sur la page d'accueil</BackHomepage>
    </ErrorContainer>
  )
}

export default Error
