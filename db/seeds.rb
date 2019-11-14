# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


star_wars = Movie.new(title: 'Star Wars: Return of the Jedi', year: 1234, director: 'da boi', cast: 'cast people', writers: 'writer people', genres: 'scr-fi', maturity_rating: 'pg-13', description: 'Space swords', likes: 0)
the_Office = Movie.new(title: 'The Office', year: 1234, director: 'da boi', cast: 'cast people', writers: 'writer people', genres: 'scr-fi', maturity_rating: 'pg-13', description: 'Space swords', likes: 0)
lord_of_the_rings = Movie.new(title: 'Lord of the Rings', year: 1234, director: 'da boi', cast: 'cast people', writers: 'writer people', genres: 'scr-fi', maturity_rating: 'pg-13', description: 'Space swords', likes: 0)
maniac = Movie.new(title: 'Maniac', year: 1234, director: 'da boi', cast: 'cast people', writers: 'writer people', genres: 'scr-fi', maturity_rating: 'pg-13', description: 'Space swords', likes: 0)
living_with_yourself = Movie.new(title: 'Living With Yourself', year: 1234, director: 'da boi', cast: 'cast people', writers: 'writer people', genres: 'scr-fi', maturity_rating: 'pg-13', description: 'Space swords', likes: 0)
parks_and_rec = Movie.new(title: 'Parks and Recreation', year: 1234, director: 'da boi', cast: 'cast people', writers: 'writer people', genres: 'scr-fi', maturity_rating: 'pg-13', description: 'Space swords', likes: 0)

star_wars.save
the_Office.save 
lord_of_the_rings.save 
maniac.save 
living_with_yourself.save 
parks_and_rec.save 
