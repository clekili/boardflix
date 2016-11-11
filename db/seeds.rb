User.create(username: 'guest', password: 'password')
User.create(username: 'admin', password: 'password', is_admin: true)
User.create(username: 'can', password: 'password')
User.create(username: 'dylan', password: 'password')
User.create(username: 'moran', password: 'password')

Category.create([
  { name: 'Snowboard' },
  { name: 'Skateboard' },
  { name: 'Surf' }])

#### SNOWBOARD

Video.create(
  name: 'BOOM!',
  youtube_id: '8z_H5wFBAbU',
  description: "Stay tuned to watch BOOM! on Red Bull TV in September 2016!\nSnowboarding is all about being outside with your friends and the feeling of absolute freedom. Boom! is the feeling you get when you or your friends land an insane or stylish trick, the feeling of getting on the first chair in the morning, the feeling of a pow slash, the feeling of connecting turns, the feeling of landing your first backflip, the feeling of strapping in for your first run - Boom! is the feeling of snowboarding.")
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: 'The Fourth Phase',
  youtube_id: '2JHE2zkRfW4',
  description: 'The innovators behind the “The Art of FLIGHT,” Red Bull Media House in association with Brain Farm Cinema, provide a peek into iconic snowboarder Travis Rice’s highly-anticipated return in “The Fourth Phase.” The film’s teaser marks the first glimpse into the project, which began production in 2013 and has been kept tightly under wraps until now. ')
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: 'Insight',
  youtube_id: 'pnQVsFwS3ak',
  description: 'Snowboard films are often born of homogeneity. It makes sense; any creative endeavor needs a theme to unite the work. Insight is a multifaceted project unified by diversity, and the title is quite literal: it is a look into the individuals, locations, and crews that comprise it. The aim is to delve into the lives of those involved, exposing the particular motivations each has to strap in—be it atop a stairset, powder field or couloir.')
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: "TAKE IT EASY",
  youtube_id: 'BjDWMSFlOVg',
  description: "Quiksilver proudly presents a full length snowboard movie featuring Danimals, Johnny Brady, Ian Hart, Teo Konttinen and Zebbe Landmark, with cameos from Travis Rice, Bryan Fox, Will Lavigne, Ulrik Badertscher, Kim Rune Hansen and Jake OE. This crew took to filming around the world from the streets of Helsinki Finland to the vast backcountry of Whistler British Columbia. Capturing the action to get you hyped for the upcoming winter season. ")
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: 'The Art of Flight',
  youtube_id: 'kh29_SERH0Y',
  description: 'The Art of FLIGHT follows Travis Rice, John Jackson, Mark Landvik, Scotty Lago, Jake Blauvelt, Nicolas Muller, Gigi Ruf, DCP and Pat Moore as they dream up new global adventures and progress the sport to unimaginable levels.')
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: 'The Search for Perfection',
  youtube_id: 'tXpXHoDKL64',
  description: 'Explore Japan with GoPro athletes John Jackson and Chris Benchetler as they seek to find a moment of perfection in the snow. Follow the journey from the bustling city of Tokyo, to the rural beauty in Hakuba, and finally to the wintery north island of Hokkaido as they find endless fields of untracked powder.')
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: "Snowboarding : For Me",
  youtube_id: 'WUdefl_j2-8',
  description: 'From the streets of Finland to the backcountry of British Columbia, from Norway to Japan,"Snowboarding: For Me” brings to life the unique relationship between members of Oakley\'s world-class snowboarding team and the sport and lifestyle they inhabit every single day.')
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: 'STRONGER',
  youtube_id: 'CQtZRHnbPks',
  description: "Starring the best team in snowboarding, the long awaited UNION BINDING COMPANY team movie is here at last! Shot entirely with RED cameras in 4K and above, STRONGER was filmed on location from the peaks of the Alaskan alpine to the streets of Finland, and all the best spots in between. Bringing together legends, veterans, and rookies, STRONGER delivers insane snowboarding from Kazu Kokubo, Gigi Rüf, Scott Stevens, Dustin Craven, Johnny O’Connor, Phil Jacques, Travis Rice, Dan Brisse, Anto Chamberland, Bryan Iguchi, Arthur Longo & Torstein Horgmo. Buckle up tight, because a crew like this has never been assembled in a major snowboarding motion picture.")
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: 'HORGASM - A LOVE STORY',
  youtube_id: 'tSsGUJ7c3HU',
  description: "This documentary follows Torstein Horgmo during 2 years as a world famous proffessional snowboarder going about his anything but ordinary life.\n An unique film made by Tobias Froystad which gives you a insight into highs, lows, victories and defeats of proffessional snowboarder Torstein Horgmo.")
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: "That's it That's All",
  youtube_id: 'LoF6TS4lSGk',
  description: "Check out the teaser site for Travis Rice's new movie: That's It, That's All! The teaser alone is amazing! There is more coming as the movie will be undoubtedly the biggest release in years. Some of the most amazing shots look like they could have been in Planet Earth!")
