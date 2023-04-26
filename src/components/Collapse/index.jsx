import { useState } from 'react'
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
  margin: 10px 0px 0px 0px;
  h2 {
    font-family: 'Montserrat';
    color: white;
  }
  ${(props) =>
    props.$isOpen &&
    `
    img {
        transform: rotate(180deg);
    }`}
`

const Info = styled.p`
  font-size: 18px;
  padding: 20px;
  background: ${colors.secondary};
  margin: 0px;
  border-radius: 0px 0px 5px 5px;
`

function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {!isOpen ? (
        <CollapseContainer onClick={() => setIsOpen(!isOpen)}>
          <h2>{title}</h2>
          <img src={arrow} alt="flèche vers le bas" />
        </CollapseContainer>
      ) : (
        <>
          <CollapseContainer onClick={() => setIsOpen(!isOpen)} $isOpen>
            <h2>{title}</h2>
            <img src={arrow} alt="flèche vers le haut" />
          </CollapseContainer>
          {isOpen && <Info>{info}</Info>}
        </>
      )}
    </>
  )
}

export default Collapse