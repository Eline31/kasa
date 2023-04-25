import ImgAbout from '../../assets/About.png'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { useState, setState } from 'react'

function About() {
  return (
    <div>
      <Banner picture={ImgAbout} alt="Montagnes" />
      <Collapse title="Equipement" info="info" />
    </div>
  )
}

export default About
