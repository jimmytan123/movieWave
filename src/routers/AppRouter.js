// Development Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';

//Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageSearch from '..//pages/PageSearch';
import Page404 from '../pages/Page404';



const AppRouter = () => {

  const [darkmode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(!darkmode);
  }

  return (
    <Router>
      <div className="site-wrapper">
        <Header />
        <main className={darkmode ? 'dark-mode' : 'light-mode'}>
          <Switch>
            <Route path='/' exact><PageHome /></Route>
            <Route path='/about'><PageAbout /></Route>
            <Route path='/favourites'><PageFavourites /></Route>
            <Route path='/movie/:id'><PageSingleMovie /></Route>
            <Route path='/search'><PageSearch /></Route>
            <Route><Page404 /></Route>
          </Switch>
        </main>
        <Footer toggleMode={toggleMode} />
      </div>
    </Router>
  );
};

export default AppRouter;
