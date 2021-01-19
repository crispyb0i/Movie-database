import { Link } from 'react-router-dom';
import './MoviePreview.css'

const MoviePreview = (props) => {

  const {
    name,
    backdrop_path,
    poster_path,
    title,
    first_air_date,
    release_date,
    id
  } = props.movie

  let header = name ? name : title;
  if(header.length > 40) {
    header = header.slice(0,40) + '...'
  }

  let date = 'data unavailable';

  if(first_air_date) {
    date = first_air_date.slice(0,4)
  } else if (release_date) {
    date = release_date.slice(0,4)
  }

  // https://image.tmdb.org/t/p/w500/

  const poster = poster_path ?
   `https://image.tmdb.org/t/p/w500/${poster_path}` :
    `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fjanethevirgin%2Fimages%2F4%2F42%2FImage-not-available_1.jpg%2Frevision%2Flatest%3Fcb%3D20150721102313&f=1&nofb=1`

  return (
    <Link to={`/movie/${id}`} className='movie-preview'>
      <img className='movie-preview__image' src={poster} />
      <h1 className='movie-preview__title'>{header}</h1>
      <p className='movie-preview__release-date'>{date}</p>
    </Link>
  )
}

export default MoviePreview
//
// backdrop_path: "/lbWUCXIeoVXowAtLlAVR3aeHjkT.jpg"
// first_air_date: "2021-01-08"
// genre_ids: (3) [80, 18, 9648]
// id: 96677
// media_type: "tv"
// name: "Lupin"
// origin_country: ["FR"]
// original_language: "fr"
// original_name: "Lupin"
// overview: "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family."
// popularity: 241.177
// poster_path: "/sgxawbFB5Vi5OkPWQLNfl3dvkNJ.jpg"
// vote_average: 8.1
// vote_count: 133
