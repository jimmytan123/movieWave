import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import { hamburgerIcon, closeIcon } from '../globals/icon';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false);

  //function to toggle state to show/hide mobile navs when user click the hamburger/close button
  const handleShowHide = () => {
    setNavOpen(!navOpen);
  };

  const isDesktop = (e) => {
    if (e.matches) {
      setNavOpen(false);
    }
  };

  //when browser width is larger than 576px, close the mobile nav
  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 576px)');
    mediaQuery.addEventListener('change', isDesktop);
    //cleanup function to remove the event listener
    return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);

  return (
    <header className={navOpen ? 'show' : undefined}>
      <div className="top-bar">
        <h1>
          <NavLink to="/" className="site-logo">
            <span className="logo-m">M</span>ovie
            <span className="logo-w">W</span>
            ave
          </NavLink>
        </h1>
        <button
          onClick={handleShowHide}
          className="btn-main-nav"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          {!navOpen ? hamburgerIcon : closeIcon}
        </button>
        <Nav
          handleShowHide={handleShowHide}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </div>
    </header>
  );
};

export default Header;
