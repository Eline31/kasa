import { useState } from 'react'
import arrow from '../../assets/arrow.png'
import './Collapse.scss'

function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="CollapseContainer CollapseContainer__isClosed">
        <h2 onClick={() => setIsOpen(!isOpen)}>
          {title}
          <img
            className={isOpen ? 'arrow arrow-up' : 'arrow arrow-down'}
            src={arrow}
            alt="afficher le contenu"
          />
        </h2>
        <div
          className={isOpen ? 'collapse_content' : 'collapse_content_hidden'}
        >
          {info}
        </div>
      </div>
    </>
  )
}

export default Collapse
