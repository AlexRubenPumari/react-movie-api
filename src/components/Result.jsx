import DEFAULT_IMG from '../assets/defaultImg32x48.jpg'
import { PREFIX_URL_IMG_92 } from '../config/constants.js'

export default function Result ({ children, result }) {
  console.log(children, result)
  const path = result?.posterPath
    ? `${PREFIX_URL_IMG_92}${result.posterPath}`
    : DEFAULT_IMG
  return (
    <li className={`result ${!result ? 'simple' : ''}`}>
      {result && <img src={path} alt={children} className='result__img' />}
      {children}
    </li>
  )
}
