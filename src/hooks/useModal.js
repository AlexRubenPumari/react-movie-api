import { useState } from 'react'

export function useModal () {
  const [modal, setModal] = useState(null)
  const openModal = value => setModal(value)
  const closeModal = () => setModal(null)

  return { modal, openModal, closeModal }
}
