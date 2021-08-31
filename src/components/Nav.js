import { NavLink } from 'react-router-dom';
import { searchIcon } from '../globals/icon';

const Nav = ({ handleShowHide }) => {
  //when user clicks a link or the element lost focus, close the nav 
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
      </ul>
    </nav>
  );
};

export default Nav;
