import DEFAULT_IMG from '../assets/defaultImg32x48.jpg'
import { PREFIX_URL_IMG_92 } from '../config/constants.js'

export default function Result ({ children, onClick, posterPath }) {
  const path = posterPath
    ? `${PREFIX_URL_IMG_92}${posterPath}`
    : DEFAULT_IMG
  return (
    <li
      className={`result ${!posterPath ? 'simple' : ''}`}
      onMouseDown={onClick}
    >
      {posterPath && <img src={path} alt={children} className='result__img' />}
      {children}
    </li>
  )
}
