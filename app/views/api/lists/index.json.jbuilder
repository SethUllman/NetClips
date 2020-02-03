
json.array! @list.each do |vid|
  json.set! :id, vid.id
  json.set! :title, vid.title
  json.set! :year, vid.year
  json.set! :director, vid.director
  json.set! :cast, vid.cast 
  json.set! :writers, vid.writers
  json.set! :genres, vid.genres
  json.set! :maturity_rating, vid.maturity_rating
  json.set! :description, vid.description
  json.set! :likes, vid.likes
  json.set! :image_url, vid.image_url
  json.set! :video_url, vid.video_url
end