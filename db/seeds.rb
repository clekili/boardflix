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
  youtube_url: 'https://goo.gl/6P9poz',
  description: 'The Art of FLIGHT follows Travis Rice, John Jackson, Mark Landvik, Scotty Lago, Jake Blauvelt, Nicolas Muller, Gigi Ruf, DCP and Pat Moore as they dream up new global adventures and progress the sport to unimaginable levels.')
Categorization.create(video_id: 1,
                      category_id: 1)

Video.create(
  name: 'The Fourth Phase',
  youtube_url: 'https://goo.gl/t4OgE8',
  description: 'The innovators behind the “The Art of FLIGHT,” Red Bull Media House in association with Brain Farm Cinema, provide a peek into iconic snowboarder Travis Rice’s highly-anticipated return in “The Fourth Phase.” The film’s teaser marks the first glimpse into the project, which began production in 2013 and has been kept tightly under wraps until now. ')
Categorization.create(video_id: 2,
                      category_id: 1)
