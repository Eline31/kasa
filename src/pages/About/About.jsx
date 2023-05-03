import ImgAbout from '../../assets/About.png'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import styled from 'styled-components'

const CollapseContainer = styled.div`
  margin: 0px 150px 50px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function About() {
  return (
    <div>
      <Banner picture={ImgAbout} alt="Montagnes" />
      <CollapseContainer>
        <Collapse title="Fiabilité" />
        <Collapse
          title="Respect"
          info="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        ></Collapse>
        <Collapse title="Service" info="" />
        <Collapse title="Sécurité" info="" />
      </CollapseContainer>
    </div>
  )
}

export default About
