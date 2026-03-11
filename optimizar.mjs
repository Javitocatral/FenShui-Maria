import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join } from 'path'

const carpeta = './src/assets'

readdirSync(carpeta)
  .filter((f) => f.match(/\.(jpg|jpeg|png)$/i))
  .forEach((file) => {
    sharp(join(carpeta, file))
      .webp({ quality: 70 })
      .toFile(join(carpeta, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
      .then(() => console.log(`✅ ${file} → webp`))
  })
