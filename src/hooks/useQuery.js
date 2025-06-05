import { useState, useEffect } from 'react'
import getMovies from '../services/movies.js'

export function useQuery () {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {
    if (query === '') return

    getMovies({ query })
      .then(results => setResults(results.splice(0, 5)))
      .catch(err => console.error(err))
  }, [query])
  return { query, setQuery, results }
}
