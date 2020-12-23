# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo_user = User.new(email: 'demo@email.com', password: 'demo@email.com')

demo_watch = WatchList.new(user_id: 1, movie_id: 1)

#Featured Movie
sonic = Movie.new(title: 'Sonic the Hedghog', year: 2020, director: 'Jeff Fowler', cast: 'Jim Carrey, Ben Schwartz, Javes Marsden', writers: 'Josh Miller, Patrick Casey, Oren Uziel', genres: 'feature', maturity_rating: 'PG', description: 'A cop in the rural town of Green Hills will help Sonic escape from the government who is looking to capture him.', likes: 0, image_url: 'https://static.techspot.com/images2/news/bigimage/2019/03/2019-03-05-image.jpg', video_url: 'https://vimeo.com/372833024')

#Critically Acclaimed

lobster = Movie.new(title: 'The Lobster', year: 2015, director: 'Yorgos Lanthimos', cast: 'Colin Farrell, Rachel Weisz, Jessica Barden', writers: 'Yorgos Lanthimos, Efthymis Filippou', genres: 'Critically Acclaimed', maturity_rating: 'R', description: 'In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.', likes: 0, image_url: 'https://occ-0-999-1009.1.nflxso.net/art/9392d/3a82ef424390526af024ad9aeb7ee3cd94a9392d.jpg', video_url: 'https://vimeo.com/150841149')

