import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/modalLegal.css'

function ModalLegal({ lgShow, setLgShow, info }) {
  const titulo = info?.titulo || 'Título no disponible'
  const descripcion = info?.descripcion || 'Descripción no disponible'
  return (
    <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{descripcion}</Modal.Body>
    </Modal>
  )
}

export default ModalLegal
