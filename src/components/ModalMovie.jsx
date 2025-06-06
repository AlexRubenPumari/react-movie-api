import Poster from './Poster'
import Modal from './Modal'

export default function ModalMovie ({ movie, onClose }) {
  const { title, description, posterPath, year } = movie
  return (
    <Modal className='ModalMovie' onClose={onClose}>
      <h2 className='ModalMovie__title'>{`${title} (${year})`}</h2>
      <Poster pathImg={posterPath} />
      <p className='ModalMovie__desc Scrollbar'>{description}</p>
    </Modal>
  )
}
