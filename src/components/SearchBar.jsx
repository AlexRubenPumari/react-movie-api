import { useState, useEffect } from 'react'
import { LANG_QUERY } from '../constants.js'
import Results from './Results.jsx'
import IconSearch from './Icons/IconSearch.jsx'

export default function SearchBar ({ placeholder }) {
  const [isFocus, setIsFocus] = useState(false)
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  const hasResults = !(results.length === 0 && query !== '')
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
    <div className={`searchBar ${query === '' ? '' : 'resultsDisplayed'}`}>
      <input
        value={query}
        className='searchBar__input'
        type='search'
        placeholder={placeholder}
        onInput={e => setQuery(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setQuery('')
          setIsFocus(false)
        }}
      />
      <IconSearch className='searchBar__icon' />
      {isFocus && (
        <button
          className='searchBar__btn'
          onClick={() => setQuery('')}
        >
          ×
        </button>
      )}
      <Results resultsList={results} hasResults={hasResults} />
    </div>
  )
}
