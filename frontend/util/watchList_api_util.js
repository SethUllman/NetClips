export const fetchWatchList = () => {
  return $.ajax({
    url: `api/watch_list`,
    method: 'GET'
  })
}

export const createWatchList = (movie) => {
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