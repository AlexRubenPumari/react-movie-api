import Result from './Result.jsx'
import { getYear } from '../logic/utils.js'

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
  return results.map(result => (
    <Result key={result.id} pathImg={result.poster_path} hasImg>
      {`${result.title} (${getYear(result.release_date)})`}
    </Result>
  ))
}
