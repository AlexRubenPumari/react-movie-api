import { useState, useEffect } from 'react'
import { clamp } from '../logic/utils'

export default function PageManager ({
  page,
  onPrevious,
  onNext,
  onBlur,
  MIN,
  MAX
}) {
  const handleBlur = e => {
    const page = parseInt(value)
    if (page < MIN || page > MAX) {
      setValue(clamp({ value: page, min: MIN, max: MAX }))
    }
    onBlur(e)
  }
  const handleKeyUp = e => { e.key === 'Enter' && e.target.blur() }
  const handleOnChange = e => {
    const newPage = e.target.value
    if (isNaN(newPage) || /[eE.,\-+\s]/.test(newPage)) return

    setValue(newPage)
  }
  const [value, setValue] = useState(page)
  useEffect(() => {
    setValue(page)
  }, [page])
  return (
    <section className='pageManager'>
      <div className='pageManager__container'>
        <span>Página</span>
        <input
          className='pageManager__input'
          maxLength={2}
          value={value}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          onInput={handleOnChange}
        />
        <span>de {MAX}</span>
      </div>
      <button className='btnCta' onClick={onPrevious} disabled={page === 1}>
        Anterior
      </button>
      <button className='btnCta' onClick={onNext} disabled={page === 50}>
        Siguiente
      </button>
    </section>
  )
}
