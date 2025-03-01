import defaultImage from '../assets/defaultImg32x48.jpg'

export default function Result ({ children, pathImg, hasImg }) {
  const path = pathImg ? `https://image.tmdb.org/t/p/w92${pathImg}` : defaultImage
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
      {children}
    </li>
  )
}
