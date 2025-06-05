import { LANG_QUERY } from '../config/constants'

export default function getMovies ({ query, currentPage = 1 }) {
  const URL = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=ad42e8664bda3dbd31a5a27424023da8&query=${query}&include_adult=true&language=${LANG_QUERY}&page=${currentPage}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=ad42e8664bda3dbd31a5a27424023da8&language=${LANG_QUERY}&page=${currentPage}`

  return fetch(URL)
    .then(response => {
      if (response.status === 200) {
        return response.json()
      }
    })
    .then(data => data.results)
}
