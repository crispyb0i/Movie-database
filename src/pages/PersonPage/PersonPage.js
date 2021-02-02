import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchPerson } from '../../services/api'
import './PersonPage.css'


const PersonPage = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([])

  useEffect(() => {
    fetchPerson(id)
      .then(data => {
        // setLoading(false);
        setPerson(data);
        console.log('person data',data)
      })
    }, [])

  const {
    birthday,
    name,
    imdb_id,
    place_of_birth,
    profile_path,
    biography
  } = person
  console.log(id)
  return (
    <div className="person-page">
      <h1>{name}</h1>
      <p>{`birthday: ${birthday}`}</p>
      <img className="person-page__image" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`} />
      <p>{`biography: ${biography}`}</p>
    </div>

  )
}

export default PersonPage
