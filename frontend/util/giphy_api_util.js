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
        api_key: "dc6zaTOxFJmzC"
      }
    })
  );
};

export const fetchStickys = (query, offset) => {
  let url = (query === "") ? "trending" : "search";
  return (
    $.ajax({
      method: 'GET',
      url: `https://api.giphy.com/v1/stickers/${url}`,
      data: {
        q: query,
        limit: 5,
        offset: offset,
        api_key: "dc6zaTOxFJmzC"
      }
    })
  );
};
