export const fetchGiphys = (query, offset) => (
  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q: query,
      limit: 5,
      offset: offset,
      api_key: "dc6zaTOxFJmzC"
    }
  })
);
