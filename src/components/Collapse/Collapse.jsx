import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import './Collapse.scss'

function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {!isOpen ? (
        <div className="CollapseContainer CollapseContainer__isClosed">
          <button onClick={() => setIsOpen(!isOpen)}>
            <h2>{title}</h2>
            <img src={arrow} alt="afficher le contenu" />
          </button>
          {isOpen && <div>{info}</div>}
        </div>
      ) : (
        <div className="CollapseContainer CollapseContainer__isOpen">
          <button onClick={() => setIsOpen(!isOpen)}>
            <h2>{title}</h2>
            <img src={arrow} alt="cacher le contenu" />
          </button>
          {isOpen && <div>{info}</div>}
        </div>
      )}
    </>
  )
}

export default Collapse
