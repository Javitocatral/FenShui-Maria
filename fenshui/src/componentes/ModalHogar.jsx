import Modal from 'react-bootstrap/Modal'
import volver from '../assets/volver.png'
import { Link } from 'react-router-dom'

function ModalHogar({ setShow, show, popup }) {
  return (
    <>
      <Modal show={show}>
        <Modal.Body>
          <div className="services-container" style={{ height: '100vh' }}>
            <div className="image-services">
              <img src={popup.img1} alt="" />
              <img src={popup.img2} alt="" />
              <img src={popup.img3} alt="" />
            </div>
            <div className="content-services">
              <h2>{popup.titulo}</h2>
              <p>{popup.descripcion}</p>
            </div>
            <div className="botones-services">
              <Link to={'/contacto'}>
                <button
                  className="btn-nav"
                  style={{
                    width: '33%',
                  }}
                >
                  Ponte en contacto conmigo y lo valoramos
                </button>
              </Link>
              <button onClick={() => setShow(false)}>
                <img
                  style={{ width: '25px' }}
                  src={volver}
                  alt="volver hacia atras"
                />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalHogar
