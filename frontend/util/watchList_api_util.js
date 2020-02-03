export const fetchWatchList = () => {
  return $.ajax({
    url: `api/lists`,
    method: 'GET'
  })
}

export const createWatchList = (movie) => {
  return $.ajax({
    url: '/api/lists',
    method: 'POST',
    data: { movie }
  })
}

export const removeWatchList = (movieId) => {
  debugger;
  return $.ajax({
    url: `/api/lists/${movieId}`,
    method: 'DELETE'
  })
}