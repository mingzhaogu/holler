# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

usernames = ['lilopelekai', 'stitch626', 'pleakley', 'evilgeniusjumba']

image_urls = [
  "https://freeclipartimage.com//storage/upload/lilo-and-stitch-clip-art/lilo-and-stitch-clip-art-7.gif",
  "https://uploads.scratch.mit.edu/users/avatars/1361/0949.png",
  "https://2.bp.blogspot.com/-CtNhmCNtIqI/VsDY9PxwlLI/AAAAAAAACVo/u50tvlqikJA/s1600/pleakley12.jpg",
  "https://vignette.wikia.nocookie.net/stitchipediaalilostitch/images/f/f2/Jumba.gif/revision/latest/scale-to-width-down/350?cb=20110516163835"
]

names = ['Lilo Pelekai', 'Stitch', 'Wendy Pleakley', 'Jumba Jookiba']

4.times do |i|
  User.create(
    username: usernames[i],
    password: 'password',
    image_url: image_urls[i],
    name: names[i],
  )
end
