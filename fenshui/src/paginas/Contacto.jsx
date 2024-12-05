import { useState } from 'react'
import salon from '../assets/salon.jpg'
import mensaje from '../assets/whatsapp.png'
import volver from '../assets/volver.png'
import emailjs from 'emailjs-com'

function Contacto() {
  const [acepto, setAcepto] = useState(false)
  const [data, setDatos] = useState({
    nombre: '',
    email: '',
    telefono: '',
    descripcion: '',
  })

  const phoneNumber = '3467651129'
  const message = '¡Hola! Quiero más información.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  const handleChange = (e) => {
    const { name, value } = e.target
    setDatos((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!acepto) {
      alert('Debes aceptar la política de privacidad.')
      return
    }

    emailjs
      .send(
        'service_bd2zbzw',
        'template_dkas73v',
        {
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          descripcion: data.descripcion,
        },
        'Z5aLT4y_vZsxVVo9m'
      )
      .then(
        (result) => {
          console.log('Correo enviado:', result.text)
          alert('¡Mensaje enviado correctamente!')
          setDatos({
            nombre: '',
            email: '',
            telefono: '',
            descripcion: '',
          })
        },
        (error) => {
          console.error('Error al enviar el correo:', error.text)
          alert('Hubo un problema al enviar el mensaje. Inténtalo de nuevo.')
        }
      )
  }

  return (
    <>
      <div className="container-contacto">
        <div className="star-contacto">
          <h1>Contacta conmigo.</h1>
          <img style={{ width: '25px' }} src={volver} alt="Volver" />
        </div>
        <div className="content-form">
          <div style={{ width: '50%' }}>
            <img src={salon} alt="Imagen de un salón moderno y bonito" />
          </div>
          <div className="formulario">
            <form>
              <input
                type="text"
                name="nombre"
                value={data.nombre}
                onChange={handleChange}
                placeholder="NOMBRE"
              />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="EMAIL"
              />
              <input
                type="tel"
                name="telefono"
                value={data.telefono}
                onChange={handleChange}
                placeholder="TELEFONO"
              />
              <textarea
                name="descripcion"
                value={data.descripcion}
                onChange={handleChange}
                placeholder="CUAL ES TU DUDA?"
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
                alt="Icono de la red social Whatsapp"
              />
            </a>
          </div>

          <div className="enviar">
            <div className="checkbox">
              <input
                type="checkbox"
                checked={acepto}
                onChange={() => setAcepto(!acepto)}
              />
              <p style={{ paddingBottom: '3px' }}>
                Acepto la política de privacidad
              </p>
            </div>
            <button
              disabled={!acepto}
              onClick={handleSubmit}
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
