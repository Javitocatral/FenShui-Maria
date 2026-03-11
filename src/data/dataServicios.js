import salon from '../assets/salon.webp'
import tienda from '../assets/tienda-ropa.webp'
import comedor from '../assets/comedor.webp'
import salon2 from '../assets/salon2.webp'
import cocina from '../assets/cocina.webp'
import dormitorio from '../assets/dormitorio.webp'
import cafeteria from '../assets/cafeteria.webp'
import flores from '../assets/flores.webp'
import oficina from '../assets/oficina.webp'
import escritorio from '../assets/escritorio.webp'
import rincon from '../assets/rincon.webp'

const dataServicios = (t) => [
  {
    titulo: t('servicios.hogar_titulo'),
    descripcion: t('servicios.hogar_desc'),
    img: salon,
    tipo: 'hogar',
    popUp: {
      titulo: t('servicios.hogar_popup_titulo'),
      descripcion: t('servicios.hogar_popup_desc'),
      img1: salon2,
      img2: cocina,
      img3: dormitorio,
    },
  },
  {
    titulo: t('servicios.empresa_titulo'),
    descripcion: t('servicios.empresa_desc'),
    img: tienda,
    tipo: 'hogar',
    popUp: {
      titulo: t('servicios.empresa_popup_titulo'),
      descripcion: t('servicios.empresa_popup_desc'),
      img1: cafeteria,
      img2: flores,
      img3: oficina,
    },
  },
  {
    titulo: t('servicios.shopper_titulo'),
    descripcion: t('servicios.shopper_desc'),
    img: comedor,
    tipo: 'shopper',
    popUp: {
      titulo: t('servicios.shopper_popup_titulo'),
      descripcion: t('servicios.shopper_popup_desc'),
      img1: escritorio,
      img2: rincon,
      img3: dormitorio,
    },
  },
]

export default dataServicios
