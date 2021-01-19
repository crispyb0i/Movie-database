import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__container'>
        <Link to='/' className='navbar__listItem'>HOME</Link>
        <Link to='/about' className='navbar__listItem'>ABOUT</Link>
        <Link to='/profile' className='navbar__listItem'>PROFILE</Link>
      </ul>
    </nav>
  )
}

export default Nav
