import { useState } from 'react';
import Movies from '../Movies/Movies';
import './Search.css';

const Search = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className='main-container'>
      <div className='search'>
        <form className='search__form'>
          <input
            onChange={handleChange}
            type='text'
            className='search__input'
            placeholder='enter movie name'/>
        </form>
      </div>
      <div className='movies-container'>
        <Movies input={input}/>
      </div>
    </div>
  )
}

export default Search
