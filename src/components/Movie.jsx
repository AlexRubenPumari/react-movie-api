import { useState } from 'react'
import Poster from './Poster'
import ModalMovie from './ModalMovie'

export default function Movie ({ movie }) {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <li className='Movie' onClick={() => setToggle(true)}>
        <Poster pathImg={movie.posterPath} />
        <h4 className='Movie__title'>{movie.title}</h4>
      </li>
      {toggle && <ModalMovie movie={movie} onClose={() => setToggle(false)} />}
    </>
  )
}
