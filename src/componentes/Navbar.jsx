import logo2 from '../assets/logo2.webp'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()

  return (
    <nav className="nav">
      <img
        style={{ width: '300px' }}
        src={logo2}
        alt="Logo María Latorre Feng Shui"
      />

      <div className="container-btn-nav">
        <a href="#soy">
          <button className="btn-nav">{t('navbar.quien')}</button>
        </a>
        <a href="#servicios">
          <button className="btn-nav">{t('navbar.servicios')}</button>
        </a>
        <Link to={'/contacto'}>
          <button className="btn-nav">{t('navbar.contacto')}</button>
        </Link>
      </div>

      <div className="container-leng">
        <button
          onClick={() => {
            i18n.changeLanguage('en')
            localStorage.setItem('idioma', 'en')
          }}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage('es')
            localStorage.setItem('idioma', 'es')
          }}
          aria-label="Cambiar a Español"
        >
          ES
        </button>
      </div>
    </nav>
  )
}

export default Navbar
