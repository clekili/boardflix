# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'guest', password: 'password')

Category.create([
  { name: 'Snowboard' },
  { name: 'Skateboard' },
  { name: 'Surf' }])

Video.create(
  name: 'The Art of Flight',
  youtube_id: 'kh29_SERH0Y',
  description: 'The Art of FLIGHT follows Travis Rice, John Jackson, Mark Landvik, Scotty Lago, Jake Blauvelt, Nicolas Muller, Gigi Ruf, DCP and Pat Moore as they dream up new global adventures and progress the sport to unimaginable levels.')
Categorization.create(video_id: 1,
                      category_id: 1)

Video.create(
  name: 'The Fourth Phase',
  youtube_id: '2JHE2zkRfW4',
  description: 'The innovators behind the “The Art of FLIGHT,” Red Bull Media House in association with Brain Farm Cinema, provide a peek into iconic snowboarder Travis Rice’s highly-anticipated return in “The Fourth Phase.” The film’s teaser marks the first glimpse into the project, which began production in 2013 and has been kept tightly under wraps until now. ')
Categorization.create(video_id: 2,
                      category_id: 1)

Video.create(
  name: 'Perspective',
  youtube_id: 'nPuEU16P3zg',
  description: "A cinematic journey through the eyes of skateboarding's elite.")
Categorization.create(video_id: 3,
                      category_id: 2)

Video.create(
  name: 'Lust for Life',
  youtube_id: 'O-0pdaZP-bA',
  description: "There are (sub)cultures where all that matters is where you come from, what you do and what your status is. With skateboarding all of that falls away--your social class, your job, the part of town you're from--the only thing that matters is if you have enough lust for life and skateboarding to get back up and try and ride those stairs again for the 18th time.")
Categorization.create(video_id: 4,
                      category_id: 2)

Video.create(
  name: 'Little Victories',
  youtube_id: 'sJmYTYhqgXo',
  description: "'Little Victories' is a 30-minute surf film by Perry Gershkow about venturing all along the California coastline in search of wave variety, terrain, and creating little victories along the way.")
Categorization.create(video_id: 5,
                      category_id: 3)
