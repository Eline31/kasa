import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  padding-left: 50px;
  &:hover {
    text-decoration: underline;
  }
`
