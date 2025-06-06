import { createContext } from 'react'
import { useModal } from '../hooks/useModal'

export const ModalContext = createContext()

export function ModalProvider ({ children }) {
  const { modal, openModal, closeModal } = useModal()
  return (
    <ModalContext.Provider value={{
      modal,
      openModal,
      closeModal
    }}
    >
      {children}
    </ModalContext.Provider>
  )
}
