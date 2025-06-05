import Poster from './Poster.jsx'

export default function ListOfMovies ({ movies }) {
  return (
    <>
      <h3 className='posterContainer__title'>Te podría interesar</h3>
      <div className='posterContainer'>
        {
          movies.map(movie => (
            <Poster
              key={movie.id}
              title={movie.title}
              pathImg={movie.poster_path}
            />
          ))
        }
      </div>
    </>
  )
}
