### ---------------
### SEED NOTES
### - Demo User
### - Lilo & Stitch Theme:
###   > users: 1 - 10
###   > conversations: 1 - 7
### - Hamilton Theme:
###   > users: 11 - n
###   > conversations: 8 - n
### ---------------

###
### CREATE DEMO USER
###

User.destroy_all
Conversation.destroy_all
ConversationUser.destroy_all
Message.destroy_all

base_users = [
  {
    username: "demo_user", password: "password", name: "DemoUser",
    image: File.open(File.join(Rails.root, 'app/assets/images/Plumeria-Flower-Logo-Vector.png'))
  },
  {
    username: "anniegu", password: "password", name: "Annie",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/annie.jpg'))
  }
]

base_users.each do |user|
  User.create!(user)
end

###
### CREATE L&S USERS
###

user_count = User.count

demo_user = 1
annie = 2
lilo = user_count + 1
stitch = user_count + 2
pleakley = user_count + 3
jumba = user_count + 4
nani = user_count + 5
david = user_count + 6
gantu = user_count + 7
scrump = user_count + 8
icecreamguy = user_count + 9

ls_users = [
  {
    username: "lilopelekai", password: "password", name: "Lilo",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/lilo.jpg'))
  },
  {
    username: "stitch626", password: "password", name: "Stitch",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/stitch.jpeg'))
  },
  {
    username: "pleakley", password: "password", name: "Pleakley",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/pleakley.jpeg'))
  },
  {
    username: "evilgeniusjumba", password: "password", name: "Jumba",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/jumba.jpeg'))
  },
  {
    username: "nanipelekai", password: "password", name: "Nani",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/nani.jpg'))
  },
  {
    username: "davidkawena", password: "password", name: "David",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/david.jpg'))
  },
  {
    username: "gantu", password: "password", name: "Gantu",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/gantu.jpeg'))
  },
  {
    username: "scrump", password: "password", name: "Scrump",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/scrump.png'))
  },
  {
    username: "iloveicecream", password: "password", name: "C}>",
    image: File.open(File.join(Rails.root, 'app/assets/images/users/icecreamguy.png'))
  }
]

ls_users.each do |user|
  User.create!(user)
end

###
### CREATE L&S CONVERSATIONS
###

ls_conversations = [
  {chat_name: "Ohana", image: File.open(File.join(Rails.root, 'app/assets/images/Plumeria-Flower-Logo-Vector.png'))},
  {chat_name: "Lilo and Stitch"},
  {chat_name: "Stickers and GIFs"},
  {chat_name: "Lilo, Nani"},
  {chat_name: "Lilo, Stitch, Nani"},
  {chat_name: "Pleakley, Jumba"},
  {chat_name: "Gantu, Stitch"}
]

ls_conversations.each do |convo|
  Conversation.create!(convo)
end

###
### CREATE L&S CONVERSATIONUSERS
###

ls_conv_users = [
  # [conversationId, userId]
  [1, demo_user], [1, annie], [1, lilo], [1, stitch], [1, pleakley], [1, jumba], [1, nani], [1, david], [1, scrump],
  [2, demo_user], [2, lilo], [2, stitch],
  [3, demo_user], [3, lilo], [3, stitch], [3, pleakley], [3, jumba],
  [4, demo_user], [4, lilo], [4, nani],
  [5, demo_user], [5, lilo], [5, stitch], [5, nani],
  [6, demo_user], [6, pleakley], [6, jumba],
  [7, demo_user], [7, stitch], [7, gantu]
]

ls_conv_users.each do |entry|
  ConversationUser.create!(
    conversation_id: entry[0],
    user_id: entry[1]
  )
end

###
### CREATE L&S MESSAGES
###

