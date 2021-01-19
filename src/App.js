import Search from './components/Search/Search';
import MoviePage from './components/MoviePage/MoviePage'
import Profile from './components/Profile/Profile'
import Nav from './pages/Nav/Nav'
import Footer from './pages/Footer/Footer'
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
          <Route exact path='/movie/:id'>
            <MoviePage />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
