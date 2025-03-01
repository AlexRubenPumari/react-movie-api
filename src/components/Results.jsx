import Result from './Result.jsx'

export default function Results ({ resultsList }) {
  function getYear (date) {
    if (date === '') return 'undefined'
    return date.slice(0, 4)
  }

  return (
    <ul className='results'>
      {resultsList.map(result => (
        <Result key={result.id} pathImg={result.poster_path}>
          {`${result.title} (${getYear(result.release_date)})`}
        </Result>
      ))}
    </ul>
  )
}
