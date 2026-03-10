import Modal from 'react-bootstrap/Modal'
import volver from '../assets/volver.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ModalHogar({ setShow, show, popup }) {
  const { t } = useTranslation()

  return (
    <Modal show={show} fullscreen={true}>
      <Modal.Body>
        <div className="services-container" style={{ height: '100vh' }}>
          <div className="image-services">
            <img src={popup.img1} alt="" loading="lazy" />
            <img src={popup.img2} alt="" loading="lazy" />
            <img src={popup.img3} alt="" loading="lazy" />
          </div>
          <div className="content-services">
            <h2>{popup.titulo}</h2>
            <p>{popup.descripcion}</p>
          </div>
          <div className="botones-services">
            <Link to={'/contacto'}>
              <button className="btn-nav" style={{ width: '100%' }}>
                {t('modal_hogar.contactar')}
              </button>
            </Link>
            <button onClick={() => setShow(false)}>
              <img style={{ width: '25px' }} src={volver} alt="volver" />
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalHogar
