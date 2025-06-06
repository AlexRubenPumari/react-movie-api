import { useEffect } from 'react'

export default function Modal ({ children, className = '', onClose }) {
  const modalClassName = `Modal__content ${className}`
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => { document.body.style.overflow = 'auto' }
  }, [])
  return (
    <div
      className='Modal__overlay'
      onClick={e => (onClose(), e.stopPropagation())}>
      <div className='Modal' onClick={e => e.stopPropagation()}>
        <div className={modalClassName}>{children}</div>
        <button className='btnCta' onClick={() => onClose()}>
          Cerrar
        </button>
      </div>
    </div>
  )
}
