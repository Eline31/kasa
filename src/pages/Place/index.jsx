import { useParams } from 'react-router-dom'
// import PlaceImg from '../../assets/Background_component.png'
import Carrousel from '../../components/Carrousel'
import styled from 'styled-components'
import data from '../../data/data.json'

const ComponentContainer = styled.div``

function Place() {
  const { id } = useParams()
  console.log(id)
  const dataPlace = data.find((place) => {
    if (place.id === id) {
      return { place }
    } else {
      return "Aucun logement correspondant à cet ID n'a été trouvé"
    }
  })
  console.log(dataPlace)

  return (
    <div>
      {/* {data &&
        data.map((place) => ( */}
      <>
        <section>
          <ComponentContainer>
            {dataPlace.pictures &&
              dataPlace.pictures.map((picture, index) => (
                <Carrousel key={`${picture}-${index}`} picture={picture} />
              ))}
          </ComponentContainer>
          <h1>{dataPlace.title}</h1>
          <p>{dataPlace.location}</p>
          {dataPlace.tags &&
            dataPlace.tags.map((tag, index) => (
              <ul>
                <li key={`${tag}-${index}`}>{tag}</li>
              </ul>
            ))}
        </section>
        <section>
          <div>
            <h2>Description</h2>
            <p>{dataPlace.description}</p>
          </div>
          <div>
            <h2>Equipements</h2>
            {dataPlace.equipments &&
              dataPlace.equipments.map((equipment, index) => (
                <ul>
                  <li key={`${equipment}-${index}`}>{equipment}</li>
                </ul>
              ))}
          </div>
        </section>
      </>
      {/* ))} */}
    </div>
  )
}

export default Place
