import { useState } from 'react'
import logofooter from '../assets/logo-footer.webp'
import whatsap from '../assets/whatsapp-footer.webp'
import ModalLegal from './ModalLegal'
import legal from '../data/dataLegal'
import ig from '../assets/ig.webp'
import youtube from '../assets/youtube.webp'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const [lgShow, setLgShow] = useState(false)
  const [currentLegalInfo, setCurrentLegalInfo] = useState(null)
  const phoneNumber = '34676511291'
  const message = t('footer.whatsapp_mensaje')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  const legalData = legal(t)

  return (
    <div className="container-footer">
      <img
        style={{ width: '158px' }}
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
              alt="logotipo de la red social Whatsapp"
              loading="lazy"
            />
          </a>
          <a href="#">
            <img
              style={{ width: '30px' }}
              src={ig}
              alt="logotipo de instagram"
              loading="lazy"
            />
          </a>
          <a href="#">
            <img
              style={{ width: '35px' }}
              src={youtube}
              alt="logotipo de youtube"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="footer-contacto">
        {legalData.map((cadalegal, index) => (
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
