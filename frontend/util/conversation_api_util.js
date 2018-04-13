export const fetchConversations = (query) => (
  $.ajax({
    url: `api/conversations?query=${query}`,
    method: 'GET'
  })
);

export const fetchConversation = (id) => (
  $.ajax({
    url: `api/conversations/${id}`,
    method: 'GET'
  })
);

export const createConversation = (users, chatName) => (
  $.ajax({
    url: 'api/conversations',
    method: 'POST',
    data: {
      users,
      chatName
    }
  })
);

// BONUSES:

// export const updateConversation = (conversation) => (
//   $.ajax({
//     url: `api/conversations/${conversation.id}`,
//     method: 'PATCH',
//     data: { conversation }
//   })
// );

export const updateConversation = (formData, convId) => {
  return (
    $.ajax({
      url: `api/conversations/${convId}`,
      method: 'PATCH',
      contentType: false,
      processData: false,
      data: formData
    })
  );
};

// export const deleteConversation = (id) => (
//   $.ajax({
//     url: `api/conversations/${id}`,
//     method: 'DELETE'
//   })
// );
