export const fetchMessage = (convId, limit = 1) => (
  $.ajax({
    url: `api/conversations/${convId}/messages`,
    method: 'GET',
    data: {
      limit: limit
    }
  })
);

// export const fetchMessages = (convId) => (
//   $.ajax({
//     url: `api/conversations/${convId}/messages`,
//     method: 'GET',
//   })
// );

export const fetchMessages = (convId) => (
  $.ajax({
    url: `api/conversations/${convId}/messages`,
    method: 'GET',
  })
  );

export const createMessage = (message) => (
  $.ajax({
    url: `api/conversations/${message.conversation_id}/messages`,
    method: 'POST',
    data: {
      message
    }
  })
);
