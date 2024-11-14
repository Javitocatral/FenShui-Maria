import logo from '../assets/logo.png'
import Ig from '../assets/ig.png'

function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="" />

      <div className="container-btn-nav">
        <button className="btn-nav">Quien soy</button>
        <button className="btn-nav">Servicios</button>
        <button className="btn-nav">Contacto</button>
      </div>

      <div className="container-leng">
        <a href="">
          <img
            style={{
              width: '25px',
            }}
            src={Ig}
            alt=""
          />
        </a>
        <button>EN</button>
        <button>ES</button>
      </div>
    </div>
  )
}

export default Navbar
