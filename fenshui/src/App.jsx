import './App.css'
import Navbar from './componentes/Navbar'
import Maria from './assets/maria.png'
import Card from './componentes/card'
import dataServicios from './data/dataServicios.js'
import casa1 from './assets/casa-cool.jpg'
import casa2 from './assets/casa-cool2.jpg'
import Fadesection from './componentes/Fadesection.jsx'
import Footer from './componentes/footer.jsx'

function App() {
  return (
    <>
      <div className="container">
        <div className="home">
          <Navbar />
          <div className="content-home">
            <h1>Tu espacio puede ser tu aliado </h1>
            <p>
              Tanto tu hogar como tu espacio de trabajo puede ofrecerte la
              suerte que necesitas o todo lo contrario, yo te ayudo a conocerlo
              y armonizarlo.
            </p>
          </div>
        </div>
        <Fadesection>
          <div className="about">
            <img src={Maria} alt="" />
            <div className="content-about">
              <h2>Acerca de mí </h2>
              <p>
                Cuando descubrí el Feng Shui comencé a encajar todas las piezas,
                hay mucho de sentido común en sus premisas y aplicándolas
                podemos cambiar a mejor el rumbo de nuestra vida”
              </p>
              <p>
                Soy María Latorre, siempre me he dedicado a la comunicación
                mientras era consciente de que hay un plano de energía que nos
                rodea que puede beneficiarnos o no. Decidí estudiarlo para poder
                mejorar mi vida y ahora ya es mi modo de vida.
              </p>
              <button className="btn-nav">¿Hablamos?</button>
            </div>
          </div>
        </Fadesection>
        <Fadesection>
          <div className="estudios">
            <h2>Lo que puedo hacer por ti</h2>
            <div className="cards">
              {dataServicios.map((cadaServicio) => {
                return (
                  <Card
                    estudio={cadaServicio.titulo}
                    text={cadaServicio.descripcion}
                    img={cadaServicio.img}
                    popup={cadaServicio.popUp}
                  />
                )
              })}
            </div>
          </div>
        </Fadesection>
        <Fadesection>
          <div
            className="about"
            style={{
              backgroundColor: '#FD9C9B',
            }}
          >
            <div className="pink-section">
              <p>
                Consigue la mejor versión de tu espacio. Tu espacio tiene mucho
                que decirte y que te apoye o no en tu vida es algo a lo que
                puedes optar.
              </p>
            </div>
            <div className="image-pink">
              <img className="small-image" src={casa1} alt="casa1" />
              <img className="normal-image" src={casa2} alt="casa2" />
            </div>
          </div>
        </Fadesection>
        <Fadesection>
          <div className="estudios" style={{ flexDirection: 'row' }}>
            <div className="dicen">
              <h2>Que dicen de mi trabajo</h2>
            </div>
            <div className="opinion">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident blanditiis et explicabo dignissimos veniam quas culpa
                exercitationem, voluptas iste nemo vel aut distinctio similique
                voluptatibus optio a ipsum quos. Ipsum.
              </p>
              <h5>Maria Garcia</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                qui corporis deleniti voluptatum. Maxime nihil hic architecto
                sequi nesciunt impedit? Nisi possimus repudiandae quaerat neque
                fugiat cumque, esse dolorum iure.
              </p>
              <h5>Pedro Perez</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                recusandae quae aperiam maxime sit velit tempora, corporis alias
                quaerat perspiciatis nostrum blanditiis in itaque impedit quidem
                saepe quas, maiores consequatur.
              </p>
              <h5>Lidia Illan</h5>
            </div>
          </div>
        </Fadesection>
        <Footer />
      </div>
    </>
  )
}

export default App
