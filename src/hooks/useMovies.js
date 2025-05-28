import { useState, useEffect } from 'react'
import getMovies from '../services/movies'

export function useMovies () {
  const [currentPage, setCurrentPage] = useState(1)
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    getMovies({ currentPage })
      .then(movies => setPopularMovies(movies))
      .catch(error => console.log(error))
  }, [currentPage])

  return { currentPage, popularMovies, setCurrentPage }
}
