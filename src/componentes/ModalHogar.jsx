import Modal from 'react-bootstrap/Modal'
import volver from '../assets/volver.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function ModalHogar({ setShow, show, popup, tipo }) {
  const { t } = useTranslation()

  const precioTexto =
    tipo === 'shopper'
      ? t('servicios.precios_shopper')
      : t('servicios.precios_hogar')

  return (
    <Modal show={show} fullscreen={true}>
      <Modal.Body>
        <div className="services-container" style={{ height: '100vh' }}>
          <div className="image-services">
            <img
              src={popup.img1}
              alt={`Imagen del servicio ${popup.titulo}`}
              loading="lazy"
            />
            <img
              src={popup.img2}
              alt={`Ejemplo de ${popup.titulo}`}
              loading="lazy"
            />
            <img
              src={popup.img3}
              alt={`Resultado de ${popup.titulo}`}
              loading="lazy"
            />
          </div>
          <div className="content-services">
            <h2>{popup.titulo}</h2>
            <p>{popup.descripcion}</p>
          </div>
          <div className="precio-box">
            <h3
              style={{
                fontSize: '16px',
                fontWeight: '900',
                marginBottom: '5px',
                color: '#fd9c9b',
              }}
            >
              {t('servicios.precios_titulo')}
            </h3>
            <p className="precio-proceso">{t('servicios.precios_proceso')}</p>
            <strong>{t('servicios.precios_hogar_titulo')}: </strong>
            <span>{precioTexto}</span>
          </div>

          <div className="botones-services">
            <Link to={'/contacto'}>
              <button className="btn-nav" style={{ width: '100%' }}>
                {t('modal_hogar.contactar')}
              </button>
            </Link>
            <button onClick={() => setShow(false)}>
              <img
                style={{ width: '25px' }}
                src={volver}
                alt="Cerrar y volver"
              />
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalHogar
