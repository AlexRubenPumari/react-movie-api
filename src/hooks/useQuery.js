import { useState, useEffect, useCallback } from 'react'
import getMovies from '../services/movies.js'
import debounce from 'just-debounce-it'

export function useQuery () {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const debouncedGetMovies = useCallback(
    debounce(query => {
      getMovies({ query })
        .then(results => setResults(results.splice(0, 5)))
        .catch(err => setIsError(err))
        .finally(() => setIsLoading(false))
    }, 2000),
    []
  )
  useEffect(() => {
    if (query === '') {
      // Clear results and cancel any pending debouncedGetMovies calls
      setResults(null)
      debouncedGetMovies.cancel()
    }
    if (query) {
      setIsLoading(true)
      setIsError(false)
      debouncedGetMovies(query)
    }
  }, [query])
  return { query, setQuery, results, isLoading, isError }
}
