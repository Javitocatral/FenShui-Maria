import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join } from 'path'

const carpeta = './src/assets'

const imagenesServicios = [
  'salon2',
  'cocina',
  'dormitorio',
  'cafeteria',
  'flores',
  'oficina',
  'escritorio',
  'rincon',
]

const imagenesCards = ['salon', 'tienda-ropa', 'comedor']
const imagenesGrandes = ['home', 'ventanas', 'casa-cool', 'casa-cool2']

readdirSync(carpeta)
  .filter((f) => f.match(/\.(jpg|jpeg|png)$/i))
  .forEach((file) => {
    const nombre = file.replace(/\.(jpg|jpeg|png)$/i, '')

    let width, quality

    if (nombre === 'maria') {
      width = 1400
      quality = 85
    } else if (imagenesGrandes.includes(nombre)) {
      width = 1920
      quality = 65
    } else if (imagenesCards.includes(nombre)) {
      width = 800
      quality = 60
    } else if (imagenesServicios.includes(nombre)) {
      width = 1000
      quality = 55
    } else {
      width = 800
      quality = 70
    }

    sharp(join(carpeta, file))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(join(carpeta, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
      .then(() =>
        console.log(`✅ ${file} → ${width}px webp (calidad ${quality})`)
      )
  })
