import Result from './Result.jsx'
import { getYear } from '../logic/utils.js'

export default function Results ({ results }) {
  const hasResults = results.length >= 1
  return (
    <ul className='results'>
      {
        hasResults
          ? results.map(result => (
            <Result key={result.id} pathImg={result.poster_path} hasImg>
              {`${result.title} (${getYear(result.release_date)})`}
            </Result>
          ))
          : <Result>No se encontraron resultados</Result>
      }
    </ul>
  )
}
