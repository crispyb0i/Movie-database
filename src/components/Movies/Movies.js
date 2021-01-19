import MoviePreview from '../MoviePreview/MoviePreview';
import { useState, useEffect } from 'react';
import './Movies.css'

const Movies = (props) => {

  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const input = props.input

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setTrendingMovies(data.results))
  },[])

  useEffect(() => {
    if(input.trim()) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${input}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }
  },[input])

  console.log(trendingMovies)

  let shownMovies = input ? movies : trendingMovies
  console.log(movies)
  let title = input ? `Search Results For "${input.trim()}"` : "Movies Trending Today"
  return (
    <div className='main-container'>
      <h1 className='main-container__title'>{title}</h1>
      <div className='movies-container'>
        {
          shownMovies.map(movie =>
            <MoviePreview className='movie-container__movie' key={movie.id} movie={movie}/>
          )
        }
      </div>
    </div>
  )
}

export default Movies
