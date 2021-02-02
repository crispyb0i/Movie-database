import { BoxLoading } from 'react-loadingg';
import Panel from '../../components/Panel/Panel';
import CastCard from '../../components/CastCard/CastCard';
import './MoviePage.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { fetchMovieData, fetchMovieCredits } from '../../services/api';
import { formatGenres } from '../../utils/utils';

const MoviePage = () => {

  const { id } = useParams();
  const [ movie, setMovie ] = useState([]);
  const [ movieCredits, setMovieCredits ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    fetchMovieData(id)
      .then(data => {
        setLoading(false);
        setMovie(data);
        console.log(data)
      })

    fetchMovieCredits(id)
      .then(data => {
        setMovieCredits(data);
        console.log('movie credits',data)
      })
  },[])

  const {
    title,
    tagline,
    overview,
    backgroundURL,
    runtime,
    release_date,
    homepage,
    genres,
    original_language,
    production_companies,
    imdb_id,
    backdrop_path,
    poster_path
  } = movie;

  const background = backdrop_path && `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`

  const poster = poster_path ?
  `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` :
  `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvector.me%2Ffiles%2Fimages%2F1%2F5%2F151985%2Fnone_icon_available_no_unavailable.jpg&f=1&nofb=1`

  let content = loading ? <BoxLoading /> :

  <div className='movie-page'>
      {background &&
      <div className='movie-page__banner'>
        <img className='movie-page__backdrop' src={background} />
        {/* <img src={poster} className='movie-page__poster-container__image'/> */}
      </div>}



      <div className='movie-page__bottom-container'>
        <div className='movie-page__panel'>
          <Panel poster={poster}/>
        </div>
        <div className='movie-page__description'>
          <div className='movie-page__description__header'>
            <h1 className='movie-page__description__header__title'>{title}</h1>
            <p className='movie-page__description__header__tagline'><em>{tagline}</em></p>
          </div>
          <br></br>
          <div className='movie-page__details'>
            <p>{`Runtime: ${runtime}m`}</p>
            <br></br>
            <p>{`Release Date: ${release_date}`}</p>
            <br></br>
            {genres &&
              <p>{`Genre: ${formatGenres(genres)}`}</p>
            }
            <br></br>
            {homepage &&
              <p><a href={homepage}>Website</a></p>
            }
            {imdb_id &&
              <p><a href={`https://www.imdb.com/title/${imdb_id}`}>IMDB</a></p>
            }
            <br></br><br></br>
            <h2>OVERVIEW</h2>
            <br></br>
            <p>{overview}</p>
            <br></br>
            <h2>CAST</h2>
            <div className="movie-page__cast-container">
              { movieCredits.cast && movieCredits.cast.map(cast =>
                <CastCard movieCredits={cast} />
              )}
            </div>
          </div>
        </div>

      </div>
  </div>

  return (
    content
  )
}

export default MoviePage
