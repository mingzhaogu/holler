export const fetchGiphys = (searchTerm, offset) => (
  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search',
    limit: 5,
    offset: offset
  })
);
