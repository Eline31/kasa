import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import './Collapse.scss'

function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="CollapseContainer">
        <h2 onClick={() => setIsOpen(!isOpen)}>
          {title}
          <img
            className={isOpen ? 'arrow arrow__up' : 'arrow arrow__down'}
            src={arrow}
            alt={isOpen ? 'Cacher le contenu' : 'Afficher le contenu'}
          />
        </h2>
        <div className={isOpen ? 'content content__active' : 'content'}>
          {info}
        </div>
      </div>
    </>
  )
}

export default Collapse
