export const fetchUsers = (query = "") => (
  $.ajax({
    url: `api/users?query=${query}`,
    method: 'GET',
  })
);

export const updateUser = (formData, userId) => (
  $.ajax({
    url: `api/users/${userId}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    data: formData
  })
);
