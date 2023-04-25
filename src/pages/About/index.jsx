import ImgAbout from '../../assets/About.png'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { useState, setState } from 'react'

function About() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Banner picture={ImgAbout} alt="Montagnes" />
      <Collapse title="Fiabilité" />
      <Collapse title="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </Collapse>
      <Collapse title="Service" info="" />
      <Collapse title="Sécurité" info="" />
    </div>
  )
}

export default About
