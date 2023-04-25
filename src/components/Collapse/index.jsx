import { useState, setState } from 'react'
import arrow from '../../assets/arrow.png'
import styled from 'styled-components'
import colors from '../../utils/style/Colors'

const CollapseContainer = styled.button`
  background: ${colors.primary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  border: none;
  border-radius: 5px;
  height: 50px;
  h2 {
    font-family: 'Montserrat';
    color: white;
  }
  :active {
    img {
      transform: rotate(180deg);
    }
  }
`

function Collapse({ title }) {
  const [isOpen, setIsOpen] = useState(false)
  //   const [isDown, rotateArrow] = useState(0)

  return (
    <CollapseContainer onClick={() => setIsOpen(!isOpen)}>
      <h2>{title}</h2>
      <img src={arrow} alt="flèche vers le bas" />
    </CollapseContainer>
  )
}

export default Collapse
