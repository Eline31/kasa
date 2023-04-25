import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './Colors'

export const StyledLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-size: 1.3rem;
  padding-left: 1.5em;
  &:hover {
    text-decoration: underline;
  }
`
