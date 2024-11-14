import logo from '../assets/logo.png'
function Footer() {
  return (
    <div className="container-footer">
      <img
        style={{
          width: '100px',
        }}
        src={logo}
        alt="logotipo que pone maria la torre"
      />
      <div>
        <h4>Maria La Torre</h4>
        <h4>Email: merydetower@vivoencatral.com</h4>
        <h4>Tlf: 444-555-888</h4>
      </div>
      <div>
        <h5>Avido legal</h5>
        <h5>Politica de privacidad</h5>
        <h5>Politica de cookies</h5>
      </div>
    </div>
  )
}

export default Footer
