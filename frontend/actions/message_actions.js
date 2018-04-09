export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
});

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages
});

export const fetchMessage = (chatId) => ({
  a: 'abc'
});

export const setUpChatRoom = (convId, action) => {
  App.chatroom = App.cable.subscriptions.create({
    channel: "ChatChannel",
    conv_id: convId
  }, {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {
      return $('.live-chat').append(data['body']);
    },
    speak: function(message) {
      return this.perform('speak', message);
    }
  });
};
