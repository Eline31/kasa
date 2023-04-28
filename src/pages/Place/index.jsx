import { useParams } from 'react-router-dom'
// import PlaceImg from '../../assets/Background_component.png'
import Carrousel from '../../components/Carrousel'
import styled from 'styled-components'
import data from '../../data/data.json'
import { useState, useEffect } from 'react'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'

const ComponentContainer = styled.div``

const PlacePresentation = styled.section`
  margin: 0px 100px;
  h1 {
    font-size: 36px;
    margin-bottom: 0px;
  }
  p {
    font-size: 18px;
    margin: 10px 0px;
  }
  div {
    display: flex;
  }
`

const Details = styled.section`
  display: flex;
  margin: 0px 70px 20px 70px;
  p {
    margin: 5px 0px;
  }
`

function Place() {
  // const [currentIndex, setCurrentIndex] = useState(0)
  const [imageSlider, setImageSlider] = useState([])
  const placeId = useParams('id').id
  const dataPlace = data.filter((data) => data.id === placeId)

  useEffect(() => {
    const dataPlace = data.filter((data) => data.id === placeId)
    setImageSlider(dataPlace[0].pictures)
  }, [placeId])

  const name = dataPlace[0].host.name.split(' ')
  const rating = dataPlace[0].rating
  const description = dataPlace[0].description
  const equipments = dataPlace[0].equipments.map((equipment) => {
    return (
      <div>
        <p>{equipment}</p>
      </div>
    )
  })

  return (
    <>
      <section>
        <ComponentContainer>
          {/* {dataPlace.pictures &&
            dataPlace.pictures.map((picture, index) => ( */}
          <Carrousel pictures={imageSlider} />
          {/* ))} */}
        </ComponentContainer>
      </section>
      <PlacePresentation>
        <h1>{dataPlace[0].title}</h1>
        <p>{dataPlace[0].location}</p>
        <div>
          {dataPlace[0].tags &&
            dataPlace[0].tags.map((tag, index) => (
              <Tag key={`${tag}-${index}`} tag={tag} />
            ))}
        </div>
      </PlacePresentation>
      <Details>
        <Collapse title="Description" info={dataPlace[0].description} />
        <Collapse title="Équipements" info={equipments} />
      </Details>
    </>
  )
}

export default Place
