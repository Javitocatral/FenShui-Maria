import { useState } from 'react'
import logofooter from '../assets/logo-footer.png'
import whatsap from '../assets/whatsapp-footer.png'
import ModalLegal from './ModalLegal'
import legal from '../data/dataLegal'
import ig from '../assets/ig-blanco.png'
import youtube from '../assets/youtube.png'

function Footer() {
  const [lgShow, setLgShow] = useState(false)
  const [currentLegalInfo, setCurrentLegalInfo] = useState(null)
  const phoneNumber = '34676511291'
  const message = '¡Hola! Quiero más información.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <div className="container-footer">
      <img
        style={{
          width: '158px',
        }}
        src={logofooter}
        alt="logotipo que pone maria latorre"
      />
      <div className="footer-contacto">
        <h5>Maria Latorre</h5>
        <a
          style={{ color: 'black' }}
          href="mailto:marialatorrefengshui@gmail.com"
        >
          marialatorrefengshui@gmail.com
        </a>
        <div className="socialmedia">
          <a href={whatsappUrl}>
            <img
              style={{ width: '30px' }}
              src={whatsap}
              alt="Icono de la red social Whatsapp"
            />
          </a>
          <a href="#">
            <img
              style={{ width: '30px' }}
              src={ig}
              alt="logotipo de instagrma una camara de fotos"
            />
          </a>
          <a href="#">
            <img
              style={{ width: '35px' }}
              src={youtube}
              alt="logotipo de youtube un play un triangulo"
            />
          </a>
        </div>
      </div>
      <div className="footer-contacto">
        {legal.map((cadalegal, index) => (
          <div key={index}>
            <button
              style={{ color: 'black', textAlign: 'left' }}
              onClick={() => {
                setLgShow(true)
                setCurrentLegalInfo(cadalegal)
              }}
            >
              {cadalegal.titulo}
            </button>
          </div>
        ))}
      </div>
      {currentLegalInfo && (
        <ModalLegal
          info={currentLegalInfo}
          lgShow={lgShow}
          setLgShow={setLgShow}
        />
      )}
    </div>
  )
}

export default Footer
