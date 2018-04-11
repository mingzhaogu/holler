export const fetchGiphys = (query, offset) => {
  let url = (query === "") ? "trending" : "search";
  return (
    $.ajax({
      method: 'GET',
      url: `http://api.giphy.com/v1/gifs/${url}`,
      data: {
        q: query,
        limit: 5,
        offset: offset,
        api_key: "dc6zaTOxFJmzC"
      }
    })
  );
};

export const fetchStickers = (query, offset) => {
  let url = (query === "") ? "trending" : "search";
  return (
    $.ajax({
      method: 'GET',
      url: `http://api.giphy.com/v1/stickers/${url}`,
      data: {
        q: query,
        limit: 5,
        offset: offset,
        api_key: "dc6zaTOxFJmzC"
      }
    })
  );
};
