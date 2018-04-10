export const fetchConversations = (query) => (
  $.ajax({
    url: 'api/conversations',
    method: 'GET',
    data: { query }
  })
);

export const fetchConversation = (id) => (
  $.ajax({
    url: `api/conversations/${id}`,
    method: 'GET'
  })
);

export const createConversation = (conversation) => (
  $.ajax({
    url: 'api/conversations',
    method: 'POST',
    data: { conversation }
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

// export const deleteConversation = (id) => (
//   $.ajax({
//     url: `api/conversations/${id}`,
//     method: 'DELETE'
//   })
// );