ls_messages = [
  {
    conversation_id: 2, sender_id: stitch, message_type: "giphy",
    body: "https://media0.giphy.com/media/I0IavIJOpDpCg/200.gif?cid=e1bb72ff5acf0b872e4e6279418eaae2"
  },
  {
    conversation_id: 3, sender_id: stitch, message_type: "sticky",
    body: "https://media2.giphy.com/media/zQZsoCpu3Ipq0/200.gif?cid=e1bb72ff5acf0caa72702e55598ea62f"
  },
  {
    conversation_id: 3, sender_id: jumba, message_type: "giphy",
    body: "https://media2.giphy.com/media/mmD5t45gfX6U0/200.gif?cid=e1bb72ff5ace55e3656d784c4dca8a9a"
  },
  {
    conversation_id: 3, sender_id: pleakley, message_type: "giphy",
    body: "https://media2.giphy.com/media/cQys4y6ESMyxq/200.gif?cid=e1bb72ff5acf0b2d4279576a63e096d8"
  },
  {
    conversation_id: 4, sender_id: nani,
    body: "You're such a pain!"
  },
  {
    conversation_id: 4, sender_id: lilo,
    body: "So why don't you sell me and buy a rabbit instead?"
  },
  {
    conversation_id: 4, sender_id: nani,
    body: "At least a rabbit would behave better than you!"
  },
  {
    conversation_id: 4, sender_id: lilo,
    body: "Go ahead then you'll be happy because it'll be smarter than me too!"
  },
  {
    conversation_id: 4, sender_id: nani,
    body: "And quieter!"
  },
  {
    conversation_id: 4, sender_id: lilo,
    body: "You'll like it better because it's stinky like you!"
  },
  {
    conversation_id: 4, sender_id: nani,
    body: "I shouldn't have yelled at you..."
  },
  {
    conversation_id: 4, sender_id: lilo,
    body: "We're sisters... It's our job."
  },
  {
    conversation_id: 4, sender_id: nani,
    body: "Yeah, well, from now on..."
  },
  {
    conversation_id: 4, sender_id: lilo,
    body: "I like you better as a sister than a mom."
  },
  {
    conversation_id: 4, sender_id: nani,
    body: "Yeah?"
  },
  {
    conversation_id: 4, sender_id: lilo,
    body: "And you like me better as a sister than a rabbit, right?"
  },
  {
    conversation_id: 5, sender_id: stitch, message_type: "giphy",
    body: "https://media2.giphy.com/media/QmkMGTMpGELDi/200.gif?cid=e1bb72ff5ace5466667a4d644da2ca08"
  },
  {
    conversation_id: 5, sender_id: lilo, message_type: "giphy",
    body: "https://media0.giphy.com/media/heYtu4tcSEdJ6/200.gif?cid=e1bb72ff5acfa80b79636731455d2129"
  },
  {
    conversation_id: 6, sender_id: pleakley,
    body: "Oh great! He's loose!"
  },
  {
    conversation_id: 6, sender_id: jumba,
    body: "His destructive programming is taking effect. He will be irresistibly drawn to large cities, where he will back up sewers, reverse street signs, and steal everyone's left shoe."
  },
  {
    conversation_id: 7, sender_id: stitch,
    body: "Aloha!"
  },
  {
    conversation_id: 7, sender_id: gantu, message_type: "giphy",
    body: "https://media3.giphy.com/media/QOFQt0i5vcoSs/200.gif?cid=e1bb72ff5acfbfdd592e6753732652f4"
  },
  {
    conversation_id: 7, sender_id: stitch,
    body: "Also cute and fluffy!"
  },
  {
    conversation_id: 7, sender_id: stitch, message_type: "giphy",
    body: "https://media0.giphy.com/media/rRLj72JejzeKc/200.gif?cid=e1bb72ff5acfc0c3756a457559051bf8"
  },
  {
    conversation_id: 7, sender_id: gantu, message_type: "giphy",
    body: "https://media0.giphy.com/media/xjCKXaZeHcRqg/200.gif?cid=e1bb72ff5acfbfdd592e6753732652f4"
  },
  {
    conversation_id: 1, sender_id: stitch,
    body: "Aloha!"
  },
  {
    conversation_id: 1, sender_id: lilo,
    body: "Welcome to Holler -- a real-time messaging application inspired by Facebook Messenger and the developer's love for our ohana."
  },
  {
    conversation_id: 1, sender_id: nani,
    body: "Try creating a message using the 'paper and pencil' icon near the top of your screen."
  },
  {
    conversation_id: 1, sender_id: jumba,
    body: "If you want to test ride my evil scientific research of live chat, you can open this messaging application in an incognito browser and logging in as a different user."
  },
  {
    conversation_id: 1, sender_id: pleakley,
    body: "In addition to sending text messages, you can also send stickers and gifs (courtesy of giphy) via the 'paw' and 'gift' icons below. Emojis also work (depending on browser and device compatibility)!"
  },
  {
    conversation_id: 1, sender_id: stitch,
    body: "To the top right, you can edit the name of this conversation and change the conversation image using the 'pencil' icon. You can toggle the conversation details sidebar using the 'information' icon."
  },
  {
    conversation_id: 1, sender_id: lilo,
    body: "Feel free to play around and let me know what you think! You can contact the developer, Annie, using the Github and/or LinkedIn icons in the conversation details sidebar. Enjoy!"
  },
  {
    conversation_id: 1, sender_id: stitch, message_type: "giphy",
    body: "https://media2.giphy.com/media/f8YTKdAHrx9gQ/200.gif?cid=e1bb72ff5acf0b6941633249363a2ffb"
  },
  {
    conversation_id: 1, sender_id: scrump, message_type: "giphy",
    body: "https://media3.giphy.com/media/mQFE7siDwCrcY/200.gif?cid=e1bb72ff5acf0d33367a4d5749dee610"
  }
]

