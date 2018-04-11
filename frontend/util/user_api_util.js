export const fetchUsers = (query) => (
  $.ajax({
    url: `api/users?query=${query}`,
    method: 'GET'
  })
);
