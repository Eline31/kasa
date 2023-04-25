import { createGlobalStyle } from 'styled-components'
import colors from './Colors'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  color: ${colors.primary}
}
body {
    margin: 0px 100px;  
}
`

export default GlobalStyle
