import Result from './Result'
import { useContext } from 'react'
import { ModalContext } from '../contexts/modal'

export default function ListOfResults ({ results, isLoading }) {
  const hasResults = results?.length >= 1 && !isLoading
  const hasNotResults = !hasResults && !isLoading
  return (
    <ul className='results'>
      {isLoading && <Result>Cargando...</Result>}
      {hasResults && <Results results={results} />}
      {hasNotResults && <Result>No se encontraron resultados</Result>}
    </ul>
  )
}
function Results ({ results }) {
  const { openModal } = useContext(ModalContext)
  return results.map(result => (
    <Result
      key={result.id}
      posterPath={result.posterPath}
      onClick={() => openModal(result)}
    >
      {`${result.title} (${result.year})`}
    </Result>
  ))
}
