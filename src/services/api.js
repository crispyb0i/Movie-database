const movieSearchURL = 'https://api.themoviedb.org/3/movie/'
const multiSearchURL = 'https://api.themoviedb.org/3/search/multi'
const API_KEY = process.env.REACT_APP_API_KEY

export const fetchTrendingMovies = () => {
  return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.json())
}

export const fetchMovieData = id => {
  return fetch(`${movieSearchURL}${id}?api_key=${API_KEY}`)
    .then(response => response.json())
}

export const fetchMovieCredits = id => {
  return fetch(`${movieSearchURL}${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
}

export const searchMovies = input => {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}`)
    .then(response => response.json())
}

export const fetchTrendingShows = () => {
  return fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
    .then(response => response.json())
}

export const multiSearch = query => {
  return fetch(`${multiSearchURL}?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(response => response.json())
}

// https://api.themoviedb.org/3/search/multi?api_key=5a30cbf91506d4fd84f16d4119821fb3&language=en-US&query=lol&page=1&include_adult=false
