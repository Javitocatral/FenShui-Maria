import Modal from 'react-bootstrap/Modal'

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
              <div>
                <button
                  className="btn-nav"
                  style={{
                    width: '33%',
                  }}
                >
                  Ponte en contacto conmigo y lo valoramos
                </button>
                <button onClick={() => setShow(false)}>X</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalHogar
