import { useState } from 'react'
import salon from '../assets/salon.webp'
import mensaje from '../assets/whatsapp.webp'
import { ChevronLeft } from 'lucide-react'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'
import ModalLegal from '../componentes/ModalLegal'
import legal from '../data/dataLegal'
import { useTranslation } from 'react-i18next'

function Contacto() {
  const { t } = useTranslation()
  const [acepto, setAcepto] = useState(false)
  const [lgShow, setLgShow] = useState(false)
  const [mensaje_estado, setMensajeEstado] = useState(null)
  const [enviando, setEnviando] = useState(false)

  const [data, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: '',
  })

  const phoneNumber = '34676511291'
  const whatsappMessage = t('footer.whatsapp_mensaje')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const handleChange = (e) => {
    const { name, value } = e.target
    setDatos((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!data.nombre.trim()) {
      setMensajeEstado({ tipo: 'error', texto: t('contacto.error_nombre') })
      return
    }
    if (!data.email.trim()) {
      setMensajeEstado({ tipo: 'error', texto: t('contacto.error_email') })
      return
    }
    if (!data.descripcion.trim()) {
      setMensajeEstado({
        tipo: 'error',
        texto: t('contacto.error_descripcion'),
      })
      return
    }
    if (!acepto) {
      setMensajeEstado({ tipo: 'error', texto: t('contacto.alert_privacidad') })
      return
    }

    setEnviando(true)
    setMensajeEstado(null)

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          descripcion: data.descripcion,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMensajeEstado({ tipo: 'ok', texto: t('contacto.alert_ok') })
          setDatos({ nombre: '', email: '', telefono: '', descripcion: '' })
          setAcepto(false)
          setEnviando(false)
        },
        () => {
          setMensajeEstado({ tipo: 'error', texto: t('contacto.alert_error') })
          setEnviando(false)
        }
      )
  }

  const legalData = legal(t)

  return (
    <>
      <main className="container-contacto">
        <div className="star-contacto">
          <h1>{t('contacto.titulo')}</h1>
          <Link to={'/'}>
            <ChevronLeft size={40} color="#999999" />
          </Link>
        </div>
        <div className="content-form">
          <div style={{ width: '50%' }}>
            <img
              src={salon}
              alt="Consultoría Feng Shui para hogar en Alicante"
              loading="lazy"
            />
          </div>
          <div className="formulario">
            <form>
              <input
                type="text"
                name="nombre"
                value={data.nombre}
                onChange={handleChange}
                placeholder={t('contacto.nombre')}
              />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder={t('contacto.email')}
              />
              <input
                type="tel"
                name="telefono"
                value={data.telefono}
                onChange={handleChange}
                placeholder={t('contacto.telefono')}
              />
              <textarea
                name="descripcion"
                value={data.descripcion}
                onChange={handleChange}
                placeholder={t('contacto.duda')}
              ></textarea>
            </form>
          </div>
        </div>

        <div className="info-form">
          <div className="box-contacto">
            <a
              style={{ color: '#fd9c9b' }}
              href="mailto:marialatorrefengshui@gmail.com"
            >
              marialatorrefengshui@gmail.com
            </a>
            <a href={whatsappUrl}>
              <img
                style={{ width: '25px' }}
                src={mensaje}
                alt="Contactar por WhatsApp con María Latorre"
              />
            </a>
          </div>

          <div className="enviar">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  <input
                    type="checkbox"
                    checked={acepto}
                    onChange={() => setAcepto(!acepto)}
                  />
                  <p style={{ margin: '0', marginBottom: '2px' }}>
                    {t('contacto.acepto')}
                  </p>
                </div>

                <button
                  style={{ color: '#fd9c9b' }}
                  onClick={() => setLgShow(true)}
                >
                  {t('contacto.politica')}
                </button>

                <ModalLegal
                  key={'politica-privacidad'}
                  info={legalData[2]}
                  lgShow={lgShow}
                  setLgShow={setLgShow}
                />

                <button
                  disabled={!acepto || enviando}
                  onClick={handleSubmit}
                  className={!acepto ? 'disabled' : 'btn-nav'}
                >
                  {enviando ? '...' : t('contacto.enviar')}
                </button>
              </div>

              {mensaje_estado && (
                <p
                  style={{
                    color: mensaje_estado.tipo === 'ok' ? '#4caf50' : '#e53935',
                    fontSize: '0.9rem',
                    marginTop: '0.8rem',
                    fontWeight: '500',
                  }}
                >
                  {mensaje_estado.tipo === 'ok' ? '✅ ' : '❌ '}
                  {mensaje_estado.texto}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contacto
