import Result from './Result.jsx'

export default function Results ({ resultsList, hasResults }) {
  function getYear (date) {
    if (date === '') return '-'
    return date.slice(0, 4)
  }
  return (
    <ul className='results'>
      {
        hasResults && (
          resultsList.map(result => (
            <Result
              key={result.id}
              pathImg={result.poster_path}
              hasImg
            >
              {`${result.title} (${getYear(result.release_date)})`}
            </Result>
          ))
        )
      }
      {
        !hasResults && <Result>No se encontraron resultados</Result>
      }
    </ul>
  )
}
