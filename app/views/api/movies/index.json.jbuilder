# json.array! @movies do |movie|
#   json.video_url movie.video_url 
#   json.image_url movie.image_url 
#   json.title movie.title 
#   json.year movie.year 
#   json.seasons movie.seasons 
#   json.director movie.director 
#   json.cast movie.cast 
#   json.writers movie.writers 
#   json.genres movie.genres 
#   json.maturity_rating movie.maturity_rating 
#   json.description movie.description 
#   json.likes movie.likes 
#   json.merge! hash
# end

@movies.each do |movie|
  json.set! movie.id do
    json.partial! 'api/movies/movie', movie: movie
  end
end
