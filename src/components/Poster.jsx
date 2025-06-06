import { PREFIX_URL_IMG_342 } from '../config/constants.js'
import DEFAULT_IMG from '../assets/defaultImg220x330.jpg'

export default function Poster ({ title, pathImg, size = 'md' }) {
  const path = pathImg ? `${PREFIX_URL_IMG_342}${pathImg}` : DEFAULT_IMG
  const imgClassName =
    `Poster__img Poster__img--${size} Poster__img--rounded-${size}`
  return (
    <div className='Poster'>
      <img className={imgClassName} src={path} alt={title} />
      <div className='Poster__shadow' />
    </div>
  )
}
