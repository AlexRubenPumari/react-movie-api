import DEFAULT_IMG from '../assets/defaultImg220x330.jpg'
import { PREFIX_URL_IMG_342 } from '../config/constants.js'

export default function Poster ({ title, pathImg }) {
  const path = pathImg ? `${PREFIX_URL_IMG_342}${pathImg}` : DEFAULT_IMG
  return (
    <div className='poster'>
      <div className='poster__imgContainer'>
        <img className='poster__img' src={path} alt={title} />
        <div className='poster__shadow' />
      </div>
      <h6 className='poster__title'>{title}</h6>
    </div>
  )
}
