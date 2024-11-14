import salon from '../assets/salon.jpg'
import tienda from '../assets/tienda-ropa.jpg'
import comedor from '../assets/comedor.jpg'
import salon2 from '../assets/salon2.jpg'
import cocina from '../assets/cocina.jpg'
import dormitorio from '../assets/dormitorio.jpg'
import cafeteria from '../assets/cafeteria.jpg'
import flores from '../assets/flores.jpg'
import oficina from '../assets/oficina.jpg'
import escritorio from '../assets/escritorio.jpg'
import comedor2 from '../assets/comedor2.jpg'
import rincon from '../assets/rincon.jpg'

const servicios = [
  {
    titulo: 'Estudio Feng Shui Hogar',
    descripcion:
      'A través de un plano de tu casa y con cierta información podremos acondicionarla para que te sea favorable con tus propósitos.',
    img: salon,
    popUp: {
      titulo: 'Feng Shui para tu hogar ',
      descripcion:
        'A partir de tu plano y la fecha de construcción* podremos establecer la suerte de tu casa, trabajar una serie de soluciones para que tu espacio te ayude y te de la estabilidad necesaria para conseguir lo que te propongas. O quizá solo te interesa enfocarte en una habitación o estancia, también podemos hacerlo. ',
      img1: salon2,
      img2: cocina,
      img3: dormitorio,
    },
  },
  {
    titulo: 'Estudio Feng Shui Empresas y comercios',
    descripcion:
      'Para que un negocio saque su máximo rendimiento no solo depende de su buen producto o servicio. Yo te ayudo a sacar su lado más positivo para que esté alineado y puedas conseguir tus objetivos.',
    img: tienda,
    popUp: {
      titulo: 'Feng Shui para tu negocio',
      descripcion:
        'Son muchas las variables que pueden afectar a la cuenta de resultados de una empresa o comercio. Un espacio mal armonizado es una de ellas. Tras un diagnóstico podemos averiguarlas y al menos estar seguros de que esa parte la tenemos jugando a nuestro favor.',
      img1: cafeteria,
      img2: flores,
      img3: oficina,
    },
  },
  {
    titulo: 'Personal Shopper de Hogar',
    descripcion:
      'Tras el análisis del espacio yo me puedo encargar de buscar todos los elementos que sean necesarios para armonizarlo.',
    img: comedor,
    popUp: {
      titulo: 'Personal Shopper de hogar',
      descripcion:
        'Una vez terminado el estudio a veces es complicado, o no tienes tiempo para localizar esas piezas que hemos detectado que armonizarían o ayudarían a distribuir mejor ese espacio. Quizá prefieres dejarlo en mis manos para ir a lo seguro y conjugar estilo y practicidad sin más preocupaciones.',
      img1: escritorio,
      img2: comedor2,
      img3: dormitorio,
    },
  },
]
export default servicios
