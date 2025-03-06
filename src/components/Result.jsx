import DEFAULT_IMG from '../assets/defaultImg32x48.jpg'
import { PREFIX_URL_IMG_92 } from '../config/constants.js'

export default function Result ({ children, pathImg, hasImg }) {
  const path = pathImg ? `${PREFIX_URL_IMG_92}${pathImg}` : DEFAULT_IMG
  return (
    <li className={`result ${!hasImg ? 'simple' : ''}`}>
      {
        hasImg && (
          <img
            src={path}
            alt={children}
            className='result__img'
          />
        )
      }
      {
        children
      }
    </li>
  )
}
