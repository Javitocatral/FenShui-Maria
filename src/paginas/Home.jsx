import React from 'react'
import Navbar from '../componentes/Navbar.jsx'
import Maria from '../assets/maria.webp'
import Card from '../componentes/card.jsx'
import casa1 from '../assets/casa-cool.webp'
import casa2 from '../assets/casa-cool2.webp'
import Fadesection from '../componentes/Fadesection.jsx'
import Footer from '../componentes/Footer.jsx'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import dataServicios from '../data/dataServicios.js'

function Home() {
  const { t } = useTranslation()
  const servicios = dataServicios(t)

  return (
    <div>
      <div className="home">
        <Navbar />
        <div className="content-home">
          <h1>{t('home.hero_titulo')}</h1>
          <p>{t('home.hero_texto')}</p>
        </div>
      </div>
      <Fadesection>
        <div id="soy" className="about">
          <img src={Maria} alt="" loading="lazy" />
          <div className="content-about">
            <h2>{t('home.about_titulo')}</h2>
            <p>{t('home.about_p1')}</p>
            <p>{t('home.about_p2')}</p>
            <Link to={'/contacto'}>
              <button className="btn-nav">{t('home.hablamos')}</button>
            </Link>
          </div>
        </div>
      </Fadesection>
      <Fadesection>
        <div id="servicios" className="estudios">
          <h2>{t('home.servicios_titulo')}</h2>
          <div className="cards">
            {servicios.map((cadaServicio, index) => (
              <Card
                key={index}
                estudio={cadaServicio.titulo}
                text={cadaServicio.descripcion}
                img={cadaServicio.img}
                popup={cadaServicio.popUp}
              />
            ))}
          </div>
        </div>
      </Fadesection>
      <Fadesection>
        <div className="about" style={{ backgroundColor: '#FD9C9B' }}>
          <div className="pink-section">
            <p>{t('home.pink_p1')}</p>
            <p>{t('home.pink_p2')}</p>
          </div>
          <div className="image-pink">
            <img
              className="small-image"
              src={casa1}
              alt="casa1"
              loading="lazy"
            />
            <img
              className="normal-image"
              src={casa2}
              alt="casa2"
              loading="lazy"
            />
          </div>
        </div>
      </Fadesection>
      <Footer />
    </div>
  )
}

export default Home
