# Holler :cherry_blossom:

Holler is a Facebook Messenger-inspired peer-to-peer messaging application utilizing a Ruby on Rails/PostgreSQL frontend and a React.js/Redux backend. Its live messaging feature is powered by WebSockets, integrated into the application using Rails ActionCable technology. Other features include real-time messaging, stickers/gifs, image uploading, etc.

This project was proposed, designed, and built within two weeks, however, I do plan on adding more to it at a later time. (Please see [Potential Future Features](#potential-future-features))

## Demo:
Experience the [live demo](https://holler-messenger.herokuapp.com/).

## Features:
- design based on Facebook Messenger
- creating direct and/or group conversations
- communicating via real-time messages (utilizing **WebSockets**)
- sending stickers and gifs (courtesy of **Giphy API**)
- changing the conversation name
- uploading images (via **Amazon Web Services**)
- other features to be implemented in the future

### Implementing WebSockets Using Rails ActionCable
When a conversation is mounted or loaded on the frontend, an ActionCable chatroom is set up based on the `conversationId`.

```javascript
class MessageView extends React.Component {
  setUpChatroom(convId, receiveMessage) {
    const chatroom = ActionCable.createConsumer();
    chatroom.subscriptions.create({
      channel: 'ChatChannel',
      room: `chat-${convId}`,
    }, {
      connected: function() {},
      disconnected: function() {},
      received: ({ payload }) => {
        receiveMessage(payload)
      },
    });
  };
}
```

Once a user submits a message (or sticker/gif), a jQuery `$.ajax POST request` is sent to the backend, creating the message. The created message is then broadcasted back to the Redux frontend, and an action is dispatched to update the conversations and messages slices of state.

``` ruby
class MessageCreationEventBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
      ("chat-#{message.conversation_id}"),
      payload: ActiveSupport::JSON.decode(render_message(message))
    )
  end

  private

  def render_message(message)
    ApplicationController.render(
      partial: 'api/messages/action_message',
      locals: { message: message }
    )
  end
end
```

Sample XHR response:

```javascript
{
  "message": {
    "id":45,
    "senderId":2,
    "conversationId":1,
    "body":"https://media0.giphy.com/media/jU9rKpLMLRXPO/200.gif?cid=e1bb72ff5ad1201d48622e45452710d3",
    "messageType":"Giphy",
    "timestamp":"APR 13, 2:25PM"
  },
  "messageIds": [31,32,33,34,35,36,37,38,39,40,41,42,43]
}
```

### GIPHY APIs
Users can also send Stickers and/or GIFs for additional personalized messages (and increased cuteness level), thanks to the GIPHY's APIs. The following endpoints were used for this project:

- GIPHY Trending Endpoint
- GIPHY Search Endpoint
- Sticker Trending
- Sticker Search

Depending on if the user has typed in a search query, the jQuery `$.ajax GET request` would fetch data from different endpoints.

```javascript
export const fetchGiphys = (query, offset) => {
  let url = (query === "") ? "trending" : "search";
  return (
    $.ajax({
      method: 'GET',
      url: `https://api.giphy.com/v1/gifs/${url}`,
      data: {
        q: query,
        limit: 5,
        offset: offset,
        api_key: "*************"
      }
    })
  );
};
```

## Technologies Used
- Ruby on Rails/PostgreSQL — backend
- React.js/Redux — frontend
- User Authentication — from frontend to backend, using BCrypt
- Rails ActionCable — implement WebSockets for real-time, peer-to-peer messaging
- jQuery — XHR requests
- AWS (Amazon Web Services) — image uploading
- HTML/CSS/SCSS — frontend design
- GIPHY API — stickers and gifs

## Potential Future Features
- add users to existing conversations
- display message timestamp on hover
- update user image
- send images as messages (other than stickers/gifs)
- display `...` bubble when someone is typing
