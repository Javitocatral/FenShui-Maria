import { useState } from 'react'
import salon from '../assets/salon.jpg'
import mensaje from '../assets/whatsapp.png'
import volver from '../assets/volver.png'

function Contacto() {
  const [acepto, setAcepto] = useState(false)
  const phoneNumber = '3467651129'
  const message = '¡Hola! Quiero más información.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`
  return (
    <>
      <div className="container-contacto">
        <div className="star-contacto">
          <h1>Contacta conmigo. </h1>{' '}
          <img style={{ width: '25px' }} src={volver} alt="" />
        </div>
        <div className="content-form">
          <div
            style={{
              width: '50%',
            }}
          >
            <img src={salon} alt="la imagen de un salon moderno y bonito" />
          </div>
          <div className="formulario">
            <form>
              <input type="text" placeholder="NOMBRE" />
              <input type="email" placeholder="EMAIL" />
              <input type="tel" placeholder="TELEFONO" />
              <textarea placeholder="CUAL ES TU DUDA?"></textarea>
            </form>
          </div>
        </div>
        <div className="info-form">
          <div className="box-contacto">
            <a
              style={{ color: '#fd9c9b' }}
              href="mailto: marialatorrefengshui@gmail.com"
            >
              marialatorrefengshui@gmail.com
            </a>
            <a href={whatsappUrl}>
              <img
                style={{
                  width: '25px',
                }}
                src={mensaje}
                alt="icono de la rede social un bocadillo con un telefono"
              />
            </a>
          </div>
          <div className="enviar">
            <div className="checkbox">
              <input
                onChange={() => setAcepto(!acepto)}
                value={acepto}
                type="checkbox"
              />{' '}
              <p style={{ paddingBottom: '3px' }}>
                Acepto la politica de privacidad
              </p>
            </div>
            <button
              disabled={!acepto}
              type="submit"
              className={!acepto ? 'disabled' : 'btn-nav'}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto
