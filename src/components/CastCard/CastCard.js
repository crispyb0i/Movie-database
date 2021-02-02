import React from 'react';
import { Link } from 'react-router-dom'
import './CastCard.css';

const CastCard = (props) => {
  console.log('asssssssssss',props)
  const {
    cast_id,
    character,
    credit_id,
    id,
    name,
    profile_path
  } = props.movieCredits

  return (
    <div className="cast-card">
      {
        profile_path ?
        <Link to={`/person/${id}`}>
          <img className="cast-card__image" src={`https://image.tmdb.org/t/p/w500${profile_path}`} />
        </Link>
           :
          <img className="cast-card__image" src={`https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvector.me%2Ffiles%2Fimages%2F1%2F5%2F151985%2Fnone_icon_available_no_unavailable.jpg&f=1&nofb=1`} />
      }

      <p className="cast-card__name">{name}</p>
      <p className="cast-card__character">{character}</p>
    </div>
  )
}

export default CastCard;