her = Movie.new(title: 'Her', year: 2013, director: 'Spike Jonze', cast: 'Joaquin Phoenix, Amy Adams, Scarlett Johansson', writers: 'Spike Jonze', genres: 'Critically Acclaimed', maturity_rating: 'R', description: 'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.', likes: 0, image_url: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABZtisIWyFl9Eu5NcL2eLGpgMI87r9ngPk_54XTOc6HXMPBDtROGIWe-EV-PJ1gnME-DSFP-GlR7uhe_PK7DvOdOLKusuB22VLw.jpg?r=103', video_url: 'https://vimeo.com/385124921')

taxi = Movie.new(title: 'Taxi Driver', year: 1976, director: 'Martin Scorsese', cast: 'Robert De Niro, Jodie Foster, Cybill Shepherd', writers: 'Paul Schrader', genres: 'Critically Acclaimed', maturity_rating: 'R', description: 'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.', likes: 0, image_url: 'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcT9cvj6t4TA4PSf2YGwivYAfgL5vzQaLWyh08tdwEDioKEEfkHamWY1m9bXO2F47p9g2cwl7er13UCgzrZ46TwQCBtX.jpg?r=08f', video_url: 'https://vimeo.com/296685716')

rain = Movie.new(title: 'Rain Man', year: 1988, director: 'Barry Levison', cast: 'Dustin Hoffman, Tom Cruise, Valeria Golino', writers: 'Barry Morrow, Ronald Bass', genres: 'Critically Acclaimed', maturity_rating: 'R', description: "Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.", likes: 0, image_url: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABZSZUgbG8EtQX-DXZuuMWN6u6nknX-i1RBMNN9a5CoNMlG9zsWpp_Sr4_fxNtwF-gXVjOKWvQpv-0i_tapNJlIqOfCsW.jpg?r=f97', video_url: 'https://www.youtube.com/watch?v=mlNwXuHUA8I')

informant = Movie.new(title: 'The Informant!', year: 2009, director: 'Steven Soderbergh', cast: 'Matt Damon, Tony Hale, Patton Oswalt', writers: 'Scott Z. Burns, Kurt Eichenwald', genres: 'Critically Acclaimed', maturity_rating: 'R', description: 'The U.S. government decides to go after an agro-business giant with a price-fixing accusation, based on the evidence submitted by their star witness, vice president-turned-informant Mark Whitacre.', likes: 0, image_url: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABbzDvqxOGYyYmV1HBLDd4gW_kHi2aJjAzZ83MGXKQYfS76aBFvO429atfkA_togX9udhFEbZId7MLB-CfM4q_1kiOhD_.jpg?r=d3e', video_url: 'https://www.youtube.com/watch?v=3SooBX1-kIQ')

boyhood = Movie.new(title: 'Boyhood', year: 2014, director: 'Richard Linklater', cast: 'Ellar Coltrane, Patricia Arquette, Ethan Hawke', writers: 'Richard Linklater', genres: 'Critically Acclaimed', maturity_rating: 'R', description: 'The life of Mason, from early childhood to his arrival at college.', likes: 0, image_url: 'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABchrn0nz9ZVL-zKIixmgXbY6Fiz9BLU2Ua-OPWaUEPksR-sHJ3o7y9-AcrEKpiBvTuGEUnjxK8NXO72H6WG4WhQ8Rtj62AsaMQ.jpg?r=8f1', video_url: 'https://vimeo.com/97864448')

#Drama
fifty = Movie.new(title: '50/50', year: 2011, director: 'Jonathan Levine', cast: 'Joseph Gordon-Levitt, Seth Rogen, Anna Kendrick', writers: 'Jonathan Levine', genres: 'Drama', maturity_rating: 'R', description: 'Inspired by a true story, a comedy centered on a 27-year-old guy who learns of his cancer diagnosis and his subsequent struggle to beat the disease.', likes: 0, image_url: 'https://occ-0-999-1009.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABfKPL4TtYeGCNrpDKb6EkX7Z3Us78Vqm03YIt83GQo8uUVhKckMmAEtBQIEVt5LCtzY0psEWEKvN_aseZYee1Ev4wdI5aQHKI4jsRYGwhKMahfUSzaXtfzUW2Z0ceTtqlmWgabD5Rzs.jpg', video_url: 'https://vimeo.com/29918959')

theory = Movie.new(title: 'The Theory of Everything', year: 2014, director: 'James Marsh', cast: 'Eddie Redmayne, Felicity Jones, Tom Prior', writers: 'Anthony McCarten, Jane Hawking', genres: 'Drama', maturity_rating: 'PG-13', description: 'A look at the relationship between the famous physicist Stephen Hawking and his wife.', likes: 0, image_url: 'https://www.flixwatch.co/wp-content/uploads/80000644.jpg', video_url: 'https://vimeo.com/106079128')

pursuit = Movie.new(title: 'The Pursuit of Happyness', year: 2006, director: 'Gabriele Muccino', cast: 'Will Smith, Thandie Newton, Jaden Smith', writers: 'Steve Conrad', genres: 'Drama', maturity_rating: 'PG-13', description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.", likes: 0, image_url: 'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/sphe-pursuit_of_happyness_2006-Full-Image_GalleryCover-en-US-1484001256987._UY500_UX667_RI_VLlDKyg2xplhPOpi73ReetPsQLmrUs3aG_TTW_.jpg', video_url: 'https://www.youtube.com/watch?v=DMOBlEcRuw8')

seventeen = Movie.new(title: 'The Edge of Seventeen', year: 2016, director: 'Kelly Fremon Craig', cast: 'Hailee Steinfeld, Haley Lu Richardson, Blake Jenner', writers: 'Kelly Fremon Craig', genres: 'Drama', maturity_rating: 'R', description: 'High-school life gets even more unbearable for Nadine when her best friend, Krista, starts dating her older brother.', likes: 0, image_url: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABRy201my-JtrmPw-DQ01VXhsQlSrcJrluO4MuGz2jKgKSoC-6ZzRDExFyLGe3EpAjnkxBcxo_Eq83qqChGLHeCCyoSvI.jpg?r=54a', video_url: 'https://vimeo.com/191109941')

pulp = Movie.new(title: 'Pulp Fiction', year: 1994, director: 'Quentin Tarantino', cast: 'John Travolta, Uma Thurman, Samuel L. Jackson', writers: 'Quentin Tarantino', genres: 'Drama', maturity_rating: 'R', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', likes: 0, image_url: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWZ8cKSafe3t8wwHZdAd1nR5dEScanqa5Q5yqp593QUB454ZuwCa00GVa1lRptPWOSNH35fYmAS7FWQbPWbIAxsgN1HO.jpg?r=fbb', video_url: 'https://vimeo.com/73604169')

dallas = Movie.new(title: 'Dallas Buyers Club', year: 2013, director: 'Jean-Marc Vallee', cast: 'Matthew McConaughey, Jennifer Garner, Jared Leto', writers: 'Craig Borten, Melisa Wallack', genres: 'Drama', maturity_rating: 'R', description: 'In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.', likes: 0, image_url: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABejBinwQ8peN1FLotiGs0F8NOP_0ojXQwepHuuUpAEA6UgtslpfDidNjQwLfAgW_4KABTCxFnQgdeJGn2b5kW72iIZyaK2i0uA.jpg?r=038', video_url: 'https://vimeo.com/192046815')

#Sci-Fi & Fantasy
star_wars = Movie.new(title: 'Star Wars: The Last Jedi', year: 2017, director: 'Rian Johnson', cast: 'Daisy Ridley, John Boyega, Mark Hamill', writers: 'Rian Johnson, George Lucas', genres: 'Sci-Fi & Fantasy', maturity_rating: 'PG-13', description: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.', likes: 0, image_url: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABbSQH2cd3-NqQdNTH4cACidBsSSPvfS0PtZtf_FjBmLT2PshAjKBmwZfK03YwDHeb-pw0x-mZKhs27z8Or5d-ZMdweFG.jpg?r=d0d', video_url: 'https://vimeo.com/237893785')

lord_of_the_rings = Movie.new(title: 'The Fellowship of the Ring', year: 2001, director: 'Peter Jackson', cast: 'Elijah Wood, Ian McKellen, Orlando Bloom', writers: ' J.R.R. Tolkien, Fran Walsh', genres: 'Sci-Fi & Fantasy', maturity_rating: 'PG-13', description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', likes: 0, image_url: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABS_IlHnwRgUgNdVFQ9MSLPfRHnDQN4Zh0V4Q1YaVUqcRNFLAOyXXryxYw-nZSgmTpDnpkQl3wokTNaK5kHChvZS02uJRy4pox3cP6hW9k87rTfzIsMAD2G1SPXGX3Jrtj3tzTLt8ANw.jpg', video_url: 'https://www.youtube.com/watch?v=V75dMMIW2B4')

maniac = Movie.new(title: 'Maniac', year: 2018, director: 'Cary Joji Fukunaga, Patrick Somerville ', cast: 'Jonah Hill, Emma Stone, Sonoya Mizuno ', writers: 'Cary Joji Fukunaga, Patrick Somerville', genres: 'Sci-Fi & Fantasy', maturity_rating: 'pg-13', description: "Two strangers are drawn to a mysterious pharmaceutical trial for a drug that will, they're assured, with no complications or side-effects whatsoever, solve all of their problems permanently. Things do not go as planned.", likes: 0, image_url: 'https://occ-0-987-990.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABUsWw38U8doqyyCxvsb4vuB7U7YTqjoVviFon57XzMrjAJxLnqzTj1-OlrRRPyeA2F-OIfi-D8OOfH9N9YqC59GtQY0MIoB_dg.jpg?r=62a', video_url: 'https://vimeo.com/284396067')

machina = Movie.new(title: 'Ex Machina', year: 2014, director: 'Alex Garland', cast: 'Alicia Vikander, Dombnail Gleeson, Oscar Isaac', writers: 'Alex Garland', genres: 'Sci-Fi & Fantasy', maturity_rating: 'R', description: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.', likes: 0, image_url: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABcVGqRJgQwhTR-asAB90uKRvHVJ4DN8RrBlM5fF32-tOwtinVvmfB6XdMA47htfzhkvJneo_rJmtbLkXjjLZjjnzX_eB.jpg?r=3b8', video_url: 'https://vimeo.com/271315243')

mother = Movie.new(title: 'I Am Mother', year: 2019, director: 'Grant Sputore', cast: 'Luke Hawker, Rose Bytrne, Maddie Lenton', writers: 'Michael Lloyd Green, Grant Sputore', genres: 'Sci-Fi & Fantasy', maturity_rating: 'TV-14', description: "In the wake of humanity's extinction, a teenage girl is raised by a robot designed to repopulate the earth. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.", likes: 0, image_url: 'https://occ-0-300-299.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTgimIBFwU4rvR2pbr4u4pQH_cMnm8_y3b-_lx7G_FRVvgWvPRt9ll_jUgUSMgN7tZNd8qTpEzbRTEhm7P_UyYo4BiloDu9vNWkOfNq3dan-V5TWgWumjuzwzbCrUA.jpg?r=803', video_url: 'https://vimeo.com/335345961')

cloverField = Movie.new(title: 'The Cloverfield Paradox', year: 2018, director: 'Julius Onah', cast: 'Gugu Mbatha-Raw, David Oyelowo, Daniel Bruhl', writers: 'Oren Uziel', genres: 'Sci-Fi & Fantasy', maturity_rating: 'PG-13', description: 'Orbiting a planet on the brink of war, scientists test a device to solve an energy crisis, and end up face-to-face with a dark alternate reality.', likes: 0, image_url: 'https://cdn.onebauer.media/one/empire-images/articles/5a77a8d20abd0a0b066a87c4/cloverfield-paradox-image.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg', video_url: 'https://vimeo.com/255844817')

#TV Comedy
the_Office = Movie.new(title: 'The Office', year: 2005, director: 'Paul Feig', cast: 'Steve Carell, Jenna Fischer, John Krasinski ', writers: 'Greg Daniels, Ricky Gervais, Stephen Merchant', genres: 'TV Comedy', maturity_rating: 'TV-14', description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.', likes: 0, image_url: 'https://i.pinimg.com/originals/98/52/80/985280b8d9904fd52d83b17433694a7a.jpg', video_url: 'https://vimeo.com/166667471')

parks_and_rec = Movie.new(title: 'Parks and Recreation', year: 2009, director: 'Dean Holland', cast: "Amy Poehler, Jim O'Heir, Nick Offerman", writers: 'Greg Daniels, Michael Schur', genres: 'TV Comedy', maturity_rating: 'TV-14', description: "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.", likes: 0, image_url: 'https://i2.wp.com/www.reviewsfire.com/wp-content/uploads/2019/01/How-to-watch-Parks-and-Recreation-on-NETFLIX-in-the-UK.jpeg?fit=1068%2C601&ssl=1', video_url: 'https://vimeo.com/19276219')

friends = Movie.new(title: 'Friends', year: 1994, director: 'Gary Halvorson', cast: 'Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Mathew Perry, David Schwimmer', writers: 'David Crane, Marta Kauffman', genres: 'TV Comedy', maturity_rating: 'TV-14', description: 'Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.', likes: 0, image_url: 'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-lmkhlh54bt5ga5ie76c2hod367-20180101150520.Medi.jpeg', video_url: 'https://www.youtube.com/watch?v=vQtveTUZrS8')

living_with_yourself = Movie.new(title: 'Living With Yourself', year: 2019, director: 'Jonathon Dayton', cast: 'Paul Rudd, Aisling Bea, Desmin Borges', writers: 'Timothy Greenberg', genres: 'TV Comedy', maturity_rating: 'TV-MA', description: 'A man undergoes an experimental treatment to improve his life, only to be replaced by a new and improved version of himself, and must fight for his wife, his career, and his very identity.', likes: 0, image_url: 'http://es.web.img3.acsta.net/newsv7/19/09/17/11/30/2195112.jpg', video_url: 'https://vimeo.com/365853997')

arrested_development = Movie.new(title: 'Arrested Development', year: 2003, director: 'Troy Miller', cast: 'Jason Bateman, Portia de Rossi, Michael Cera', writers: 'Mitchell Hurwitz, James Vallely, Abraham Higginbotham', genres: 'TV Comedy', maturity_rating: 'TV-14', description: 'Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.', likes: 0, image_url: 'https://www.cutthecord.com/wp-content/uploads/2017/11/season-5-arrested-development-netflix.jpg', video_url: 'https://vimeo.com/281028389')

good_place = Movie.new(title: 'The Good Place', year: 2016, director: 'Dean Holland', cast: 'Kristen Bell, William Jaskson Harper', writers:'Michael Schur, Andrew Law', genres: 'TV Comedy', maturity_rating: 'TV-PG', description: 'Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.', likes: 0, image_url: 'https://cdn.onebauer.media/one/media/5cc6/f4fb/388b/db6b/69b4/54d5/the-good-place-season-four.jpg?format=jpg&quality=50&width=960&height=540&ratio=16-9&resize=aspectfill', video_url: 'https://vimeo.com/199924869')

#Movie Object Saves
sonic.save
demo_watch.save

boyhood.save
informant.save
rain.save
taxi.save
her.save
lobster.save

dallas.save
pulp.save
seventeen.save
pursuit.save
fifty.save
theory.save

star_wars.save
lord_of_the_rings.save 
maniac.save 
machina.save
mother.save
cloverField.save

the_Office.save 
parks_and_rec.save 
friends.save
living_with_yourself.save 
arrested_development.save 
good_place.save


demo_user.save
