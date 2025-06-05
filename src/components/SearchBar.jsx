import { useState } from 'react'
import { useQuery } from '../hooks/useQuery.js'
import ListOfResults from './ListOfResults.jsx'
import IconSearch from './Icons/IconSearch.jsx'

export default function SearchBar ({ placeholder }) {
  const [hasFocus, setHasFocus] = useState(false)
  const { query, setQuery, results, isLoading } = useQuery()

  return (
    <div className={`searchBar ${query === '' ? '' : 'resultsDisplayed'}`}>
      <input
        value={query}
        className='searchBar__input'
        type='search'
        placeholder={placeholder}
        onInput={e => setQuery(e.target.value)}
        onFocus={() => setHasFocus(true)}
        onBlur={() => (setQuery(''), setHasFocus(false))}
      />
      <IconSearch className='searchBar__icon' />
      {hasFocus && (
        <button
          className='searchBar__btn'
          onClick={() => setQuery('')}
        >
          ×
        </button>
      )}
      {query !== '' && (
        <ListOfResults results={results} isLoading={isLoading} />
      )}
    </div>
  )
}
