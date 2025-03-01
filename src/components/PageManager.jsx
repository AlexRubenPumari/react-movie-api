export default function PageManager ({ page, updatePage }) {
  function changePage (cant) {
    if (page + cant <= 0) return

    updatePage(page + cant)
  }

  return (
    <section className='pageManager'>
      <p>{`Página ${page} de 50`}</p>
      <button className='btnCta' onClick={() => changePage(-1)}>
        Anterior
      </button>
      <button className='btnCta' onClick={() => changePage(1)}>
        Siguiente
      </button>
    </section>
  )
}
