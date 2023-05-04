import ImgAbout from '../../assets/About.png'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import './About.scss'

function About() {
  return (
    <div>
      <Banner picture={ImgAbout} alt="Montagnes" />
      <div className="CollapsesContainer">
        <Collapse title="Fiabilité" />
        <Collapse
          title="Respect"
          info="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        ></Collapse>
        <Collapse title="Service" info="" />
        <Collapse title="Sécurité" info="" />
      </div>
    </div>
  )
}

export default About
