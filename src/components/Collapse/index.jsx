import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import styled from 'styled-components'
import colors from '../../utils/style/Colors'

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 30px;
  button {
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
    transform: rotate(0deg);
    h2 {
      font-family: 'Montserrat';
      color: white;
    }
`

const CollapseBar = styled.button`
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
  &:hover {
    opacity: 0.9;
  }
  img {
    transform: rotate(0deg);
    transition: all 300ms ease-in-out;
  }
  h2 {
    font-family: 'Montserrat';
    color: white;
  }
  ${(props) =>
    props.$isOpen &&
    `
    img {
      transition: all 300ms ease-in-out;
      transform: rotate(180deg);
    }`}
`

const Info = styled.div`
  font-size: 18px;
  padding: 20px;
  background: ${colors.secondary};
  margin: 0px;
  border-radius: 0px 0px 5px 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 300ms ease-in-out;
  ${(props) =>
    props.$isOpen &&
    `
    opacity: 1;
    visibility: visible;
    `}
`

function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {!isOpen ? (
        <CollapseContainer className="isClosed">
          <CollapseBar onClick={() => setIsOpen(!isOpen)}>
            <h2>{title}</h2>
            <img src={arrow} alt="afficher le contenu" />
          </CollapseBar>
        </CollapseContainer>
      ) : (
        <CollapseContainer className="isOpen">
          <CollapseBar onClick={() => setIsOpen(!isOpen)} $isOpen>
            <h2>{title}</h2>
            <img src={arrow} alt="cacher le contenu" />
          </CollapseBar>
          {isOpen && <Info $isOpen>{info}</Info>}
        </CollapseContainer>
      )}
    </>
  )
}

export default Collapse
