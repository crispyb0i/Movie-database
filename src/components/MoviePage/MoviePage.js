import { BoxLoading } from 'react-loadingg';
import './MoviePage.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const MoviePage = () => {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const [ movie, setMovie ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setMovie(data);
      })
  },[])

  const { title, tagline, overview, backgroundURL, runtime, release_date, homepage} = movie;

  // `http://www.publicdomainpictures.net/pictures/30000/velka/film-background-1334067869u9d.jpg`

  const background = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`

  const poster = movie.poster_path ?
  `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` :
  `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shtb-law.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fphoto-unavailable-1.jpg&f=1&nofb=1`

  let content = loading ? <BoxLoading /> :
  (<div>
    <div className='movie-page'>
      <div className='movie-page__banner'>
        <img className='movie-page__backdrop' src={background} />
        <img src={poster} className='movie-page__poster-container__image'/>
      </div>
      <div className='movie-page__description__header'>
        <h1 className='movie-page__description__header__title'>{title}</h1>
        <p className='movie-page__description__header__tagline'><em>{tagline}</em></p>
      </div>
      <div className='movie-page__description'>
        <h1>{title}</h1>
        <br></br>
        <p>{`Runtime - ${runtime}m`}</p>
        <br></br>
        <p>{`Release Date - ${release_date}`}</p>
        <br></br>
        {homepage ?
          <p>Website: <a href={homepage}>{homepage}</a></p>
          : null
        }
        <br></br>
        <h2>OVERVIEW</h2>
        <br></br>
        <p>{overview}</p>
      </div>
    </div>
  </div>)

  return (
    content
  )
}

export default MoviePage
