import { useState, useEffect } from 'react'

export default function PageManager ({ page, updatePage }) {
  function changePage (cant) {
    if (page + cant <= 0) return
    updatePage(page + cant)
  }
  function handleBlur (e) {
    const newPage = parseInt(e.target.value)
    if (!isNaN(newPage) &&
        newPage >= 1 &&
        newPage <= 50
    ) {
      updatePage(newPage)
    } else {
      setValue(page)
    }
  }
  function handleKeyUp (e) {
    if (e.key === 'Enter') e.target.blur()
  }
  function handleOnChange (e) {
    const newPage = e.target.value
    if (!isNaN(newPage) && !/[eE.,\-+\s]/.test(newPage)) {
      setValue(newPage)
    }
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
          min={1}
          max={50}
          maxLength={2}
          value={value}
          onBlur={handleBlur}
          onKeyUp={handleKeyUp}
          onInput={handleOnChange}
        />
        <span>de 50</span>
      </div>
      <button
        className='btnCta'
        onClick={() => changePage(-1)}
        disabled={page === 1}
      >
        Anterior
      </button>
      <button
        className='btnCta'
        onClick={() => changePage(1)}
        disabled={page === 50}
      >
        Siguiente
      </button>
    </section>
  )
}
