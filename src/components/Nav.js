import { NavLink } from 'react-router-dom';
import { searchIcon } from '../globals/icon';
import DarkModeToggle from 'react-dark-mode-toggle';

const Nav = ({ handleShowHide, isDarkMode, setIsDarkMode }) => {
  //when user clicks a menu link or the element lost focus within the nav menu, close it
  const closeNav = (e) => {
    if (window.innerWidth < 576) {
      handleShowHide();
    } else {
      e.target.blur();
    }
  };

  return (
    <nav className="main-nav" onClick={closeNav}>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
        <li>
          <NavLink to="/search" className="search-icon-link">
            {searchIcon}
          </NavLink>
        </li>
        <li className='mode-toggle-li'>
          <DarkModeToggle
            onChange={setIsDarkMode}
            size={57}
            checked={isDarkMode}
            speed={1.2}
            className="dark-mode-toggle-btn"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
