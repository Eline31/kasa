// import { useParams } from 'react-router-dom'
// import PlaceImg from '../../assets/Background_component.png'
import Carrousel from '../../components/Carrousel'
import styled from 'styled-components'
import data from '../../data/data.json'

const ComponentContainer = styled.div``

function Place() {
  //   const { id } = useParams()
  console.log(data)
  return (
    <div>
      {data &&
        data.map((place) => (
          <>
            <section>
              <ComponentContainer>
                {place.pictures &&
                  place.pictures.map((picture, index) => (
                    <Carrousel
                      key={`${picture}-${index}`}
                      src={picture}
                      alt="Logement"
                    />
                  ))}
              </ComponentContainer>
              <h1>{place.title}</h1>
              <p>{place.location}</p>
              {place.tags &&
                place.tags.map((tag, index) => (
                  <ul>
                    <li key={`${tag}-${index}`}>{tag}</li>
                  </ul>
                ))}
            </section>
            <section>
              <div>
                <h2>Description</h2>
                <p>{place.description}</p>
              </div>
              <div>
                <h2>Equipements</h2>
                {place.equipments &&
                  place.equipments.map((equipment, index) => (
                    <ul>
                      <li key={`${equipment}-${index}`}>{equipment}</li>
                    </ul>
                  ))}
              </div>
            </section>
          </>
        ))}
    </div>
  )
}

export default Place
