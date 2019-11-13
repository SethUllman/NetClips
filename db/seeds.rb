# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


star_wars = Movie.new(title: 'Star Wars', year: 1234, director: 'da boi', cast: 'cast people', writers: 'writer people', genres: 'scr-fi', maturity_rating: 'pg-13', description: 'Space swords', likes: 0)
star_wars.save