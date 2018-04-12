# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

users = [
  {
    username: "lilopelekai", password: "password", name: "Lilo",
    image_url: "https://i.imgur.com/AuoaDo4.jpg",
  },
  {
    username: "stitch626", password: "password", name: "Stitch",
    image_url: "https://i.imgur.com/EDbcCZ6.jpg"
  },
  {
    username: "pleakley", password: "password", name: "Pleakley",
    image_url: "https://i.imgur.com/G2DpXn8.jpg"
  },
  {
    username: "evilgeniusjumba", password: "password", name: "Jumba",
    image_url: "https://i.imgur.com/mOBiDtq.jpg"
  },
  {
    username: "nanipelekai", password: "password", name: "Nani",
    image_url: "https://i.imgur.com/8f1cGrK.jpg"
  },
  {
    username: "davidkawena", password: "password", name: "David",
    image_url: "https://i.imgur.com/Ztraem1.jpg"
  },
  {
    username: "gantu", password: "password", name: "Gantu",
    image_url: "https://i.imgur.com/0SbO2bQ.jpg"
  },
  {
    username: "scrump", password: "password", name: "Scrump",
    image_url: "https://i.imgur.com/l8KrqH2.png"
  },
  {
    username: "iloveicecream", password: "password", name: "C}>",
    image_url: "https://i.imgur.com/fOcYWZw.png"
  },
]

users.each do |user|
  User.create!(user)
end


Conversation.destroy_all

conversations = [
  {chat_name: "Lilo, Stitch"},
  {chat_name: "Lilo, Stitch, Pleakley, Jumba"},
  {chat_name: "Lilo, Nani"},
  {chat_name: "Lilo, Stitch, Nani"},
  {chat_name: "Ohana", image_url: "https://i.imgur.com/Tb6ZJGI.png"},
  {chat_name: "Pleakley, Jumba"},
  {chat_name: "Stitch, Gantu"}
]

conversations.each do |convo|
  Conversation.create!(convo)
end


ConversationUser.destroy_all

conv_users = [
  [1, 1], [1, 2],
  [2, 1], [2, 2], [2, 3], [2, 4],
  [3, 1], [3, 5],
  [4, 1], [4, 2], [4, 5],
  [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 8],
  [6, 3], [6, 4],
  [7, 2], [7, 7],
]

conv_users.each do |entry|
  ConversationUser.create!(
    conversation_id: entry[0],
    user_id: entry[1]
  )
end


Message.destroy_all

messages = [
  {
    conversation_id: 1, sender_id: 2,
    body: "...she's touching me..."
  },
  {
    conversation_id: 1, sender_id: 1,
    body: "I'm not touching you..."
  },
  {
    conversation_id: 1, sender_id: 2,
    body: "AAAAH YOU'RE TOUCHING ME!!"
  },
  {
    conversation_id: 1, sender_id: 1,
    body: "Not touching."
  },
  {
    conversation_id: 1, sender_id: 2,
    body: "TOUCHING ME."
  },
  {
    conversation_id: 1, sender_id: 1, message_type: "Giphy",
    body: "https://media2.giphy.com/media/QmkMGTMpGELDi/200.gif?cid=e1bb72ff5ace5466667a4d644da2ca08"
  },
  {
    conversation_id: 2, sender_id: 2,
    body: "Yoo porma dissy!"
  },
  {
    conversation_id: 2, sender_id: 4,
    body: "Leave my mother out of this!"
  },
  {
    conversation_id: 2, sender_id: 2, message_type: "Giphy",
    body: "https://media2.giphy.com/media/mmD5t45gfX6U0/200.gif?cid=e1bb72ff5ace55e3656d784c4dca8a9a"
  },
  {
    conversation_id: 3, sender_id: 5,
    body: "You're such a pain!"
  },
  {
    conversation_id: 3, sender_id: 1,
    body: "So why don't you sell me and buy a rabbit instead?"
  },
  {
    conversation_id: 3, sender_id: 5,
    body: "At least a rabbit would behave better than you!"
  },
  {
    conversation_id: 3, sender_id: 1,
    body: "Go ahead then you'll be happy because it'll be smarter than me too!"
  },
  {
    conversation_id: 3, sender_id: 5,
    body: "And quieter!"
  },
  {
    conversation_id: 3, sender_id: 1,
    body: "You'll like it better because it's stinky like you!"
  },
  {
    conversation_id: 3, sender_id: 5,
    body: "I shouldn't have yelled at you..."
  },
  {
    conversation_id: 3, sender_id: 1,
    body: "We're sisters... It's our job."
  },
  {
    conversation_id: 3, sender_id: 5,
    body: "Yeah, well, from now on..."
  },
  {
    conversation_id: 3, sender_id: 1,
    body: "I like you better as a sister than a mom."
  },
  {
    conversation_id: 3, sender_id: 5,
    body: "Yeah?"
  },
  {
    conversation_id: 3, sender_id: 1,
    body: "And you like me better as a sister than a rabbit, right?"
  },
  {
    conversation_id: 6, sender_id: 3,
    body: "Oh great! He's loose!"
  },
  {
    conversation_id: 6, sender_id: 4,
    body: "His destructive programming is taking effect. He will be irresistibly drawn to large cities, where he will back up sewers, reverse street signs, and steal everyone's left shoe."
  },
  {
    conversation_id: 7, sender_id: 2,
    body: "Aloha!"
  },
  {
    conversation_id: 7, sender_id: 7,
    body: "Ah! You're vile; you're foul; you're flawed!"
  },
  {
    conversation_id: 7, sender_id: 2,
    body: "Also cute and fluffy!"
  },
  {
    conversation_id: 5, sender_id: 2, message_type: "Sticky",
    body: "https://media2.giphy.com/media/zQZsoCpu3Ipq0/200.gif?cid=e1bb72ff5acf0caa72702e55598ea62f"
  },
  {
    conversation_id: 5, sender_id: 2,
    body: "Aloha!"
  },
  {
    conversation_id: 5, sender_id: 1,
    body: "Welcome to Holler -- a messaging application based off Facebook Messenger."
  },
  {
    conversation_id: 5, sender_id: 2, message_type: "Giphy",
    body: "https://media0.giphy.com/media/I0IavIJOpDpCg/200.gif?cid=e1bb72ff5acf0b872e4e6279418eaae2"
  },
  {
    conversation_id: 5, sender_id: 2, message_type: "Giphy",
    body: "https://media2.giphy.com/media/f8YTKdAHrx9gQ/200.gif?cid=e1bb72ff5acf0b6941633249363a2ffb"
  },
  {
    conversation_id: 5, sender_id: 8, message_type: "Giphy",
    body: "https://media2.giphy.com/media/cQys4y6ESMyxq/200.gif?cid=e1bb72ff5acf0b2d4279576a63e096d8"
  },
  {
    conversation_id: 5, sender_id: 6, message_type: "Giphy",
    body: "https://media3.giphy.com/media/mQFE7siDwCrcY/200.gif?cid=e1bb72ff5acf0d33367a4d5749dee610"
  },

]

messages.each do |msg|
  Message.create!(msg)
end
