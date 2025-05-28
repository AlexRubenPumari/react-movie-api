import '../styles/App.css'
import { useMovies } from '../hooks/useMovies'
import Header from './Header.jsx'
import PosterContainer from './PosterContainer'
import PageManager from './PageManager.jsx'
import SearchBar from './SearchBar.jsx'
import BackgroundParticles from './BackgroundParticles.jsx'

export default function App () {
  const { currentPage, popularMovies, setCurrentPage } = useMovies()
  return (
    <>
      <Header />
      <main className='mainContainer'>
        <SearchBar placeholder='Buscar película...' />
        <PageManager page={currentPage} updatePage={setCurrentPage} />
        <PosterContainer movies={popularMovies} />
        <PageManager page={currentPage} updatePage={setCurrentPage} />
      </main>
      <BackgroundParticles />
    </>
  )
}
