import { useState, useEffect } from 'react'
import getMovies from '../services/movies'
import { clamp } from '../logic/utils'

export function useMovies () {
  const [currentPage, setCurrentPage] = useState(1)
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    getMovies({ currentPage })
      .then(movies => setPopularMovies(movies))
      .catch(error => console.log(error))
  }, [currentPage])
  const setPage = newPage => {
    setCurrentPage(clamp({ value: parseInt(newPage), min: 1, max: 50 }))
  }
  return { currentPage, popularMovies, setCurrentPage: setPage }
}
