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

readdirSync(carpeta)
  .filter((f) => f.match(/\.(jpg|jpeg|png)$/i))
  .forEach((file) => {
    const nombre = file.replace(/\.(jpg|jpeg|png)$/i, '')
    const calidad = imagenesServicios.includes(nombre) ? 55 : 70

    sharp(join(carpeta, file))
      .webp({ quality: calidad })
      .toFile(join(carpeta, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
      .then(() => console.log(`✅ ${file} → webp (calidad ${calidad})`))
  })
