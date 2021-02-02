import Search from './components/Search/Search';
import MoviePage from './pages/MoviePage/MoviePage'
import Profile from './components/Profile/Profile'
import SignIn from './pages/SignIn/SignIn'
import PersonPage from './pages/PersonPage/PersonPage'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/'>
              <h1 className='App__title'>MOVIE DATABASE</h1>
              <Search />
          </Route>
          <Route path='/movie/:id'>
            <MoviePage />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/person/:id'>
            <PersonPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