ls_messages.each do |msg|
  Message.create!(msg)
end

### ---------------

###
### CREATE H USERS
###

alexander = user_count + 1
eliza = user_count + 2
aaronburr = user_count + 3
angelica = user_count + 4
washington = user_count + 5
lafayette = user_count + 6
mulligan = user_count + 7
laurens = user_count + 8
peggy = user_count + 9
kinggeorge = user_count + 10
thomasjefferson = user_count + 11
jamesmadison = user_count + 12
philip = user_count + 13
mariareynolds = user_count + 14
jamesreynolds = user_count + 15
samuelseabury = user_count + 16
charleslee = user_count + 17
georgeeacker = user_count + 18
doctor = user_count + 19
martha = user_count + 20
sentinel = user_count + 21
dolly = user_count + 22

h_users = [
  {
    username: "alexander", password: "password", name: "Alexander Hamilton"
  },
  {
    username: "eliza", password: "password", name: "Eliza Hamilton"
  },
  {
    username: "aaronburr", password: "password", name: "Aaron Burr"
  },
  {
    username: "angelica", password: "password", name: "Angelica Schuyler"
  },
  {
    username: "washington", password: "password", name: "George Washington"
  },
  {
    username: "lafayette", password: "password", name: "Marquis de Lafayette"
  },
  {
    username: "mulligan", password: "password", name: "Hercules Mulligan"
  },
  {
    username: "laurens", password: "password", name: "John Laurens"
  },
  {
    username: "peggy", password: "password", name: "Peggy Schuyler"
  },
  {
    username: "kinggeorge", password: "password", name: "King George III"
  },
  {
    username: "thomasjefferson", password: "password", name: "Thomas Jefferson"
  },
  {
    username: "jamesmadison", password: "password", name: "James Madison"
  },
  {
    username: "philip", password: "password", name: "Philip Hamilton"
  },
  {
    username: "mariareynolds", password: "password", name: "Maria Reynolds"
  },
  {
    username: "jamesreynolds", password: "password", name: "James Reynolds"
  },
  {
    username: "samuelseabury", password: "password", name: "Samuel Seabury"
  },
  {
    username: "charleslee", password: "password", name: "Charles Lee"
  },
  {
    username: "georgeeacker", password: "password", name: "George Eacker"
  },
  {
    username: "doctor", password: "password", name: "Doctor"
  },
  {
    username: "martha", password: "password", name: "Martha"
  },
  {
    username: "sentinel", password: "password", name: "Sentinel"
  },
  {
    username: "dolly", password: "password", name: "Dolly"
  },
]

h_users.each do |user|
  User.create!(user)
end


###
### CREATE H CONVERSATIONS
###

h_conversations = [
  "Alexander Hamilton",
  "Aaron Burr, Sir",
  "My Shot",
  "Story of Tonight",
  "The Schuyler Sisters",
  "Farmer Refuted",
  "You'll Be Back",
  "Right Hand Man",
  "A Winter's Ball",
  "Helpless",
  "Satisfied",
  "The Story Of Tonight (Reprise)",
  "Wait For It",
  "Stay Alive",
  "Ten Duel Commandments",
  "Meet Me Inside",
  "That Would Be Enough",
  "Guns And Ships",
  "History Has Its Eyes On You",
  "Yorktown (The World Turned Upside Down)",
  "What Comes Next?",
  "Dear Theodosia",
  "Non-Stop",
  "What'd I Miss?",
  "Cabinet Battle #1",
  "Take A Break",
  "Say No To This",
  "The Room Where It Happens",
  "Schuyler Defeated",
  "Cabinet Battle #2",
  "Washington On Your Side",
  "One Last Time",
  "I Know Him",
  "The Adams Administration",
  "We Know",
  "Hurricane",
  "The Reynolds Pamphlet",
  "Burn",
  "Blow Us All Away",
  "Stay Alive (Reprise)",
  "It's Quiet Uptown",
  "The Election Of 1800",
  "Your Obedient Servant",
  "Best Of Wives And Best Of Women",
  "The World Was Wide Enough",
  "Who Lives, Who Dies, Who Tells Your Story"
]

h_conversations.each do |song|
  Conversation.create!({ chat_name: song })
end