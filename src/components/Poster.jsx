import defaultImage from '../assets/defaultImg220x330.jpg'

export default function Poster ({ title, pathImg }) {
  const path = pathImg ? `https://image.tmdb.org/t/p/w342${pathImg}` : defaultImage
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
