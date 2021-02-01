import React from 'react';
import './Panel.css'

const Panel = (props) => {
  return (
    <div className='panel'>
      {props && <img className="panel__poster" src={props.poster} /> }
      <ul className='panel__list'>
        <li className='panel__list__item'>Favorite</li>
        <li className='panel__list__item'>Watched</li>
        <li className='panel__list__item'>Wish List</li>
      </ul>
    </div>
  )
}

export default Panel
