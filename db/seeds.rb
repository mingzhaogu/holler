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

usernames.length.times do |i|
  User.create(
    username: usernames[i],
    password: 'password',
    image_url: image_urls[i],
    name: names[i],
  )
end

Conversation.destroy_all

4.times do |i|
  Conversation.create(
    chat_name: Faker::Dog.meme_phrase
  )
end

1.times do |i|
  Conversation.create()
end

Message.destroy_all

senders = [2, 4, 3, 4]
conversations = [3, 3, 2, 2]
body = [
  "Yoo porma dissy!",
  "Leave my mother out of this!",
  "Oh great! He's loose!",
  "His destructive programming is taking effect. He will be irresistibly drawn to large cities, where he will back up sewers, reverse street signs, and steal everyone's left shoe."
]

senders.length.times do |i|
  Message.create(
    sender_id: senders[i],
    conversation_id: conversations[i],
    body: body[i]
  )
end

ConversationUser.destroy_all

conversation = [1, 1, 2, 2, 3, 3, 3, 3]
user = [1, 2, 3, 4, 1, 2, 3, 4]

(conversation.length).times do |i|
  ConversationUser.create(
    conversation_id: conversation[i],
    user_id: user[i]
  )
end
