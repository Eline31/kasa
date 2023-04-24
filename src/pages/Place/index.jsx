import { useParams } from 'react-router-dom'
import PlaceImg from '../../assets/Background_component.png'

function Place() {
  const { id } = useParams()
  return (
    <div>
      <section>
        <img src={PlaceImg} alt="Intérieur d'un logement" />
        <h1>Titre</h1>
        <p>Location</p>
        <p>Tags</p>
      </section>
      <section>
        <div>
          <h2>Description</h2>
          <p>description</p>
        </div>
        <div>
          <h2>Equipements</h2>
          <p>Liste des équipements</p>
        </div>
      </section>
    </div>
  )
}

export default Place
