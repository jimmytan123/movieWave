// Development Components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PageFavourites from './pages/PageFavourites';



const App = () => {
  return (
    <Router>
      <div className="site-wrapper">
        <Header />
        <main>
          <Switch>
            <Route path='/' exact><PageHome /></Route>
            <Route path='/about'><PageAbout /></Route>
            <Route path='/favourites'><PageFavourites /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
