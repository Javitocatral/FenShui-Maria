import { useState } from 'react'
import ModalHogar from './ModalHogar'

function Card({ estudio, text, img, popup }) {
  const [show, setShow] = useState(false)
  const handleOpen = () => {
    setShow(true)
  }
  return (
    <div className="container-card" style={{ marginBottom: '20px' }}>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="contete-card">
        <h3> {estudio} </h3>
        <p>{text}</p>
        <button className="btn-nav" onClick={handleOpen}>
          {' '}
          Quiero saber más
        </button>
      </div>
      <ModalHogar popup={popup} show={show} setShow={setShow} />
    </div>
  )
}

export default Card
