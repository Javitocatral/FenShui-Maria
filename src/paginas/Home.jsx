import React from 'react'
import Navbar from '../componentes/Navbar.jsx'
import Maria from '../assets/maria.webp'
import Card from '../componentes/Card.jsx'
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
    <main>
      <section className="home">
        <Navbar />
        <h1 className="sr-only">
          Consultoría Feng Shui en Alicante - María Latorre - Hogar y Negocio
        </h1>
        <div className="content-home">
          <h2>{t('home.hero_titulo')}</h2>
          <p>{t('home.hero_texto')}</p>
        </div>
      </section>
      <Fadesection>
        <section id="soy" className="about">
          <img
            src={Maria}
            alt="María Latorre consultora de Feng Shui en Alicante"
            loading="lazy"
          />
          <div className="content-about">
            <h2>{t('home.about_titulo')}</h2>
            <p>{t('home.about_p1')}</p>
            <p>{t('home.about_p2')}</p>
            <Link to={'/contacto'}>
              <button className="btn-nav">{t('home.hablamos')}</button>
            </Link>
          </div>
        </section>
      </Fadesection>
      <Fadesection>
        <section id="servicios" className="estudios">
          <h2>{t('home.servicios_titulo')}</h2>
          <div className="cards">
            {servicios.map((cadaServicio, index) => (
              <Card
                key={index}
                estudio={cadaServicio.titulo}
                text={cadaServicio.descripcion}
                img={cadaServicio.img}
                popup={cadaServicio.popUp}
                tipo={cadaServicio.tipo} // 👈
              />
            ))}
          </div>
        </section>
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
              alt="Salón armonizado con Feng Shui"
              loading="lazy"
            />
            <img
              className="normal-image"
              src={casa2}
              alt="Hogar con equilibrio energético Feng Shui"
              loading="lazy"
            />
          </div>
        </div>
      </Fadesection>
      <Footer />
    </main>
  )
}

export default Home
