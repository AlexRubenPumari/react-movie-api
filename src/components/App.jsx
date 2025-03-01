import '../styles/App.css'
import { useState, useEffect } from 'react'
import { LANG_QUERY } from '../constants.js'
import PosterContainer from './PosterContainer'
import PageManager from './PageManager.jsx'
import SearchBar from './SearchBar.jsx'

export default function App () {
  const [currentPage, setCurrentPage] = useState(1)
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=ad42e8664bda3dbd31a5a27424023da8&language=${LANG_QUERY}&page=${currentPage}`
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then(data => {
        const { results } = data
        setPopularMovies(results)
      })
  }, [currentPage])
  return (
    <main className='mainContainer'>
      <SearchBar placeholder='Buscar película...' />
      <PageManager page={currentPage} updatePage={setCurrentPage} />
      <PosterContainer movies={popularMovies} />
      <PageManager page={currentPage} updatePage={setCurrentPage} />
    </main>
  )
}
