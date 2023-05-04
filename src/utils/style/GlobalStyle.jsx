import { createGlobalStyle } from 'styled-components'
import colors from './Colors'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  color: ${colors.primary};
  box-sizing: border-box;
}
body {
    margin: auto; 
    max-width: 1440px; 
}
`

export default GlobalStyle
