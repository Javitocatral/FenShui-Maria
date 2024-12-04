import salon from '../assets/salon.jpg'
import mensaje from '../assets/whatsapp.png'

function Contacto() {
  const phoneNumber = '3467651129'
  const message = '¡Hola! Quiero más información.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`
  return (
    <>
      <h1>Contacta conmigo. </h1>
      <div className="container-contacto">
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
      <div>
        <div>
          <h6>Dieccion de correo eletronico </h6>
          <a href="mailto: marialatorrefengshui@gmail.com">
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
        <div>
          <input type="checkbox" /> <p>Acepto la politica de privacidad</p>
        </div>
      </div>
    </>
  )
}

export default Contacto
