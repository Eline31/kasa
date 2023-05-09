import { useState, useEffect } from 'react'
import arrow from '../../assets/arrow.png'
import './Collapse.scss'

function Collapse({ title, info }) {
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  //   const changeState = setIsOpen(!isOpen)
  // }, [isOpen])

  return (
    // <>
    //   {!isOpen ? (
    //     <div className="CollapseContainer CollapseContainer__isClosed">
    //       <button onClick={() => setIsOpen(!isOpen)}>
    //         <h2>{title}</h2>
    //         <img src={arrow} alt="afficher le contenu" />
    //       </button>
    //       {isOpen && <div>{info}</div>}
    //     </div>
    //   ) : (
    //     <div className="CollapseContainer CollapseContainer__isOpen">
    //       <button onClick={() => setIsOpen(!isOpen)}>
    //         <h2>{title}</h2>
    //         <img src={arrow} alt="cacher le contenu" />
    //       </button>
    //       {isOpen && <div>{info}</div>}
    //     </div>
    //   )}
    // </>
    <>
      <div className="CollapseContainer CollapseContainer__isClosed">
        {/* <button onClick={() => setIsOpen(!isOpen)}> */}
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
        {/* </button> */}
        {/* {isOpen && <div>{info}</div>} */}
      </div>
    </>
  )
}

export default Collapse
