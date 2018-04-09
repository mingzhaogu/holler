export const fetchMessage = (convId, limit = 1) => (
  $.ajax({
    url: `api/conversations/${convId}/messages`,
    method: 'GET',
    data: {
      limit: limit
    }
  })
);