Categorization.create(video_id: Video.last.id, category_id: 1)

Video.create(
  name: 'COMFORT ZONE',
  youtube_id: '7jM2OrB3kLw',
  description: "Produced & Directed by : Morgan Le Faucheur\nFilming & Editing : Evan Rouillard, Mathieu Mazuel, Morgan Le Faucheur\nMotion Design : Evan Rouillard\nArtwork : Alban Hillion, Emilie Baronnat\nMusic Supervision : Alex Nebout, Morgan Le Faucheur")
Categorization.create(video_id: Video.last.id, category_id: 1)


##### SKATEBOARD

Video.create(
  name: 'Perspective',
  youtube_id: 'nPuEU16P3zg',
  description: "A cinematic journey through the eyes of skateboarding's elite.")
Categorization.create(video_id: Video.last.id, category_id: 2)

Video.create(
  name: 'Lust for Life',
  youtube_id: 'O-0pdaZP-bA',
  description: "There are (sub)cultures where all that matters is where you come from, what you do and what your status is. With skateboarding all of that falls away--your social class, your job, the part of town you're from--the only thing that matters is if you have enough lust for life and skateboarding to get back up and try and ride those stairs again for the 18th time.")
Categorization.create(video_id: Video.last.id, category_id: 2)

Video.create(
  name: 'Element Keep Discovering',
  youtube_id: '4Vludpx9yxg',
  description: 'For Fall 2016, we are proud to introduce #ELEMENTKEEPDISCOVERING which stands for an inclusive and positive global movement motivating individuals to discover, find and learn new things in life through the avenues of skateboarding, art, music, contemporary subcultures and the outdoors.')
Categorization.create(video_id: Video.last.id, category_id: 2)

Video.create(
  name: 'We Are Blood',
  youtube_id: 'SVus4Ua1EFQ',
  description: "We Are Blood is a modern day skate epic featuring Paul Rodriguez and other top skateboarders as they travel the globe pushing the limits of what's possible on a board and four wheels while celebrating the unconditional bond created by the simple act of skateboarding. Directed by Ty Evans, We Are Blood is filmed using state-of-the-art cameras to creatively capture the most cutting-edge, progressive skating experience imaginable. Produced by Mountain Dew Green Label Films in association with Brain Farm, We Are Blood is now available for digital download. Look out for updates at http://www.WeAreBlood.com. #WeAreBlood")
Categorization.create(video_id: Video.last.id, category_id: 2)

Video.create(
  name: "The Lexus Hoverboard: It's here",
  youtube_id: 'ZwSwZ2Y0Ops',
  description: "We’ve made the impossible, possible: The Lexus Hoverboard is here.\n Visit http://amazinginmotion.com/slide to experience the entire journey, as Lexus demonstrates the desire to create enjoyment out of motion.\n The Lexus Hoverboard represents true innovation and imagination, together pushing the boundaries of technology even further.")
Categorization.create(video_id: Video.last.id, category_id: 2)

