import { useState, useEffect } from 'react'
import { LANG_QUERY } from '../constants.js'
import Results from './Results.jsx'
import IconSearch from './Icons/IconSearch.jsx'

export default function SearchBar ({ placeholder }) {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ad42e8664bda3dbd31a5a27424023da8&query=${query}&include_adult=true&language=${LANG_QUERY}&page=1`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const { results } = data
        setResults(results.splice(0, 4))
      })
      .catch(err => console.error(err))
  }, [query])

  return (
    <div
      className={`searchBar ${query === '' ? '' : 'resultsDisplayed'}`}
    >
      <input
        className='searchBar__input'
        type='search'
        placeholder={placeholder}
        onInput={e => setQuery(e.target.value)}
      />
      <IconSearch className='searchBar__icon' />
      <Results resultsList={results} hasResults={!(results.length === 0 && query !== '')} />
    </div>
  )
}
