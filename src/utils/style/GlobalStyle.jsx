import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  color: ${colors.primary}
}
body {
    margin: 0;  
}
`

export default GlobalStyle
