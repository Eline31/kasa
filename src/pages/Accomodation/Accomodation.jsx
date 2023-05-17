import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel/Carrousel'
import data from '../../data/data.json'
import Tag from '../../components/Tag/Tag.jsx'
import Collapse from '../../components/Collapse/Collapse'
import star from '../../assets/star.png'
import fullstar from '../../assets/star-full.png'
import './Accomodation.scss'
import Error from '../Error/Error'

function Accomodation() {
  const accomodationId = useParams('id').id
  const dataAccomodation = data.filter((data) => data.id === accomodationId)
  const ids = data.map((data) => data.id)

  if (!ids.includes(accomodationId)) {
    return <Error message="Le logement recherché n'existe pas." />
  }

  const name = dataAccomodation[0].host.name.split(' ')
  const rating = dataAccomodation[0].rating
  const description = dataAccomodation[0].description
  const equipments = dataAccomodation[0].equipments.map((equipment) => {
    return (
      <span key={`${accomodationId}-${equipment}`}>
        <p>{equipment}</p>
      </span>
    )
  })

  return (
    <>
      <section>
        <Carrousel pictures={dataAccomodation[0].pictures} />
      </section>
      <section className="AccomodationPresentation">
        <div className="AccomodationContent">
          <h1>{dataAccomodation[0].title}</h1>
          <p>{dataAccomodation[0].location}</p>
          <div>
            {dataAccomodation[0].tags &&
              dataAccomodation[0].tags.map((tag, index) => (
                <Tag key={`${tag}-${index}`} tag={tag} />
              ))}
          </div>
        </div>
        <div className="HostContent">
          <div>
            <div>
              <p>{name[0]}</p>
              <p>{name[1]}</p>
            </div>
            <img
              src={dataAccomodation[0].host.picture}
              alt="Le ou la propriétaire"
            />
          </div>
          <div>
            <img src={rating >= 1 ? fullstar : star} alt="étoile" />
            <img src={rating >= 2 ? fullstar : star} alt="étoile" />
            <img src={rating >= 3 ? fullstar : star} alt="étoile" />
            <img src={rating >= 4 ? fullstar : star} alt="étoile" />
            <img src={rating > 4 ? fullstar : star} alt="étoile" />
          </div>
        </div>
      </section>
      <section className="Details">
        <Collapse title="Description" info={description} />
        <Collapse title="Équipements" info={equipments} />
      </section>
    </>
  )
}

export default Accomodation
