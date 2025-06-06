import Movie from './Movie'

export default function ListOfMovies ({ movies }) {
  return (
    <>
      <h3 className='posterContainer__title'>Te podría interesar</h3>
      <ul className='posterContainer'>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </ul>
    </>
  )
}
