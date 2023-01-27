export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponse = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    return Promise.reject(response.status);
  }
};

export const getInitialMovies = () => {
  return fetch(BASE_URL, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)
};
