import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import CookieConsent from 'react-cookie-consent'
import { useState } from 'react'
import ModalLegal from './componentes/ModalLegal'
import legal from './data/dataLegal'
import { useTranslation } from 'react-i18next'

const Home = lazy(() => import('./paginas/Home'))
const Contacto = lazy(() => import('./paginas/Contacto'))

function App() {
  const { t } = useTranslation()
  const [lgShow, setLgShow] = useState(false)
  const legalData = legal(t)

  return (
    <>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Suspense>

      <ModalLegal info={legalData[1]} lgShow={lgShow} setLgShow={setLgShow} />

      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Rechazar"
        enableDeclineButton
        style={{ background: '#2B373B', fontSize: '14px' }}
        buttonStyle={{
          background: '#fd9c9b',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
        declineButtonStyle={{
          background: 'transparent',
          border: '1px solid white',
          color: 'white',
          borderRadius: '4px',
        }}
      >
        Usamos cookies para mejorar tu experiencia.{' '}
        <button
          onClick={() => setLgShow(true)}
          style={{
            color: '#fd9c9b',
            textDecoration: 'underline',
            background: 'transparent',
          }}
        >
          Más información
        </button>
      </CookieConsent>
    </>
  )
}

export default App
