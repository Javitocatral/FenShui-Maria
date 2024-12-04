import logo from '../assets/logo.png'
import Ig from '../assets/ig.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="" />

      <div className="container-btn-nav">
        <a href="#soy">
          <button className="btn-nav">Quien soy</button>
        </a>
        <a href="#servicios">
          <button className="btn-nav">Servicios</button>
        </a>
        <Link to={'/contacto'}>
          <button className="btn-nav">Contacto</button>
        </Link>
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
