import '../styles/App.css'
import { useMovies } from '../hooks/useMovies'
import { ThemeProvider } from '../contexts/theme'
import { ModalProvider, ModalContext } from '../contexts/modal'
import Header from './Header'
import ListOfMovies from './ListOfMovies'
import PageManager from './PageManager'
import SearchBar from './SearchBar'
import BackgroundParticles from './BackgroundParticles'
import { useContext } from 'react'
import ModalMovie from './ModalMovie'

export default function App () {
  return (
    <ThemeProvider>
      <ModalProvider>
        <HomePage />
      </ModalProvider>
      <BackgroundParticles />
    </ThemeProvider>
  )
}
function HomePage () {
  const { modal, closeModal } = useContext(ModalContext)
  const { currentPage, popularMovies, setCurrentPage } = useMovies()

  return (
    <>
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
        <ListOfMovies movies={popularMovies} />
        <PageManager
          page={currentPage}
          onPrevious={() => setCurrentPage(currentPage - 1)}
          onNext={() => setCurrentPage(currentPage + 1)}
          onBlur={e => setCurrentPage(e.target.value)}
          MIN={1}
          MAX={50}
        />
      </main>
      {modal && <ModalMovie movie={modal} onClose={() => closeModal()} />}
    </>
  )
}
