export const fetchWatchList = (movies) => {
  debugger;
  return $.ajax({
    url: `api/watch_lists`,
    method: 'GET',
    data: { movies }
  })
}

export const addWatchList = (movie) => {
  return $.ajax({
    url: '/api/watch_lists',
    method: 'POST',
    data: { movie }
  })
}

export const removeWatchList = (movieId) => {
  return $.ajax({
    url: `/api/watch_lists/${movieId}`,
    method: 'DELETE'
  })
}