import '../styles/App.css'
import { useMovies } from '../hooks/useMovies'
import Header from './Header'
import PosterContainer from './PosterContainer'
import PageManager from './PageManager'
import SearchBar from './SearchBar'
import BackgroundParticles from './BackgroundParticles'
import ThemeProvider from '../contexts/theme'

export default function App () {
  const { currentPage, popularMovies, setCurrentPage } = useMovies()
  return (
    <ThemeProvider>
      <Header />
      <main className='mainContainer'>
        <SearchBar placeholder='Buscar película...' />
        <PageManager page={currentPage} updatePage={setCurrentPage} />
        <PosterContainer movies={popularMovies} />
        <PageManager page={currentPage} updatePage={setCurrentPage} />
      </main>
      <BackgroundParticles />
    </ThemeProvider>
  )
}
