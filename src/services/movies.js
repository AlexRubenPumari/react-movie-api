import { LANG_QUERY } from '../config/constants'

export default function getMovies ({ currentPage }) {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=ad42e8664bda3dbd31a5a27424023da8&language=${LANG_QUERY}&page=${currentPage}`
  return fetch(url)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
    })
    .then(data => data.results)
}
