// Development Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

//Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

//Pages
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavourites from '../pages/PageFavourites';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageSearch from '..//pages/PageSearch';
import Page404 from '../pages/Page404';

import { APP_FOLDER_NAME } from '../globals/globalVariables';

const AppRouter = () => {
  //state for light/dark mode theme for the application
  //default is set to dark mode, can toggle mode via the button in site header
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router basename={APP_FOLDER_NAME}>
      <div className="site-wrapper">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact>
              <PageHome />
            </Route>
            <Route path="/about">
              <PageAbout />
            </Route>
            <Route path="/favourites">
              <PageFavourites />
            </Route>
            <Route path="/movie/:id">
              <PageSingleMovie />
            </Route>
            <Route path="/search">
              <PageSearch />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
