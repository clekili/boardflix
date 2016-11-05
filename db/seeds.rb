# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'guest', password: 'password')
User.create(username: 'admin',
            password: 'password',
            is_admin: true)

Category.create([
  { name: 'Snowboard' },
  { name: 'Skateboard' },
  { name: 'Surf' }])

#### SNOWBOARD

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

##### SKATEBOARD

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

##### SURF

Video.create(
  name: 'Little Victories',
  youtube_id: 'sJmYTYhqgXo',
  description: "'Little Victories' is a 30-minute surf film by Perry Gershkow about venturing all along the California coastline in search of wave variety, terrain, and creating little victories along the way.")
Categorization.create(video_id: 5,
                      category_id: 3)

Video.create(
  name: 'The Search',
  youtube_id: '-QvdY0F15YI',
  description: "It's the driving force that lead to the creation of Rip Curl. It's all about pure Searching for Surf and enjoying the beautiful ride along the way. This clip sums up that deep rooted sense of exploration and desire and invites you in for a deeper look, for and at yourse"
)
Categorization.create(video_id: 6,
                      category_id: 3)

Video.create(
  name: 'View From A Blue Moon',
  youtube_id: 'bTqVqk7FSmY',
  description: "See the sport of surfing as it’s never been captured before in John Florence and Blake Vincent Kueny’s second signature release, in association with award-winning film studio, Brain Farm."
)
Categorization.create(video_id: 7,
                      category_id: 3)

Video.create(
  name: 'One Shot',
  youtube_id: 'kqRA5QDw42A',
  description: "ONE SHOT is a short documentary that looks into the life of Russell Ord, a West Australian, world renowned surf photographer as he embarks on a mission to capture 'one shot' that defines who he is. An inspiring journey about taking a chance, following your dreams and living a life without restrictions. You only get one shot at life…you have to live it as best you can."
)
Categorization.create(video_id: 8,
                      category_id: 3)
