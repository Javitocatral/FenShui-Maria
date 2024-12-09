import logofooter from '../assets/logo-footer.png'
import whatsap from '../assets/whatsapp-footer.png'
function Footer() {
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
        alt="logotipo que pone maria la torre"
      />
      <div className="footer-contacto">
        <h4>Maria La Torre</h4>
        <a
          style={{ color: 'white' }}
          href="mailto:marialatorrefengshui@gmail.com"
        >
          marialatorrefengshui@gmail.com
        </a>
        <a href={whatsappUrl}>
          <img
            style={{ width: '25px' }}
            src={whatsap}
            alt="Icono de la red social Whatsapp"
          />
        </a>
      </div>
      <div className="footer-contacto">
        <h5>Aviso legal</h5>
        <h5>Politica de privacidad</h5>
        <h5>Politica de cookies</h5>
      </div>
    </div>
  )
}

export default Footer
