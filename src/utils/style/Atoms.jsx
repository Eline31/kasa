import { Link } from 'react-router-dom'
import './GlobalStyle.scss'
import styled, { keyframes } from 'styled-components'

export const StyledLink = styled(Link)`
  color: $primary-color;
  text-decoration: none;
  font-size: 1.3rem;
  padding-left: 1.5em;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid $primary-color;
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`
