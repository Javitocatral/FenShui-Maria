import { useState } from 'react'
import ModalHogar from './ModalHogar'
import { useTranslation } from 'react-i18next'

function Card({ estudio, text, img, popup, tipo }) {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)

  return (
    <div className="container-card" style={{ marginBottom: '20px' }}>
      <div className="image">
        <img
          src={img}
          alt={`Servicio de ${estudio} - Feng Shui`}
          loading="lazy"
        />
      </div>
      <div className="contete-card">
        <h3>{estudio}</h3>
        <p>{text}</p>
        <button className="btn-nav" onClick={() => setShow(true)}>
          {t('card.saber_mas')}
        </button>
      </div>
      <ModalHogar popup={popup} show={show} setShow={setShow} tipo={tipo} />
    </div>
  )
}

export default Card
