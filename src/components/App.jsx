import '../styles/App.css'
import { useMovies } from '../hooks/useMovies'
import { ThemeProvider } from '../contexts/theme'
import Header from './Header'
import PosterContainer from './PosterContainer'
import PageManager from './PageManager'
import SearchBar from './SearchBar'
import BackgroundParticles from './BackgroundParticles'

export default function App () {
  const { currentPage, popularMovies, setCurrentPage } = useMovies()
  return (
    <ThemeProvider>
      <Header />
      <main className='mainContainer'>
        <SearchBar placeholder='Buscar película...' />
        <PageManager
          page={currentPage}
          onPrevious={() => setCurrentPage(currentPage - 1)}
          onNext={() => setCurrentPage(currentPage + 1)}
          onBlur={e => setCurrentPage(e.target.value)}
          MIN={1}
          MAX={50}
        />
        <PosterContainer movies={popularMovies} />
        <PageManager
          page={currentPage}
          onPrevious={() => setCurrentPage(currentPage - 1)}
          onNext={() => setCurrentPage(currentPage + 1)}
          onBlur={e => setCurrentPage(e.target.value)}
          MIN={1}
          MAX={50}
        />
      </main>
      <BackgroundParticles />
    </ThemeProvider>
  )
}
