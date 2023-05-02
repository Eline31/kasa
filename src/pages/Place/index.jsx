import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import styled from 'styled-components'
import data from '../../data/data.json'
import { useState, useEffect } from 'react'
import Tag from '../../components/Tag'
import Collapse from '../../components/Collapse'
import star from '../../assets/star.png'
import fullstar from '../../assets/star-full.png'
import colors from '../../utils/style/Colors'

const PlacePresentation = styled.section`
  margin: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .publicInfo {
    width: 75%;
    h1 {
      font-size: 36px;
      margin-bottom: 0px;
    }
    p {
      font-size: 18px;
      margin: 0px 0px 10px 0px;
    }
    div {
      display: flex;
      align-content: center;
      flex-wrap: wrap;
      p {
        margin: 0px;
      }
    }
  }
  .privateInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    div:first-of-type {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 15px 0px;
      p {
        text-align: right;
        font-size: 18px;
      }
      img {
        background: ${colors.secondary};
        border-radius: 50%;
        height: 64px;
        width: 64px;
        margin-left: 20px;
      }
    }
    div:last-of-type {
      display: flex;
      flex-direction: row;
      padding: 15px 0px 0px 0px;
      img {
        margin-left: 10px;
      }
    }
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

  const name = dataPlace[0].host.name
  const rating = dataPlace[0].rating
  const description = dataPlace[0].description
  const equipments = dataPlace[0].equipments.map((equipment) => {
    return (
      <div>
        <p key={`${placeId}-${equipment}`}>{equipment}</p>
      </div>
    )
  })

  return (
    <>
      <section>
        <Carrousel pictures={imageSlider} />
      </section>
      <PlacePresentation>
        <div className="publicInfo">
          <h1>{dataPlace[0].title}</h1>
          <p>{dataPlace[0].location}</p>
          <div>
            {dataPlace[0].tags &&
              dataPlace[0].tags.map((tag, index) => (
                <Tag key={`${tag}-${index}`} tag={tag} />
              ))}
          </div>
        </div>
        <div className="privateInfo">
          <div>
            <p>{name}</p>
            <img src={dataPlace[0].host.picture} alt="Le ou la propriétaire" />
          </div>
          <div>
            <img src={rating >= 1 ? fullstar : star} alt="étoile" />
            <img src={rating >= 2 ? fullstar : star} alt="étoile" />
            <img src={rating >= 3 ? fullstar : star} alt="étoile" />
            <img src={rating >= 4 ? fullstar : star} alt="étoile" />
            <img src={rating > 4 ? fullstar : star} alt="étoile" />
          </div>
        </div>
      </PlacePresentation>
      <Details>
        <Collapse title="Description" info={description} />
        <Collapse title="Équipements" info={equipments} />
      </Details>
    </>
  )
}

export default Place
