import { useContext } from 'react'
import { ModalContext } from '../contexts/modal'
import Poster from './Poster'

export default function Movie ({ movie }) {
  const { openModal } = useContext(ModalContext)
  return (
    <li className='Movie' onClick={() => openModal(movie)}>
      <Poster pathImg={movie.posterPath} />
      <h4 className='Movie__title'>{movie.title}</h4>
    </li>
  )
}
