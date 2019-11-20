export const fetchMovies = () => {
  return $.ajax({
    url: '/api/movies',
    method: 'GET'
  })
}

export const fetchMovie = movie => {
  debugger;
  return $.ajax({
    url: `/api/movies/${movie.id}`,
    method: 'GET'
  })
}