export const BASE_URL = 'http://localhost:3000';

const checkResponse = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    return Promise.reject(response.status);
  }
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)
};

export const updateUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email
    })
  })
  .then(checkResponse)
};

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)
};

export const saveMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image,
      trailerLink: data.trailerLink,
      thumbnail: data.thumbnail,
      movieId: data.movieId,
      nameRU: data.nameRU,
      nameEN: data.nameEN
    })
  })
  .then(checkResponse)
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  })
  .then(checkResponse)
};
