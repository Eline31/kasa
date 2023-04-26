import styled from 'styled-components'

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 288px;
    font-weight: 700;
    margin: 0px;
  }
`

function Error() {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>Retourner sur la page d'accueil</p>
    </ErrorContainer>
  )
}

export default Error
