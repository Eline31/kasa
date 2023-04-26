import { createGlobalStyle } from 'styled-components'
import colors from './Colors'

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  color: ${colors.primary}
}
body {
    margin: 0px;  
}
footer {
  margin: 0px;
}
`

export default GlobalStyle
