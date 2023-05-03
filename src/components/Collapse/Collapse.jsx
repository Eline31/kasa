import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import styled from 'styled-components'
import colors from '../../utils/style/Colors'

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 30px;
  transition: all 300ms ease-in-out;
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
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.9;
    }
    h2 {
      font-family: 'Montserrat';
      color: white;
    }
    img {
      transform: rotate(0deg);
    }
  }
  div {
    font-size: 18px;
    padding: 20px;
    background: ${colors.secondary};
    margin: 0px;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  div.collapsecontainer__isopen {
    button > img {
      transform: rotate(180deg);
      transition: all 300ms ease-in-out;
    }
    div {
      font-size: 18px;
      padding: 20px;
      background: ${colors.secondary};
      margin: 0px;
      border-radius: 0px 0px 5px 5px;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      opacity: 1;
      visibility: visible;
      transition: all 300ms ease-in-out;
    }
  }
`

function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <CollapseContainer
        className={
          !isOpen
            ? 'collapsecontainer collapsecontainer'
            : 'collapsecontainer__isopen'
        }
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <h2>{title}</h2>
          <img
            src={arrow}
            alt={isOpen ? 'cacher le contenu' : 'afficher le contenu'}
          />
        </button>
        {isOpen && <div>{info}</div>}
      </CollapseContainer>
    </>
  )
}

export default Collapse