Video.create(
  name: 'The Journey Of The Beasts',
  youtube_id: 'sD65nuztKx4',
  description: "The Journey of the Beasts | A film by http://Sebastian-linda.de | http://www.titus.de/journey\n Earlier this year Titus Dresden teamriders Tom Kleinschmidt and Richard Naumertat, analog photographer and HUF teamrider Erik Groß, Thomas Meinel, David Raderecht, Christian Döbrich and Octavio Trindade, Team Titus pro rider Vladik Scholz and Julius Dittmann made their way to Bali for Sebastian Linda's new video project \"The Journey of the Beasts\".")
Categorization.create(video_id: Video.last.id, category_id: 2)

Video.create(
  name: 'BigWest SouthDown',
  youtube_id: 'nHxIL6roCZA',
  description: "It’s hard to visit places that haven’t been visited before in skateboarding, so why bother and go on a quest to look for the unknown, without even knowing if you will run into something skateable? Don’t get me wrong, I’m always down for a little adventure to the underworld, but everything is just a lot smoother when the path has been paved before. So with the Damn Am taking place at Volcom each spring in California, and having some of the European riders out there, the decision was easy to just add a couple of weeks of skateboarding to it. The promised land is big enough to offer a lot of different options.")
Categorization.create(video_id: Video.last.id, category_id: 2)

Video.create(
  name: 'Waterproof',
  youtube_id: '0iX-1NJh53A',
  description: "Phil Zwijsen's pro debut part turns skateboarding's biggest challenge into a whole lot of fun!")
Categorization.create(video_id: Video.last.id, category_id: 2)

Video.create(
  name: 'Down Under Statement',
  youtube_id: 'iUTr6CYMwSM',
  description: "The Santa Cruz Skateboards squad packed up and headed Down Under! Road life Down Under can get hectic, but the SC Team held it together and handled biz traveling across the continent putting on demo's, chasing 'roos, and shutting down spots along the way! Sometimes...skateboarding doesn't even involve skateboarding.")
Categorization.create(video_id: Video.last.id, category_id: 2)

##### SURF


Video.create(
  name: 'The Search',
  youtube_id: '-QvdY0F15YI',
  description: "It's the driving force that lead to the creation of Rip Curl. It's all about pure Searching for Surf and enjoying the beautiful ride along the way. This clip sums up that deep rooted sense of exploration and desire and invites you in for a deeper look, for and at yourself.")
Categorization.create(video_id: Video.last.id, category_id: 3)

Video.create(
  name: 'View From A Blue Moon',
  youtube_id: 'bTqVqk7FSmY',
  description: "See the sport of surfing as it’s never been captured before in John Florence and Blake Vincent Kueny’s second signature release, in association with award-winning film studio, Brain Farm.")
Categorization.create(video_id: Video.last.id, category_id: 3)

Video.create(
  name: 'One Shot',
  youtube_id: 'kqRA5QDw42A',
  description: "ONE SHOT is a short documentary that looks into the life of Russell Ord, a West Australian, world renowned surf photographer as he embarks on a mission to capture 'one shot' that defines who he is. An inspiring journey about taking a chance, following your dreams and living a life without restrictions. You only get one shot at life…you have to live it as best you can.")
Categorization.create(video_id: Video.last.id, category_id: 3)

Video.create(
  name: 'Little Victories',
  youtube_id: 'sJmYTYhqgXo',
  description: "'Little Victories' is a 30-minute surf film by Perry Gershkow about venturing all along the California coastline in search of wave variety, terrain, and creating little victories along the way.")
Categorization.create(video_id: Video.last.id, category_id: 3)

Video.create(
  name: '',
  youtube_id: '',
  description: ''
)
Categorization.create(video_id: Video.last.id, category_id: 3)

Video.all.each do |video|
  User.all.each do |user|
    body = Faker::Hipster.sentences(2).join(" ")
    rating = Faker::Number.between(1, 5)
    Comment.create(user_id: user.id, video_id: video.id, body: body, rating: rating);
  end
end
