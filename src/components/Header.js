import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { hamburgerIcon, closeIcon } from '../globals/icon';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 576px)');
    mediaQuery.addEventListener('change', isDesktop);
    //cleanup function to remove the event listener
    return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

  return (
    <header className={navOpen ? 'show' : 'undefined'}>
      <div className="top-bar">
        <h1>
          <Link to="/" className="site-logo">
            <span className="logo-m">M</span>ovie
            <span className="logo-w">W</span>
            ave
          </Link>
        </h1>
        <button
          onClick={handleClick}
          className="btn-main-nav"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          {!navOpen ? hamburgerIcon() : closeIcon()}
        </button>
        <Nav handleClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
