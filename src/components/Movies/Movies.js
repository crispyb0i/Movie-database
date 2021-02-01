import MoviePreview from '../MoviePreview/MoviePreview';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies, searchMovies, fetchTrendingShows } from '../../services/api'
import './Movies.css'

const Movies = (props) => {

  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);
  const [searchSwitch, setSearchSwitch] = useState('movies')
  const input = props.input

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetchTrendingMovies().then(data => setTrendingMovies(data.results))
    fetchTrendingShows().then(data => setTrendingShows(data.results))
  },[])

  useEffect(() => {
    if(input.trim()) {
      searchMovies(input)
        .then(data => setMovies(data.results))
    }
  },[input])

  console.log('trendingMovies',trendingMovies)
  console.log('trendingShows',trendingShows)

  let shownMovies = input ? movies : trendingMovies
  console.log('trendingShows123',trendingShows)
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
        <h1>TRENDING SHOWS</h1>
        {
          trendingShows.map(show =>
            <MoviePreview className='movie-container__movie' key={show.id} movie={show}/>
          )
        }
      </div>
    </div>
  )
}

export default Movies
